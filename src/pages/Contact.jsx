import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // mock reset
  };

  return (
    <div className="page-content">
      <section className="hero-block light-red">
        <h1>Contact Pulsus Group</h1>
        <p>
          We’d love to hear from you. Reach out for journal inquiries,
          conference collaborations, or general information about our
          publishing network.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>

              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Send Message
              </button>

              {submitted && (
                <p className="success-msg">
                  ✅ Message sent successfully! We'll get back soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Details */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <FaMapMarkerAlt className="icon" />
                <div>
                  <strong>Head Office:</strong>
                  <p>40 Bloomsbury Way, Lower Ground Floor, London, WC1A 2SE, UK</p>
                </div>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <div>
                  <strong>Email:</strong>
                  <p>info@pulsus.com</p>
                </div>
              </li>
              <li>
                <FaPhoneAlt className="icon" />
                <div>
                  <strong>Phone:</strong>
                  <p>+44-203-769-1778</p>
                </div>
              </li>
              <li>
                <FaClock className="icon" />
                <div>
                  <strong>Office Hours:</strong>
                  <p>Mon–Fri: 9:00 AM – 6:00 PM GMT</p>
                </div>
              </li>
            </ul>

            <div className="map-placeholder">
              <p>[ Google Map Placeholder ]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
