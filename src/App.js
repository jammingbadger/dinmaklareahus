import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
/* import PropertyList from "./components/PropertySection"; */
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import Building from "./components/Building";
/* ß */
import Team from "./components/Team";
import Info from "./components/Info";
import Info2 from "./components/Info2";
import Peter from "./components/Peter";
import Info3 from "./components/Info3";
import { useEffect } from "react";
/* import PropertySection from "./components/PropertySection"; */

const ScrollToHash = () => {
  const {hash} = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout (() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToHash />
      <Routes>
        {/* Startsida med extra sektioner */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Building />
              {/* <PropertySection/> */}
              <Info />
              <Info2 />
              <Info3 />
              <Team />
              <ContactPage />
              
            </>
          } 
        />
        {/*  <Route path="/properties" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetails />} /> */}
        <Route path="/peter" element={<Peter />} /> 
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
