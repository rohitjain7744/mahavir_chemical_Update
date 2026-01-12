import React from "react";
import "./Gallery.css";
import Gallery1 from "../../assets/Gallery1.jpg"
import Gallery2 from "../../assets/Gallery2.jpg"
import Gallery3 from "../../assets/Gallery3.jpg"
import Gallery4 from "../../assets/Gallery4.jpg"
import Gallery5 from "../../assets/Gallery5.jpg"
import Gallery6 from "../../assets/Gallery6.jpg"
import Gallery7 from "../../assets/Gallery7.jpg"
import Gallery8 from "../../assets/Gallery8.jpg"
import Gallery9 from "../../assets/Gallery9.jpg"
import Gallery10 from "../../assets/Gallery10.jpg"
import { color } from "framer-motion";

const Gallery = () => {
  const hotelImages = [
    {Gallery1},
    "https://picsum.photos/id/1057/600/400",
    "https://picsum.photos/id/1067/600/400",
    "https://picsum.photos/id/1070/600/400",
    "https://picsum.photos/id/1084/600/400",
    "https://picsum.photos/id/1080/600/400",
    "https://picsum.photos/id/1043/600/400",
    "https://picsum.photos/id/1039/600/400"
  ];

  return (
    <section className="hotel-gallery-section">
     

      <div className="hotel-gallery">
       <img  src={Gallery1} className="hotel-img" alt="Hotel" />
       <img src={Gallery2} alt="" className="hotel-img" />
       <img  src={Gallery3} className="hotel-img" alt="Hotel" />
       <img  src={Gallery4} className="hotel-img" alt="Hotel" />
       <img  src={Gallery5} className="hotel-img" alt="Hotel" />
       <img  src={Gallery6} className="hotel-img" alt="Hotel" />
       <img  src={Gallery7} className="hotel-img" alt="Hotel" />
       <img  src={Gallery8} className="hotel-img" alt="Hotel" />
       <img  src={Gallery9} className="hotel-img" alt="Hotel" />
       <img  src={Gallery10} className="hotel-img" alt="Hotel" />
      </div>
    </section>
  );
};

export default Gallery;
