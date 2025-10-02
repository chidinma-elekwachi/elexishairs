import "./Footer.css";
import { Link } from "react-router-dom";
import logo from '../../assets/elexishairlogo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="social-links">    
        <div>    
          <a href="https://wa.me/2349138661387"><img src={logo} alt="elexishairs" className="ehairslogo" /></a>
          <p>Affordable Luxury at your doorstep.</p>
        </div>

        <div className="socials">
        <h4>Socials</h4>

          <a href="https://wa.me/2349138661387" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://instagram.com/elexishairs.ng" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com/@elexishairs.ng" target="_blank" rel="noreferrer">Tiktok</a>
        </div>

        <div className="footlinks">
        <h4>Links</h4>

          <Link to="/">Catalogue</Link>
          <Link to="/about">About</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/cart">Cart</Link>
        </div>

        </div>

      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Elexishairs
      </div>
    </footer>
  );
}