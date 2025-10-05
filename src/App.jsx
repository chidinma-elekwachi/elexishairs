import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

import Catalogue from "./pages/catalogue/Catalogue"
import Offers from './pages/offers/Offers';

import About from './pages/about/About';
import { Cart } from './components/cart/Cart';

import MyNav from './components/myNav/myNav'
import Footer from './components/footer/Footer';
import whatsappIcon from './assets/whatsappIcon.png';

import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <ShopContextProvider>
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

      <a 
          href="https://wa.me/2349138661387" 
          target="_blank" 
          rel="noreferrer"
          className="whatsapp-float"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        </a>
      <Footer />
    </Router>
    </ShopContextProvider>
  )
}

export default App
