import React, { useState } from "react";
import { categories, articles } from "../data/covidArticles";

export default function CovidArticles() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="page-content">
      <section className="hero-block light-red">
        <h1>Covid-19 Research & Articles</h1>
        <p>
          Explore the latest COVID-19 studies, peer-reviewed articles, and
          evidence-based updates from the global medical community.
        </p>
      </section>

      <section className="filter-bar covid-filter">
        <div className="category-filter">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                className={activeCategory === cat.name ? "active" : ""}
                onClick={() => setActiveCategory(cat.name)}
              >
                <Icon />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="articles-grid">
        {filteredArticles.map((a, i) => (
          <div className="article-card" key={i}>
            <div className="article-meta">
              <span className="article-cat">{a.category}</span>
              <span className="article-date">{a.date}</span>
            </div>
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
            <a href="#" className="read-more">
              Read Full Article →
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
