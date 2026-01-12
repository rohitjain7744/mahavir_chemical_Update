import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Product">Product</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
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
