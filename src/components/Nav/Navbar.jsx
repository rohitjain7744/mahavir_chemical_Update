import { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-wrapper">

          {/* LOGO */}
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <span>Mahavir</span> Chemicals
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="nav-desktop">
            <Link to="/" end>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/Product">Product</Link>
            <Link to="/service">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${open ? "show" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/Product" onClick={closeMenu}>Product</NavLink>
        <NavLink to="/service" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className="drawer-cta">
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
