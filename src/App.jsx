import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

import Catalogue from "./pages/catalogue/Catalogue"
import Contact from "./pages/contact/contact"
import Offers from './pages/offers/Offers';

import About from './pages/about/About';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

import MyNav from './components/myNav/myNav'

function App() {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default App
