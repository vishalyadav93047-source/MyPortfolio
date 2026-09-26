import React from "react";
import { ArrowRight, Download, Code2 } from "lucide-react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      {/* Left Content */}
      <div className="home-content">

        <p className="home-intro">
          Hello, I'm
        </p>

        <h1>
          Vishal <span>Kumar</span>
        </h1>

        <h2>
          B.Tech Computer Science Student
        </h2>

        <p className="home-description">
          I am a passionate web developer who loves creating
          modern, responsive and user-friendly websites using
          modern web technologies.
        </p>

        {/* Buttons */}
        <div className="home-buttons">

          {/* View Projects */}
          <Link
            to="/Projects"
            style={{ textDecoration: "none" }}
          >
            <button className="project-btn">
              View Projects
              <ArrowRight size={18} />
            </button>
          </Link>

          {/* Download Resume */}
          <a
            href="https://drive.google.com/file/d/1tSNqZY3tpsRWsh6U51Pzs2uRgDgcFc32/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            style={{textDecoration: "none" }}
          >
            Download Resume
            <Download size={18} />
          </a>

        </div>

        {/* Small Skills */}
        <div className="home-tech">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>

        </div>

      </div>


      {/* Right Developer Card */}
      <div className="home-visual">

        <div className="glow-circle"></div>

        <div className="developer-card">

          <div className="card-top">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="code-content">

            <div>
              <span className="purple">const</span>{" "}
              <span className="blue">developer</span>{" "}
              = {"{"}
            </div>

            <div className="code-line">
              <span className="property">name:</span>{" "}
              <span className="green">'Vishal Kumar'</span>,
            </div>

            <div className="code-line">
              <span className="property">role:</span>{" "}
              <span className="green">'Web Developer'</span>,
            </div>

            <div className="code-line">
              <span className="property">skills:</span>{" "}
              <span className="green">'React'</span>,
            </div>

            <div>
              {"}"}
            </div>

          </div>

          <div className="card-icon">
            <Code2 size={55} />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;