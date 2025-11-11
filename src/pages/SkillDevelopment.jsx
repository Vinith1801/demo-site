// src/pages/SkillDevelopment.jsx
import React from "react";
import { FaCertificate } from "react-icons/fa";
import { programs, benefits, heroIcon } from "../data/skillPrograms";

export default function SkillDevelopment() {
  const HeroIcon = heroIcon; // optional, if you want to use the icon in the hero (not required)

  return (
    <div className="page-content">
      <section className="hero-block light-red">
        <h1>Skill Development Programs</h1>
        <p>
          Empower your research career through Pulsus Group’s expert-led training
          programs. Learn essential professional and scientific skills to
          publish, communicate, and lead in the modern medical world.
        </p>
      </section>

      <section className="programs-section">
        <h2>Our Training Programs</h2>
        <div className="programs-grid">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <div className="program-card" key={i}>
                <div className="program-icon">
                  <Icon />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <button className="enroll-btn">
                  Enroll Now {/* keep icon out of data; import at top if needed */}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Join Pulsus Skill Programs?</h2>
        <ul className="benefits-list">
          {benefits.map((b, i) => (
            <li key={i}>
              <FaCertificate className="icon" /> {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="highlight">
        <HeroIcon className="icon-large" />
        <h2>Start Your Learning Journey Today</h2>
        <p>
          Advance your professional growth with Pulsus certified programs — designed
          for researchers, clinicians, and professionals committed to lifelong learning.
        </p>
      </section>
    </div>
  );
}
