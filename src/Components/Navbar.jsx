import React, { useState } from "react";
import { Code2, Moon, Sun } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>

      {/* ================= LOGO ================= */}
      <div className="logo">
        <Code2 className="logo-icon" />

        <span className="logo-name">Vishal</span>
        <span className="logo-blue"> Kumar</span>
      </div>


      {/* ================= MENU ================= */}
      <div className="nav-menu">

        <button className="nav-btn active">
          Home
        </button>

        <button className="nav-btn">
          About
        </button>

        <button className="nav-btn">
          Skills
        </button>

        <button className="nav-btn">
          Projects
        </button>

        <button className="nav-btn">
          Education
        </button>

        <button className="nav-btn">
          Certifications
        </button>

        <button className="nav-btn">
          Contact
        </button>

      </div>


      {/* ================= DARK / LIGHT ================= */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Change theme"
      >

        <Moon className="moon" size={17} />

        <span className="toggle-circle">
          {darkMode ? (
            <Moon size={15} />
          ) : (
            <Sun size={15} />
          )}
        </span>

        <Sun className="sun" size={17} />

      </button>

    </nav>
  );
}

export default Navbar;