import "./About.css";
import logo from "../../assets/logo.png"; // use your logo path

import { NavLink } from "react-router-dom";

const AboutHome = () => {
  return (
    <section className="about-home">
      <div className="about-wrapper">
        
        {/* LEFT - LOGO */}
        <div className="about-logo">
          <img src={logo} alt="Mahavir Chemicals Group" />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="about-content">
          <span className="about-badge">About Company</span>

          <h2>Welcome to Mahavir Chemicals Group</h2>

          <p>
            Over <strong>13 years</strong> of chemistry, innovation, and trust.
            Founded in 2012 by <strong>Mr. Vinod Jain</strong>, Mahavir Chemicals
            Group began as a dedicated chemical distributor and quickly became
            a key player in the industry.
          </p>

          <p>
            Today, we serve over <strong>5000+ customers worldwide</strong>,
            driven by ethical values, fair trade practices, and prompt delivery
            of high-quality chemicals—making us one of the most trusted suppliers
            in the country.
          </p>

          
          <NavLink to="/about" className="about-btn">Learn More About Us</NavLink>
        </div>

      </div>
    </section>
  );
};

export default AboutHome;
