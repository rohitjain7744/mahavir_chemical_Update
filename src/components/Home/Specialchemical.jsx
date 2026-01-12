import { useRef, useState } from "react";
import "./SpecialityChemicals.css";

import paintImg from "../../assets/paint.jpg";
import paperImg from "../../assets/paper.jpg";
import fineImg from "../../assets/finechemicals.jpg";
import lubeImg from "../../assets/finished.jpg";

const data = [
  {
    title: "Paint And Coating",
    img: paintImg,
    desc: "Specialty chemicals for high-performance paints and coatings."
  },
  {
    title: "Paper",
    img: paperImg,
    desc: "Chemicals to improve paper strength, brightness and quality."
  },
  {
    title: "Fine Chemicals",
    img: fineImg,
    desc: "High-purity fine chemicals for pharma & industry."
  },
  {
    title: "Finished Lubricants",
    img: lubeImg,
    desc: "Premium lubricants for industrial applications."
  }
];

const SpecialityChemicals = () => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="speciality">
        <h2>Speciality Chemicals</h2>
        <p className="sub">
          Complete Portfolio of Chemicals for Every Industry !
        </p>

        <div className="slider-wrapper">
          <button className="nav left" onClick={() =>
            sliderRef.current.scrollBy({ left: -320, behavior: "smooth" })
          }>
            ❮
          </button>

          <div className="cards" ref={sliderRef}>
            {data.map((item, i) => (
              <div className="card" key={i}>
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span onClick={() => setActive(item)}>
                    Read More
                    <i />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="nav right" onClick={() =>
            sliderRef.current.scrollBy({ left: 320, behavior: "smooth" })
          }>
            ❯
          </button>
        </div>
      </section>

      {/* POPUP MODAL */}
{active && (
  <div className="popup-overlay" onClick={() => setActive(null)}>
    <div
      className="popup-box"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="popup-close" onClick={() => setActive(null)}>
        ✕
      </button>

      <img src={active.img} alt={active.title} />

      <div className="popup-content">
        <h3>{active.title}</h3>
        <p>{active.desc}</p>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default SpecialityChemicals;
