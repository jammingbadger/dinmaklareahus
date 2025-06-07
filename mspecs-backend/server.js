require('dotenv').config();

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const MSPECS_TOKEN = process.env.MSPECS_TOKEN;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
const BASE_URL = process.env.BASE_URL;
const SUBSCRIBER_ID = process.env.MSPECS_SUBSCRIBER_ID;


if (!MSPECS_TOKEN) {
  console.error('❌ MSPECS_TOKEN saknas i .env');
  process.exit(1);
}

let cachedDeals = [];

// ✅ Funktion för att hämta ALLA deals från Mspecs
async function fetchAllDeals() {
  try {
    const response = await axios.get(`${BASE_URL}/api/marketing/deals`, {
      headers: {
        'Authorization': `Bearer ${MSPECS_TOKEN}`,
/*         'subscriber-id': SUBSCRIBER_ID
 */      }
    });

    const dealsMeta = response.data;

    const fullDeals = await Promise.all(dealsMeta.map(async (meta) => {
      try {
        return await fetchDeal(meta.id);
      } catch (err) {
        console.warn(`⚠️ Kunde inte hämta detaljer för deal ${meta.id}: ${err.message}`);
        return null;
      }
    }));

    const cleaned = fullDeals.filter(Boolean);
    console.log(`✅ Hämtade ${cleaned.length} fullständiga deals från Mspecs`);
    return cleaned;

  } catch (err) {
    console.error('❌ Kunde inte hämta alla deals:', err.message);
    return [];
  }
}

// ✅ Hämta enskild deal
async function fetchDeal(dealId) {
  const response = await axios.get(`${BASE_URL}/api/marketing/deals/${dealId}`, {
    headers: {
      'Authorization': `Bearer ${MSPECS_TOKEN}`,
/*       'subscriber-id': SUBSCRIBER_ID
 */    }
  });

  return response.data;
}

// ✅ Webhook-validering
function verifyMspecsWebhook(req, res, next) {
  const signatureHeader = req.headers['x-mspecs-signature'];
  if (!signatureHeader) return res.status(400).send('Missing signature');

  const [timestampPart, signaturePart] = signatureHeader.split(',');
  const timestamp = timestampPart.split('=')[1];
  const signature = signaturePart.split('=')[1];

  const rawBody = JSON.stringify(req.body);
  const message = `${timestamp}.${rawBody}`;
  const calculated = crypto.createHmac('sha256', WEBHOOK_SECRET).update(message).digest('hex');

  if (calculated !== signature) {
    return res.status(403).send('Invalid signature');
  }

  next();
}

// ✅ Webhook endpoint
app.post('/webhook', verifyMspecsWebhook, async (req, res) => {
  const { eventType, dealId } = req.body;

  console.log('📬 Webhook mottagen:');
  console.log(`  🔹 Typ: ${eventType}`);
  console.log(`  🔹 Deal ID: ${dealId}`);

  if (eventType === 'PUBLISH') {
    try {
      const deal = await fetchDeal(dealId);
      cachedDeals.unshift(deal);
    } catch (err) {
      console.error('⚠️ Kunde inte hämta deal – lägger till testdeal istället:', err.message);
      cachedDeals.unshift({
        dealId: "test123",
        property: {
          address: { street: "Exempelgatan 1" },
          location: { city: "Stockholm" },
          livingArea: 75
        },
        saleStatus: "Till salu",
        externalUrl: "https://exempel.se/fastighet/test123"
      });
    }
  }

  res.sendStatus(200);
});

// ✅ API för frontend
app.get('/api/deals', (req, res) => {
  res.json(cachedDeals.slice(0, 10));
});

// ✅ Initial laddning av deals vid serverstart
(async () => {
  cachedDeals = await fetchAllDeals();
  console.log(`✅ Laddade ${cachedDeals.length} deals från Mspecs vid uppstart.`);
})();

app.listen(3001, () => console.log('✅ Backend körs på http://localhost:3001'));
