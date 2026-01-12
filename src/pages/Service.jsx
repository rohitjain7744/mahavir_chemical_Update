import "./Service.css";
import { NavLink } from "react-router-dom";

const services = [
  {
    title: "Industrial Chemical Supply",
    desc: "Reliable supply of high-quality industrial chemicals for manufacturing, processing, and infrastructure industries with consistent quality and timely delivery."
  },
  {
    title: "Water Treatment Solutions",
    desc: "Comprehensive chemical solutions for boiler water, cooling water, RO systems, and ETP plants to improve efficiency and reduce operational costs."
  },
  {
    title: "Laboratory Chemicals",
    desc: "High-purity laboratory and analytical chemicals suitable for research, testing, quality control, and educational institutions."
  },
  {
    title: "Specialty & Performance Chemicals",
    desc: "Customized specialty chemicals designed for specific industrial applications including paper, sugar, oil & gas, and refinery sectors."
  },
  {
    title: "Safety & PPE Solutions",
    desc: "Complete range of personal protective equipment (PPE) and industrial safety products to ensure workplace safety and regulatory compliance."
  },
  {
    title: "Technical Support & Consultation",
    desc: "Expert technical guidance, product selection assistance, and on-site support to optimize chemical usage and process performance."
  }
];

const Service = () => {
  return (
    <section className="service-page">

      {/* HERO */}
      <div className="service-hero">
        <h1>Our Services</h1>
        <p>
          Delivering reliable chemical solutions, technical expertise, and
          industry-focused support.
        </p>
      </div>

      {/* SERVICES */}
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="service-cta">
        <h2>Looking for the Right Chemical Solution?</h2>
        <p>
          Contact Mahaveer Chemicals to discuss your industrial or laboratory
          requirements with our experts.
        </p>
        {/* <a href="/contact" className="cta-btn">Contact Us</a> */}
        <NavLink to="/contact" className="cta-btn">Contact Us</NavLink>
      </div>

    </section>
  );
};

export default Service;
