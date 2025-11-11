// src/pages/Conferences.jsx
import React from "react";
import { highlights, featuredConferences } from "../data/conferences";

export default function Conferences() {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-block light-red">
        <h1>Global Medical Conferences</h1>
        <p>
          Pulsus Group organizes international conferences and events that bring
          together researchers, clinicians, and healthcare professionals from
          across the world to share knowledge, innovations, and insights in the
          medical sciences.
        </p>
      </section>

      {/* Info Section */}
      <section className="content-section grid-2">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <div className="info-card" key={i}>
              <Icon className="icon" />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Featured Events */}
      <section className="featured-conferences">
        <h2>Upcoming Featured Events</h2>
        <div className="conference-grid">
          {featuredConferences.map((event, i) => {
            const Icon = event.icon;
            return (
              <div className="conference-card" key={i}>
                <Icon className="event-icon" />
                <h3>{event.title}</h3>
                <p>
                  📍 {event.location} | 🗓️ {event.date}
                </p>
                <a href="#" className="read-more">
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing Highlight */}
      <section className="highlight">
        <h2>Join the Global Scientific Network</h2>
        <p>
          Participate in Pulsus conferences and connect with top experts,
          researchers, and innovators shaping the future of healthcare and
          scientific discovery.
        </p>
      </section>
    </div>
  );
}
