import "./Hero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay"></div>

      <div className="contact-hero-content">
        <h1>Contact Us</h1>
        <p>
          Get in touch with Mahaveer Chemicals for product inquiries,
          technical support, and reliable chemical solutions.
        </p>

        <div className="contact-hero-tags">
          <span>Quick Response</span>
          <span>Technical Support</span>
          <span>Pan-India Supply</span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
