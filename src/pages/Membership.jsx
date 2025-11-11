// src/pages/Membership.jsx
import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { membershipBenefits, membershipTiers } from "../data/membership";

export default function Membership() {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-block light-red">
        <h1>Pulsus Membership Program</h1>
        <p>
          Join the Pulsus Global Community — a network of scientists, clinicians,
          and healthcare professionals dedicated to advancing medical research,
          collaboration, and knowledge sharing across disciplines.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Membership Benefits</h2>
        <ul className="benefits-list">
          {membershipBenefits.map((b, i) => (
            <li key={i}>
              <FaCheckCircle className="icon" /> {b}
            </li>
          ))}
        </ul>
      </section>

      {/* Tiers Section */}
      <section className="membership-tiers">
        <h2>Choose Your Membership</h2>
        <div className="tier-grid">
          {membershipTiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <div
                key={i}
                className={`tier-card ${tier.featured ? "featured" : ""}`}
              >
                <Icon className="tier-icon" />
                <h3>{tier.name}</h3>
                <p className="price">{tier.price}</p>
                <ul>
                  {tier.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
                <button
                  className={`join-btn ${
                    tier.buttonStyle === "primary" ? "primary" : ""
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="highlight">
        <FaStar className="icon-large" />
        <h2>Empowering the Global Research Community</h2>
        <p>
          Become a Pulsus Member today and be part of an international movement
          driving collaboration, innovation, and open access medical science.
        </p>
      </section>
    </div>
  );
}
