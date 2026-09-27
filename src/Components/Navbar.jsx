import React from "react";
import { Code2, Sun, Moon } from "lucide-react";
import "./Navbar.css";

function Navbar({
  darkMode,
  toggleTheme,
  activeSection,
  scrollToSection
}) {

  return (
    <nav className="navbar">

      {/* Logo */}

      <div
        className="navbar-logo"
        onClick={() => scrollToSection("home")}
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


      {/* Navigation */}

      <div className="navbar-menu">

        <ul className="navbar-item">


          <li>

            <button
              className={
                activeSection === "home"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>

          </li>


          <li>

            <button
              className={
                activeSection === "about"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

          </li>


          <li>

            <button
              className={
                activeSection === "skills"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>

          </li>


          <li>

            <button
              className={
                activeSection === "projects"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>

          </li>


          <li>

            <button
              className={
                activeSection === "contact"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>

          </li>

        </ul>

      </div>


      {/* Theme */}

      <button
        className="theme-toggle"
        onClick={toggleTheme}
      >

        <span
          className={
            darkMode
              ? "theme-icon active-theme-icon"
              : "theme-icon"
          }
        >
          <Moon size={17} />
        </span>


        <span
          className={
            !darkMode
              ? "theme-icon active-theme-icon"
              : "theme-icon"
          }
        >
          <Sun size={17} />
        </span>

      </button>

    </nav>
  );
}

export default Navbar;