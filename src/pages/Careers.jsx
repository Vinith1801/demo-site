import React from "react";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { values, jobs } from "../data/careers";

export default function Careers() {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-block light-red">
        <h1>Careers at Pulsus Group</h1>
        <p>
          Join a global team shaping the future of medical publishing,
          conferences, and scientific innovation. Pulsus Group values
          collaboration, creativity, and purpose-driven work that impacts
          healthcare worldwide.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="values-section">
        <h2>Why Work With Us</h2>
        <div className="values-grid">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <div className="value-card" key={i}>
                <Icon className="value-icon" />
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions */}
      <section className="open-positions">
        <h2>Open Positions</h2>
        <div className="jobs-grid">
          {jobs.map((job, i) => (
            <div className="job-card" key={i}>
              <FaBriefcase className="job-icon" />
              <h3>{job.title}</h3>
              <p className="job-meta">
                📍 {job.location} &nbsp;|&nbsp; 💼 {job.type}
              </p>
              <p>{job.desc}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Final Highlight */}
      <section className="highlight">
        <FaLaptopCode className="icon-large" />
        <h2>Build the Future of Medical Research</h2>
        <p>
          Whether you’re a developer, editor, or communications specialist — your
          work at Pulsus helps drive global scientific progress.
        </p>
      </section>
    </div>
  );
}
