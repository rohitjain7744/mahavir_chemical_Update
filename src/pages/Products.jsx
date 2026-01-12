import { useState } from "react";
import "./Products.css";
import HeroPro from "../components/Products/Hero.jsx"

const rawChemicals = [
  { name: "Ferric Chloride", pack: "25 Kg Bag" },
  { name: "Ferrous Sulphate", pack: "50 Kg Bag" },
  { name: "Formaldehyde", pack: "50 / 250 Kg Drum / Tanker" },
  { name: "Formic Acid", pack: "35 Kg Can" },
  { name: "Glycerine", pack: "250 Kg Drum" },
  { name: "Hydrochloric Acid 30%", pack: "Drum / Tanker" },
  { name: "Hydrogen Peroxide", pack: "50 Kg Carboys" },
  { name: "Sulphuric Acid 70% & 98%", pack: "Drum / Tanker" },
  { name: "Caustic Soda Flakes / Lye 48%", pack: "Bag / Drum / Tanker" },
  { name: "Soda Ash Light", pack: "50 Kg Bag" },
  { name: "Bleaching Powder", pack: "25 Kg Bag" },
  { name: "Boric Acid", pack: "25 / 50 Kg Bag" },
  { name: "Citric Acid", pack: "25 Kg Bag" },
  { name: "EDTA Disodium", pack: "25 Kg Bag" },
  { name: "Oxalic Acid", pack: "50 Kg Bag" },
  { name: "Phosphoric Acid", pack: "35 / 50 Kg Can" },
  { name: "Sodium Metasilicate", pack: "50 Kg Bag" },
  { name: "Sodium Nitrate", pack: "50 Kg Bag" },
  { name: "Sodium Nitrite", pack: "50 Kg Bag" },
  { name: "Sodium Hypochlorite", pack: "Drum / Tanker" },
  { name: "Titanium Dioxide", pack: "50 Kg Bag" },
  { name: "Zinc Sulphate", pack: "50 Kg Bag" },
  { name: "Calcium Chloride", pack: "Bag / Drum / Tanker" },
];

const listSection = [
  {
    title: "Water Treatment Chemicals (OLKLIN)",
    items: [
      "Boiler Oxygen Scavengers",
      "Boiler Scale & Corrosion Inhibitors",
      "Cooling Water Scale & Corrosion Inhibitors",
      "RO Membrane Cleaners",
      "RO Antiscalants & Antifoulants",
      "Descaling Chemicals",
      "ETP Polymers & Anti-Foams",
    ],
  },
  {
    title: "Organophosphonates (PHOSPHOMAN)",
    items: [
      "Benzalkonium Chloride (50% – 90%)",
      "PAPEMP",
      "DTPMPA",
      "HEDP",
      "ATMP",
    ],
  },
  {
    title: "Polymers (POLYMAN)",
    items: [
      "Acrylic Acid Homopolymer",
      "Carboxylic Sulphonate Co / Ter Polymer",
      "Non-Ionic Ter Polymer",
    ],
  },
  {
    title: "Industry Specific Chemicals",
    items: [
      "Oil & Gas / Refinery Chemicals",
      "Paper Industry Chemicals",
      "Sugar Industry Processing Additives",
    ],
  },
  {
    title: "Lab Chemicals",
    items: [
      "Laboratory Grade Chemicals",
      "Research & Analytical Chemicals",
    ],
  },
  {
    title: "Safety & PPE",
    items: [
      "3M Masks & Respirators",
      "Safety Helmets, Goggles, Shoes",
      "First Aid Kits",
      "Industrial Air Monitoring Equipment",
    ],
  },
];

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredRaw = rawChemicals.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <HeroPro/>
     
    <div className="products-page">
       
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Complete Chemical Portfolio for Industry & Safety</p>

        <input
          className="product-search"
          type="text"
          placeholder="Search any product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* RAW CHEMICAL TABLE */}
      <section className="product-section">
        <h2>Raw Chemicals</h2>

        <table className="product-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Packing</th>
            </tr>
          </thead>
          <tbody>
            {filteredRaw.length === 0 ? (
              <tr>
                <td colSpan="2">No product found</td>
              </tr>
            ) : (
              filteredRaw.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.pack}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      {/* OTHER SECTIONS */}
      {listSection.map((sec, i) => (
        <section className="product-section" key={i}>
          <h2>{sec.title}</h2>
          <ul>
            {sec.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
</>
      );
};

export default Products;
