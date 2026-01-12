import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h3 className="footer-logo">
            Mahaveer <span>Chemicals</span>
          </h3>
          <p>
            Trusted supplier of industrial and specialty chemicals for pharma,
            textile, water treatment, and manufacturing industries.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/home" className="aa">Home</NavLink></li>
            <li><NavLink to="/about" className="aa">About</NavLink></li>
            <li><NavLink to="/product"className="aa">Products</NavLink></li>
            <li><NavLink to="/Service" className="aa">Service</NavLink></li>
            <li><NavLink to="/contact" className="aa">Contact</NavLink></li>
             
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h4>Our Divisions</h4>
          <ul>
            <li>Lab Chemicals</li>
            <li>Safety Products</li>
            <li>Raw Chemicals</li>
            <li>Speciality Chemicals</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 GIDC, Vapi, Gujarat, India</p>
          <p>📞 +91 9890948203</p>
          <p>📧 mahavirchemical12@gmail.com</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Mahaveer Chemicals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
