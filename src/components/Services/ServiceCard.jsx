// components/Services/ServiceCard.jsx

export default function ServiceCard({ data, onClick }) {
  return (
    <div className="service-card" onClick={onClick}>
      <div className="icon-box">{data.icon}</div>

      <h3 className="service-title">{data.title}</h3>
      <p className="service-desc">{data.desc}</p>

      <ul className="service-list">
        {data.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
