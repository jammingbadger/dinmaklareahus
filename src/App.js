import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navbar from './components/Navbar';  
import Home from './components/Home';      
import Estates from './components/Estates'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import Info from './components/Info';
import Info2  from './components/Info2';
/* import AllEstates from './components/AllEstates'; */
/* import SellEstate from './components/SellEstate'; */
/* import AllEstates from './components/AllEstates';  */
import '@fortawesome/fontawesome-free/css/all.min.css';
/* import EstateDetails from './components/EstatesDetails'; */
/* import estatesData from './data/estatesData'; */
import './App.css';



function App() {
  return (
    <Router>
          <div className='App'>
     <Navbar/>  
     <main>
      <Home/>
      {/* <Estates/> */}

      <Info/>
      <Info2/>
      {/* <SellEstate/> */}
      <Contact/>
      <Footer/>
     </main>
    </div>

    </Router>

   
  );
}

export default App;
