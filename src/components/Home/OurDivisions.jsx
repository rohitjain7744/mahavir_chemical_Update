import "./OurDivisions.css";

const divisions = [
  {
    title: "Lab Chemicals",
    desc:
      "High-quality chemicals for research, testing, and academic laboratories.",
    tag: "Research & Testing",
  },
  {
    title: "Safety Products",
    desc:
      "Personal protective equipment and safety solutions for industrial use.",
    tag: "Workplace Safety",
  },
  {
    title: "Raw Chemicals",
    desc:
      "Industrial-grade raw chemicals for manufacturing and processing industries.",
    tag: "Industrial Supply",
  },
];

const OurDivisions = () => {
  return (
    <section className="divisions">
      <div className="divisions-container">
        <span className="divisions-tag">Our Divisions & Brands</span>

        <h2>Specialized Solutions Across Core Chemical Segments</h2>

        <div className="divisions-row">
          {divisions.map((item, index) => (
            <div className="division-box" key={index}>
              <span className="division-label">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDivisions;
