// components/Services/ServiceDetails.jsx
import "./Servicedetail.css"

export default function ServiceDetails({ data, isOpen }) {
  return (
    <div className={`details-box ${isOpen ? "open" : ""}`}>
      <h2>{data.title} – Details</h2>
      <p>{data.desc}</p>

      <ul>
        {data.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
