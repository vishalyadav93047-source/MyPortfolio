import React, { useEffect, useState } from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import Navbar from "./Components/Navbar";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };


  useEffect(() => {

    const sections = document.querySelectorAll(".page-section");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("section-visible");

            setActiveSection(entry.target.id);

          } else {

            entry.target.classList.remove("section-visible");

          }

        });

      },
      {
        threshold: 0.18,
        rootMargin: "-70px 0px -10% 0px",
      }
    );


    sections.forEach((section) => {
      observer.observe(section);
    });


    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);


  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };


  return (
    <div
      className={
        darkMode
          ? "app dark-theme"
          : "app light-theme"
      }
    >

      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />


      {/* HOME */}

      <section
        id="home"
        className="page-section home-section"
      >
        <Home />
      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="page-section about-section-wrapper"
      >
        <About />
      </section>


      {/* SKILLS */}

      <section
        id="skills"
        className="page-section skills-section-wrapper"
      >
        <Skills />
      </section>


      {/* PROJECTS */}

      <section
        id="projects"
        className="page-section projects-section-wrapper"
      >
        <Projects />
      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="page-section contact-section-wrapper"
      >
        <Contact />
      </section>

    </div>
  );
}

export default App;