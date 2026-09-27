import React from "react";
import { ArrowRight, Download, Code2 } from "lucide-react";
import "./Home.css";

function Home() {

  // Scroll to Projects section
  const goToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


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
          <button
            className="project-btn"
            onClick={goToProjects}
          >
            View Projects

            <ArrowRight size={18} />
          </button>


          {/* Resume */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
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
              <span className="purple">
                const
              </span>{" "}

              <span className="blue">
                developer
              </span>{" "}

              = {"{"}
            </div>


            <div className="code-line">

              <span className="property">
                name:
              </span>{" "}

              <span className="green">
                'Vishal Kumar'
              </span>,

            </div>


            <div className="code-line">

              <span className="property">
                role:
              </span>{" "}

              <span className="green">
                'Web Developer'
              </span>,

            </div>


            <div className="code-line">

              <span className="property">
                skills:
              </span>{" "}

              <span className="green">
                'React'
              </span>,

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