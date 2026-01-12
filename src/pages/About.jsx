import "./About.css";

const About = () => {
  return (
    <section className="about-page">

      {/* HERO / INTRO */}
      <div className="about-hero">
        <h1>About Mahaveer Chemicals</h1>
        <p>
          A trusted partner in industrial, performance, and laboratory chemical
          solutions.
        </p>
      </div>

      {/* VISION & MISSION */}
      <div className="about-section">
        <h2>Our Vision & Mission</h2>
        <p>
          Mahaveer Chemicals has been a trusted supplier of high-quality
          industrial, performance, and laboratory chemicals for over a decade.
          Our mission is to provide safe, reliable, and cost-effective chemical
          solutions that empower industries to grow sustainably.
        </p>
        <p>
          We prioritize quality, safety, and innovation in every product and
          service we offer, ensuring long-term value for our clients and
          partners.
        </p>
      </div>

      {/* VALUES */}
      <div className="about-section light">
        <h2>Our Values</h2>
        <ul className="values-list">
          <li><strong>Integrity:</strong> Ethical business practices and transparency</li>
          <li><strong>Innovation:</strong> Continuous improvement and technical excellence</li>
          <li><strong>Customer Satisfaction:</strong> Reliable service and long-term partnerships</li>
          <li><strong>Safety & Sustainability:</strong> Environmentally responsible operations</li>
        </ul>
      </div>

      {/* TEAM */}
      <div className="about-section">
        <h2>Meet Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <h3>Miss Priya Jain</h3>
            <p className="role">Chief Executive Officer (CEO)</p>
          </div>

          <div className="team-card">
            <h3>Mr. Vinod Jain</h3>
            <p className="role">Manager</p>
          </div>

          <div className="team-card">
            <h3>Technical & Quality Director</h3>
            <p className="role">Quality & Compliance</p>
          </div>

          <div className="team-card">
            <h3>Marketing & Finance Director</h3>
            <p className="role">Business Development</p>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="about-section light">
        <h2>Certifications & Compliance</h2>
        <p>
          We are ISO-certified and strictly adhere to international quality
          standards in chemical manufacturing and handling. All our products
          undergo rigorous testing to ensure compliance with safety and
          regulatory requirements.
        </p>

        <div className="cert-list">
          <span>ISO Certification</span>
          <span>Safety Certification</span>
          <span>Quality Compliance</span>
        </div>
      </div>

    </section>
  );
};

export default About;
