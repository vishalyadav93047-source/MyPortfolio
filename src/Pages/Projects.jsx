
import React from "react";
import {
  ExternalLink,
  ShoppingCart,
  GitBranch,
} from "lucide-react";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">

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

      <div className="projects-grid">

        <div className="projects-card">

          <div className="projects-image projects-image-one">
            <img src="/Amazon.png" alt="Amazon clone" />
          </div>

          <div className="projects-content">

            <div className="projects-category">
              WEB DEVELOPMENT
            </div>

            <h2>
              Amazon Webpage UI Clone
            </h2>

            <p>
              A responsive UI clone of the Amazon homepage
              built using pure HTML and CSS. This project
              focuses on layout design, flexbox, and modern
              styling techniques to closely replicate the original interface.
            </p>

            <div className="projects-tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div className="projects-buttons">

              {/* <a
                href="PASTE_AMAZON_LIVE_DEMO_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-live-button"
              >
                <ExternalLink size={16} />
                Live Demo
              </a> */}

              <a
                href="https://github.com/vishalyadav93047-source/Project-1--Amazon"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-github-button"
              >
                <GitBranch size={16} />
                GitHub
              </a>

            </div>

          </div>

        </div>

        <div className="projects-card">

          <div className="projects-image projects-image-two">
            <img src="/Labour.png" alt="Labour" />
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

              <button
                className="projects-private-button"
                type="button"
              >
                <RiGitRepositoryPrivateLine size={16} />
                Private Startup Project
              </button>

            </div>

          </div>

        </div>

        <div className="projects-card">

          <div className="projects-image projects-image-three">
            <img src="/Student-lms.png" alt="Labour" />
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

              <a
                href="https://student-lms-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-live-button"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>

              <a
                href="https://github.com/vishalyadav93047-source/Student--LMS.git"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-github-button"
              >
                <GitBranch size={16} />
                GitHub
              </a>

            </div>

          </div>

        </div>

        <div className="projects-card">

          <div className="projects-image projects-image-four">
            <img src="/Ambienceweb.png" alt="Ambience" />
          </div>

          <div className="projects-content">

            <div className="projects-category">
              WEB DESIGN
            </div>

            <h2>
              Ambience Complete Education – Website Clone
            </h2>

            <p>
              Developed a responsive educational website
              clone for Ambience Complete Education with
              modern UI, course sections, navigation,
              and interactive components.
            </p>

            <div className="projects-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="projects-buttons">

              <a
                href="https://ambience-clone.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-live-button"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>

              <a
                href="https://github.com/vishalyadav93047-source/Ambience"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-github-button"
              >
                <GitBranch size={16} />
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
