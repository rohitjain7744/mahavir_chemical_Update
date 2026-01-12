import "./ProductHero.css";

const ProductsHero = () => {
  return (
    <section className="products-hero">
      <div className="products-hero-overlay"></div>

      <div className="products-hero-content">
        <h1>Our Products</h1>
        <p>
          A comprehensive portfolio of industrial, specialty, laboratory, and
          safety chemicals designed to meet diverse industry requirements.
        </p>

        <div className="products-hero-tags">
          <span>Raw Chemicals</span>
          <span>Water Treatment</span>
          <span>Specialty Chemicals</span>
          <span>Lab & Safety</span>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
