import React from "react";
import {
  ExternalLink,
  Code2,
  ShoppingCart,
  BriefcaseBusiness,
  Headphones,
  GitBranch,
} from "lucide-react";

import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">

      {/* ================= HEADER ================= */}

      <div className="projects-header">

        <p className="projects-label">
          MY WORK
        </p>

        <h1 className="projects-title">
          My <span>Projects</span>
        </h1>

        <p className="projects-subtitle">
          Some of the projects I have created while learning and
          improving my development skills.
        </p>

      </div>


      {/* ================= PROJECT GRID ================= */}

      <div className="projects-grid">

        {/* PROJECT 1 */}
        <div className="projects-card">

          <div className="projects-image projects-image-one">
            <Code2 size={55} />
          </div>

          <div className="projects-content">

            <div className="projects-category">
              WEB DEVELOPMENT
            </div>

            <h2>
              Smart Customer Support System
            </h2>

            <p>
              A modern customer support system designed to provide
              users with a simple and interactive support experience.
            </p>

            <div className="projects-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>

            <div className="projects-buttons">

              <button className="projects-live-button">
                <ExternalLink size={16} />
                Live Demo
              </button>

              <button className="projects-github-button">
                <GitBranch size={16} />
                GitHub
              </button>

            </div>

          </div>

        </div>


        {/* PROJECT 2 */}
        <div className="projects-card">

          <div className="projects-image projects-image-two">
            <BriefcaseBusiness size={55} />
          </div>

          <div className="projects-content">

            <div className="projects-category">
              WEB APPLICATION
            </div>

            <h2>
              Labour Job Finder
            </h2>

            <p>
              A job finding platform designed to help workers discover
              suitable jobs and connect with potential employers.
            </p>

            <div className="projects-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>

            <div className="projects-buttons">

              <button className="projects-live-button">
                <ExternalLink size={16} />
                Live Demo
              </button>

              <button className="projects-github-button">
                <GitBranch size={16} />
                GitHub
              </button>

            </div>

          </div>

        </div>


        {/* PROJECT 3 */}
        <div className="projects-card">

          <div className="projects-image projects-image-three">
            <ShoppingCart size={55} />
          </div>

          <div className="projects-content">

            <div className="projects-category">
              E-COMMERCE
            </div>

            <h2>
              Gaming Store
            </h2>

            <p>
              A modern gaming store interface with products,
              categories and a responsive user-friendly design.
            </p>

            <div className="projects-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="projects-buttons">

              <button className="projects-live-button">
                <ExternalLink size={16} />
                Live Demo
              </button>

              <button className="projects-github-button">
                <GitBranch size={16} />
                GitHub
              </button>

            </div>

          </div>

        </div>


        {/* PROJECT 4 */}
        <div className="projects-card">

          <div className="projects-image projects-image-four">
            <Headphones size={55} />
          </div>

          <div className="projects-content">

            <div className="projects-category">
              WEB DESIGN
            </div>

            <h2>
              Portfolio Website
            </h2>

            <p>
              A responsive personal portfolio website showcasing
              skills, projects, education and certifications.
            </p>

            <div className="projects-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="projects-buttons">

              <button className="projects-live-button">
                <ExternalLink size={16} />
                Live Demo
              </button>

              <button className="projects-github-button">
                <GitBranch size={16} />
                GitHub
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;