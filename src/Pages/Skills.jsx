import React from "react";
import {
  Code2,
  Palette,
  Database,
  GitBranch,
  Smartphone,
  Globe,
} from "lucide-react";

import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section">

      {/* ================= HEADER ================= */}

      <div className="skills-header">

        <p className="skills-label">
          MY EXPERTISE
        </p>

        <h1 className="skills-title">
          My <span>Skills</span>
        </h1>

        <p className="skills-subtitle">
          Technologies and tools I use to create modern web experiences.
        </p>

      </div>


      {/* ================= SKILLS GRID ================= */}

      <div className="skills-grid">

        {/* HTML */}
        <div className="skills-card">

          <div className="skills-icon">
            <Code2 size={30} />
          </div>

          <div className="skills-card-content">

            <h2>HTML</h2>

            <p>
              Building clean and semantic website structures.
            </p>

          </div>

          <div className="skills-progress">
            <div
              className="skills-progress-bar skills-html"
            ></div>
          </div>

          <span className="skills-percentage">
            90%
          </span>

        </div>


        {/* CSS */}
        <div className="skills-card">

          <div className="skills-icon">
            <Palette size={30} />
          </div>

          <div className="skills-card-content">

            <h2>CSS</h2>

            <p>
              Creating responsive and attractive user interfaces.
            </p>

          </div>

          <div className="skills-progress">
            <div
              className="skills-progress-bar skills-css"
            ></div>
          </div>

          <span className="skills-percentage">
            85%
          </span>

        </div>


        {/* JavaScript */}
        <div className="skills-card">

          <div className="skills-icon">
            <Code2 size={30} />
          </div>

          <div className="skills-card-content">

            <h2>JavaScript</h2>

            <p>
              Creating interactive and dynamic web applications.
            </p>

          </div>

          <div className="skills-progress">
            <div
              className="skills-progress-bar skills-javascript"
            ></div>
          </div>

          <span className="skills-percentage">
            80%
          </span>

        </div>


        {/* React */}
        <div className="skills-card">

          <div className="skills-icon">
            <Globe size={30} />
          </div>

          <div className="skills-card-content">

            <h2>React</h2>

            <p>
              Developing reusable and modern UI components.
            </p>

          </div>

          <div className="skills-progress">
            <div
              className="skills-progress-bar skills-react"
            ></div>
          </div>

          <span className="skills-percentage">
            80%
          </span>

        </div>


        {/* Python */}
        {/* <div className="skills-card">

          <div className="skills-icon">
            <Code2 size={30} />
          </div>

          <div className="skills-card-content">

            <h2>Python</h2>

            <p>
              Writing programs and solving programming problems.
            </p>

          </div>

          <div className="skills-progress">
            <div
              className="skills-progress-bar skills-python"
            ></div>
          </div>

          <span className="skills-percentage">
            75%
          </span>

        </div> */}


        {/* SQL */}
        {/* <div className="skills-card">

          <div className="skills-icon">
            <Database size={30} />
          </div>

          <div className="skills-card-content">

            <h2>SQL</h2>

            <p>
              Working with databases, queries and data management.
            </p>

          </div>

          <div className="skills-progress">
            <div
              className="skills-progress-bar skills-sql"
            ></div>
          </div>

          <span className="skills-percentage">
            75%
          </span>

        </div> */}


        {/* Git & GitHub */}
        <div className="skills-card">
 
          <div className="skills-icon">
            <GitBranch size={30} />
          </div>

          <div className="skills-card-content">

            <h2>Git & GitHub</h2>

            <p>
              Managing source code and project versions.
            </p>

          </div>

          <div className="skills-progress">
            <div
              className="skills-progress-bar skills-git"
            ></div>
          </div>

          <span className="skills-percentage">
            75%
          </span>

        </div>


        {/* Responsive Design */}
        <div className="skills-card">

          <div className="skills-icon">
            <Smartphone size={30} />
          </div>

          <div className="skills-card-content">

            <h2>Responsive Design</h2>

            <p>
              Designing websites that work across all screen sizes.
            </p>

          </div>

          <div className="skills-progress">
            <div
              className="skills-progress-bar skills-responsive"
            ></div>
          </div>

          <span className="skills-percentage">
            85%
          </span>

        </div>

      </div>

    </section>
  );
}

export default Skills;