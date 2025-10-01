import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

import Catalogue from "./pages/catalogue/Catalogue"
import Offers from './pages/offers/Offers';

import About from './pages/about/About';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

import MyNav from './components/myNav/myNav'
import myFooter from './components/myFooter/myFooter';

function App() {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <myFooter />
    </Router>
  )
}

export default App
