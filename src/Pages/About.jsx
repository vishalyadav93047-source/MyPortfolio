import React from "react";
import {
  User,
  GraduationCap,
  Code2,
  CalendarDays,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section className="about-section">

      {/* About Header */}
      <div className="about-header">

        <p className="about-label">
          GET TO KNOW ME
        </p>

        <h1 className="about-title">
          About <span>Me</span>
        </h1>

        <p className="about-subtitle">
          A little more about who I am and what I do.
        </p>

      </div>


      {/* About Main */}
      <div className="about-container">

        {/* About Introduction */}
        <div className="about-intro-card">

          <div className="about-icon">
            <User size={30} />
          </div>

          <h2 className="about-name">
            I'm <span>Vishal Kumar</span>
          </h2>

          <h3 className="about-role">
            B.Tech Computer Science Student & Web Developer
          </h3>

          <p className="about-description">
            I am a passionate Computer Science student who enjoys
            creating modern and responsive web applications. I love
            turning ideas into clean, interactive and user-friendly
            digital experiences.
          </p>

          <p className="about-description">
            I am continuously improving my programming and web
            development skills by working on projects and learning
            new technologies.
          </p>

          {/* Connect Button */}
          <Link
            to="/Contact"
            className="about-connect-button"
            style={{textDecoration: "none" }}
          >
            Let's Connect
            <ArrowRight size={18} />
          </Link>

        </div>


        {/* About Information */}
        <div className="about-info-grid">

          {/* Education */}
          <div className="about-info-card">

            <div className="about-info-icon">
              <GraduationCap size={23} />
            </div>

            <div className="about-info-content">
              <span>Education</span>
              <h3>B.Tech Computer Science</h3>
              <p>Manav Rachna</p>
            </div>

          </div>


          {/* College Duration */}
          <div className="about-info-card">

            <div className="about-info-icon">
              <CalendarDays size={23} />
            </div>

            <div className="about-info-content">
              <span>College Duration</span>
              <h3>2023 – 2027</h3>
              <p>Bachelor's Degree</p>
            </div>

          </div>


          {/* Interested In */}
          <div className="about-info-card">

            <div className="about-info-icon">
              <Code2 size={23} />
            </div>

            <div className="about-info-content">
              <span>Interested In</span>
              <h3>Web Development</h3>
              <p>Frontend & Modern UI</p>
            </div>

          </div>


          {/* Location */}
          <div className="about-info-card">

            <div className="about-info-icon">
              <MapPin size={23} />
            </div>

            <div className="about-info-content">
              <span>Location</span>
              <h3>India</h3>
              <p>Available for opportunities</p>
            </div>

          </div>

        </div>

      </div>


      {/* About Statistics */}
      <div className="about-stats">

        <div className="about-stat">
          <h2>4+</h2>
          <p>Projects</p>
        </div>

        <div className="about-stat">
          <h2>5+</h2>
          <p>Technologies</p>
        </div>

        <div className="about-stat">
          <h2>2027</h2>
          <p>Graduation</p>
        </div>

        <div className="about-stat">
          <h2>100%</h2>
          <p>Learning</p>
        </div>

      </div>

    </section>
  );
}

export default About;