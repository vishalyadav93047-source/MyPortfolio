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

    const sections =
      document.querySelectorAll(".page-section");


    const observer = new IntersectionObserver(

      (entries) => {

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );


        if (visibleSections.length > 0) {

          const currentSection =
            visibleSections[0].target;


          setActiveSection(
            currentSection.id
          );


          currentSection.classList.add(
            "section-visible"
          );

        }

      },

      {
        threshold: [0.18, 0.35, 0.5],

        rootMargin:
          "-70px 0px -20% 0px",
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

    const section =
      document.getElementById(id);


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


      

      <section
        id="home"
        className="page-section home-section"
      >

        <Home />

      </section>


      

      <section
        id="about"
        className="page-section about-section-wrapper"
      >

        <About />

      </section>


      

      <section
        id="skills"
        className="page-section skills-section-wrapper"
      >

        <Skills />

      </section>


     

      <section
        id="projects"
        className="page-section projects-section-wrapper"
      >

        <Projects />

      </section>


      

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