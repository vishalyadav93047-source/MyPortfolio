import React, { useState } from "react";
import "./Contact.css";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject) {
      alert("Please fill all the fields.");
      return;
    }

    const message = `Hello Vishal,

I would like to contact you regarding your portfolio.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}`;

    const whatsappURL = `https://wa.me/919304702949?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      subject: "",
    });
  };

  return (
    <section className="contact-section">

      {/* Header */}
      <div className="contact-header">
        <p className="contact-label">
          GET IN TOUCH
        </p>

        <h1 className="contact-title">
          Contact <span>Me</span>
        </h1>

        <p className="contact-subtitle">
          Have a project or opportunity in mind?
          Feel free to get in touch with me.
        </p>
      </div>

      {/* Main Container */}
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <div className="contact-info-heading">

            <div className="contact-main-icon">
              <MessageSquare size={28} />
            </div>

            <h2>
              Let's Talk
            </h2>

            <p>
              I'm always open to discussing new projects,
              creative ideas or opportunities.
            </p>

          </div>

          {/* Email */}
          <div className="contact-info-card">

            <div className="contact-info-icon">
              <Mail size={21} />
            </div>

            <div className="contact-info-text">
              <span>Email</span>

              <h3>
                vishalkum802126@gmail.com
              </h3>
            </div>

          </div>

          {/* Phone */}
          <a
            href="tel:+919304702949"
            className="contact-phone-link"
          >
            <div className="contact-info-card">

              <div className="contact-info-icon">
                <Phone size={21} />
              </div>

              <div className="contact-info-text">
                <span>Phone</span>

                <h3>
                  +91 9304702949
                </h3>
              </div>

            </div>
          </a>

          {/* Location */}
          <div className="contact-info-card">

            <div className="contact-info-icon">
              <MapPin size={21} />
            </div>

            <div className="contact-info-text">
              <span>Location</span>

              <h3>
                India
              </h3>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="contact-form-container">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <div className="contact-form-group">

              <label>
                Your Name
              </label>

              <div className="contact-input-box">

                <User size={18} />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />

              </div>

            </div>

            {/* Email */}
            <div className="contact-form-group">

              <label>
                Your Email
              </label>

              <div className="contact-input-box">

                <Mail size={18} />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

              </div>

            </div>

            {/* Subject */}
            <div className="contact-form-group">

              <label>
                Subject
              </label>

              <div className="contact-input-box">

                <MessageSquare size={18} />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />

              </div>

            </div>

            {/* WhatsApp Button */}
            <button
              type="submit"
              className="contact-send-button"
            >
              <Send size={18} />

              <span>
                Send on WhatsApp
              </span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;