import React from "react";
import { Code2, Sun, Moon } from "lucide-react";
import "./Navbar.css";
import { Link, Links } from 'react-router-dom';

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">

        <Code2 className="navbar-logo-icon" size={36} />

        <div className="navbar-name">
          <span>Vishal</span>
          <span>Kumar</span>
        </div>

      </div>


      {/* Navigation */}
      <div className="navbar-menu">

        <ul className="navbar-item">

          <Link to={'/'} style={{textDecoration: "none" }}><li>Home</li></Link>
          <Link to={'/About'} style={{textDecoration: "none" }}><li>About</li></Link>
          <Link to={'/Skills'} style={{textDecoration: "none" }}><li>Skills</li></Link>
          <Link to={'/Projects'} style={{textDecoration: "none" }}><li>Projects</li></Link>
          <Link to={'/Contact'} style={{textDecoration: "none" }}><li>Contact</li></Link>

        </ul>


        

        {/* <button className="navbar-item">
          Home
        </button>

        <button className="navbar-item">
          About
        </button>

        <button className="navbar-item">
          Skills
        </button>

        <button className="navbar-item">
          Projects
        </button> */}

        {/* <button className="navbar-item">
          Education
        </button>

        <button className="navbar-item">
          Certifications
        </button> */}

        {/* <button className="navbar-item">
          Contact
        </button> */}

      </div>


      {/* Theme Button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
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