import { useEffect, useState } from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";




import backImg1 from "../../assets/background1.jpg";
import backImg2 from "../../assets/background2.jpg";
import backImg3 from "../../assets/background3.jpg";
import backImg4 from "../../assets/background4.jpg";

const images = [backImg1, backImg2, backImg3, backImg4];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* CONTENT */}
      <div className="hero-content">
        <h1>Reliable Chemical Solutions for Industrial Excellence</h1>
        <p>
          ISO-certified manufacturer and supplier of industrial and specialty
          chemicals for pharma, textile, water treatment, and manufacturing
          industries.
        </p>

        <div className="hero-buttons">
          {/* <a href="#contact" className="btn btn-primary">Get a Quote</a> */}
          {/* <a href="/product" className="btn btn-secondary">View Products</a> */}
          <NavLink to="/Product" className="btn btn-secondary">View Products</NavLink>
          

        </div>
      </div>

      {/* DOTS */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
