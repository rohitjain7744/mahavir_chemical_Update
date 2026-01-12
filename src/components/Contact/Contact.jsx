import { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    // Web3Forms Access Key
    formData.append(
      "access_key",
      "3d823c80-86f0-4805-9237-d31da242d9e5"
    );

    // Optional details
    formData.append("subject", "New Contact Enquiry - Mahavir Chemicals");
    formData.append("from_name", "Mahavir Chemicals Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT CONTENT */}
        <div className="contact-info">
          <span className="contact-tag">Contact Us</span>

          <h2>Let’s Discuss Your Chemical Requirements</h2>

          <p>
            Reach out to Mahavir Chemicals for reliable chemical solutions,
            technical support, and product inquiries. Our team is ready to
            assist you.
          </p>

          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <span>mahavirchemical12@gmail.com</span>
            </div>
            <div>
              <strong>Phone</strong>
              <span>+91 9890948203 / +91 7016564674</span>
            </div>
            <div>
              <strong>Location</strong>
              <span>GIDC, Vapi, Gujarat</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
          />

          {/* Honeypot (spam protection) */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="success-msg">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="error-msg">
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
