import "./Chatbox.css";
import whatsappLogo from "../../assets/whatsapp.png";

const WhatsappChat = () => {
  const phone = "919890948203";
  const message =
    "Hello Mahaveer Chemicals, I am interested in your products.";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="whatsapp-wrapper" onClick={openWhatsApp}>
      <span className="chat-label">Chat with us</span>

      <div className="whatsapp-float">
        <img src={whatsappLogo} alt="WhatsApp Chat" />
      </div>
    </div>
  );
};

export default WhatsappChat;
