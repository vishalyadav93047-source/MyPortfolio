import React, { useState } from "react";



import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {

  // Dark / Light mode
  const [darkMode, setDarkMode] = useState(true);

  // Theme change
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={
        darkMode
          ? "app dark-theme"
          : "app light-theme"
      }
    >

      {/* Navbar */}
     
      <Navbar
      darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      

      {/* All Pages */}
      
      <Routes>

       <Route path="/" element={<Home />}/>

        <Route path="About" element={<About/>} />

        <Route path="Skills" element={<Skills />} />

        <Route path="Projects" element={<Projects />} />

        <Route path="Contact" element={<Contact />} />


        </Routes>

      

    </div>
  );
}

export default App;