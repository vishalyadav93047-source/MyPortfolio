import React, { useState } from "react";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">

      {/* =========================
          LOGO
      ========================== */}

      <div className="navbar-logo">

        <Code2
          className="navbar-logo-icon"
          size={36}
        />

        <div className="navbar-name">
          <span>Vishal</span>
          <span>Kumar</span>
        </div>

      </div>


      {/* =========================
          NAVIGATION MENU
      ========================== */}

      <div
        className={`navbar-menu ${
          menuOpen ? "mobile-open" : ""
        }`}
      >

        <ul className="navbar-item">

          {/* HOME */}

          <li>
            <Link
              to="/"
              className={`nav-link ${
                isActive("/") ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>


          {/* ABOUT */}

          <li>
            <Link
              to="/About"
              className={`nav-link ${
                isActive("/About") ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>


          {/* PROJECTS */}

          <li>
            <Link
              to="/Projects"
              className={`nav-link ${
                isActive("/Projects") ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>


          {/* SKILLS */}

          <li>
            <Link
              to="/Skills"
              className={`nav-link ${
                isActive("/Skills") ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>


          {/* CONTACT */}

          <li>
            <Link
              to="/Contact"
              className={`nav-link ${
                isActive("/Contact") ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>


      {/* =========================
          RIGHT SIDE
      ========================== */}

      <div className="navbar-right">

        {/* THEME TOGGLE */}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >

          <span
            className={`theme-icon ${
              darkMode ? "active-theme-icon" : ""
            }`}
          >
            <Moon size={19} />
          </span>

          <span
            className={`theme-icon ${
              !darkMode ? "active-theme-icon" : ""
            }`}
          >
            <Sun size={19} />
          </span>

        </button>


        {/* MOBILE MENU BUTTON */}

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >

          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}

        </button>

      </div>

    </nav>
  );
}

export default Navbar;