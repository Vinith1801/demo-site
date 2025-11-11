import React from "react";
import { subjects } from "../../data/subjects";

export default function BrowseBySubjects() {
  return (
    <div className="page-content">
      <section className="hero-block light-red">
        <h1>Browse by Subjects</h1>
        <p>
          Explore Pulsus Group journals organized by research discipline. Choose
          from a wide range of subjects in medicine, biotechnology, and the life
          sciences.
        </p>
      </section>

      <section className="subjects-grid">
        {subjects.map((subject, i) => {
          const Icon = subject.icon;
          return (
            <div className="subject-card" key={i}>
              <div className="subject-icon">
                <Icon />
              </div>
              <h3>{subject.name}</h3>
              <p>{subject.description}</p>
              <a href="#" className="explore-link">
                View Journals →
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
}
