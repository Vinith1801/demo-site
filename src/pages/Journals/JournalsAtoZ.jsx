import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { allJournals } from "../../data/journalsAtoZ";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function JournalsAtoZ() {
  const [activeLetter, setActiveLetter] = useState("A");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJournals = allJournals.filter((j) => {
    const startsWithLetter = j[0].toUpperCase() === activeLetter;
    const matchesSearch = j.toLowerCase().includes(searchQuery.toLowerCase());
    return startsWithLetter && matchesSearch;
  });

  return (
    <div className="page-content">
      <section className="hero-block light-red">
        <h1>Journals A–Z</h1>
        <p>
          Browse the complete list of Pulsus Group journals organized
          alphabetically. Explore journals by their area of research, specialty,
          or publication category.
        </p>
      </section>

      <section className="filter-bar">
        <div className="alphabet-filter">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setActiveLetter(letter)}
              className={activeLetter === letter ? "active" : ""}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="search-box">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search journals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <section className="journals-grid">
        {filteredJournals.length > 0 ? (
          filteredJournals.map((journal, i) => (
            <div className="journal-card" key={i}>
              <h3>{journal}</h3>
              <p>
                A peer-reviewed journal by Pulsus Group focusing on advancing
                medical and scientific research.
              </p>
              <a href="#" className="read-more">
                View Journal →
              </a>
            </div>
          ))
        ) : (
          <p className="no-results">
            No journals found for “{searchQuery || activeLetter}”.
          </p>
        )}
      </section>
    </div>
  );
}
