import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navbar from './components/Navbar';  // Importera Navbar
import Home from './components/Home';      // Home sektion
import Estates from './components/Estates'; // Estates sektion
import Contact from './components/Contact';
import Footer from './components/Footer';
import Info from './components/Info';
import SellEstate from './components/SellEstate';
/* import AllEstates from './components/AllEstates'; */


import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';


function App() {
  return (
    <Router>
          <div className='App'>
     <Navbar/>  
     <main>
      <Home/>
      <Estates/>
      <Info/>
      <SellEstate/>
      <Contact/>
      <Footer/>
     </main>
    </div>

    </Router>

   
  );
}

export default App;
