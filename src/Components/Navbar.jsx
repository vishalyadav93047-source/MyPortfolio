import React, { useState } from "react";
import {
  Code2,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";

import "./Navbar.css";


function Navbar({
  darkMode,
  toggleTheme,
  activeSection,
  scrollToSection
}) {

  const [menuOpen, setMenuOpen] = useState(false);


  const handleNavigation = (section) => {

    scrollToSection(section);

    setMenuOpen(false);

  };


  return (

    <nav className="navbar">


      {/* ==============================
          LOGO
      =============================== */}

      <div
        className="navbar-logo"
        onClick={() => handleNavigation("home")}
      >

        <Code2
          className="navbar-logo-icon"
          size={36}
        />

        <div className="navbar-name">

          <span>Vishal</span>

          <span>Kumar</span>

        </div>

      </div>


      {/* ==============================
          DESKTOP MENU
      =============================== */}

      <div className="desktop-menu">


        <button
          className={
            activeSection === "home"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => handleNavigation("home")}
        >
          Home
        </button>


        <button
          className={
            activeSection === "about"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => handleNavigation("about")}
        >
          About
        </button>


        <button
          className={
            activeSection === "skills"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => handleNavigation("skills")}
        >
          Skills
        </button>


        <button
          className={
            activeSection === "projects"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => handleNavigation("projects")}
        >
          Projects
        </button>


        <button
          className={
            activeSection === "contact"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => handleNavigation("contact")}
        >
          Contact
        </button>


      </div>


      {/* ==============================
          RIGHT SIDE
      =============================== */}

      <div className="navbar-right">


        {/* THEME */}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          type="button"
          aria-label="Toggle theme"
        >

          <span
            className={
              darkMode
                ? "theme-icon active-theme-icon"
                : "theme-icon"
            }
          >
            <Moon size={19} />
          </span>


          <span
            className={
              !darkMode
                ? "theme-icon active-theme-icon"
                : "theme-icon"
            }
          >
            <Sun size={19} />
          </span>

        </button>


        {/* MOBILE MENU BUTTON */}

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label="Toggle menu"
        >

          {menuOpen ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}

        </button>


      </div>


      {/* ==============================
          MOBILE MENU
      =============================== */}

      <div
        className={
          menuOpen
            ? "mobile-menu mobile-menu-open"
            : "mobile-menu"
        }
      >

        <button
          className={
            activeSection === "home"
              ? "mobile-link active"
              : "mobile-link"
          }
          onClick={() => handleNavigation("home")}
        >
          Home
        </button>


        <button
          className={
            activeSection === "about"
              ? "mobile-link active"
              : "mobile-link"
          }
          onClick={() => handleNavigation("about")}
        >
          About
        </button>


        <button
          className={
            activeSection === "skills"
              ? "mobile-link active"
              : "mobile-link"
          }
          onClick={() => handleNavigation("skills")}
        >
          Skills
        </button>


        <button
          className={
            activeSection === "projects"
              ? "mobile-link active"
              : "mobile-link"
          }
          onClick={() => handleNavigation("projects")}
        >
          Projects
        </button>


        <button
          className={
            activeSection === "contact"
              ? "mobile-link active"
              : "mobile-link"
          }
          onClick={() => handleNavigation("contact")}
        >
          Contact
        </button>

      </div>


    </nav>

  );

}


export default Navbar;