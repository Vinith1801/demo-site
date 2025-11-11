import React from "react";
import { FaDatabase, FaChartLine, FaBook, FaCheckCircle } from "react-icons/fa";

export default function AbstractionIndexing() {
  return (
    <div className="page-content">
      <section className="hero-block light-red">
        <h1>Abstraction & Indexing</h1>
        <p>
          Pulsus Group journals are indexed and abstracted in leading global
          scientific databases, ensuring maximum visibility, credibility, and
          accessibility for authors and readers across the world.
        </p>
      </section>

      <section className="content-section grid-2">
        <div className="info-card">
          <FaDatabase className="icon" />
          <h2>Indexed in Reputed Databases</h2>
          <p>
            Our journals are abstracted and indexed in multiple international
            repositories and citation databases including:
          </p>
          <ul className="styled-list">
            <li>Google Scholar</li>
            <li>DOAJ (Directory of Open Access Journals)</li>
            <li>CrossRef</li>
            <li>WorldCat</li>
            <li>Open J-Gate</li>
            <li>Genamics JournalSeek</li>
            <li>RefSeek</li>
          </ul>
        </div>

        <div className="info-card">
          <FaChartLine className="icon" />
          <h2>Global Discoverability</h2>
          <p>
            Pulsus ensures that every article is discoverable through academic
            search engines, citation networks, and institutional repositories.
            Our journals are optimized for indexing protocols such as OAI-PMH and
            metadata enrichment to ensure reach across the global scientific
            ecosystem.
          </p>
        </div>
      </section>

      <section className="content-section grid-2">
        <div className="info-card">
          <FaBook className="icon" />
          <h2>Digital Archiving & Preservation</h2>
          <p>
            To ensure long-term preservation and access, Pulsus partners with
            digital archiving initiatives and repositories. Articles are
            permanently available via DOI and accessible through multiple online
            platforms.
          </p>
        </div>

        <div className="info-card">
          <FaCheckCircle className="icon" />
          <h2>Quality & Transparency</h2>
          <p>
            Our indexing process follows COPE, ICMJE, and DOAJ ethical guidelines.
            Pulsus journals maintain strict editorial quality checks for each
            submission before inclusion in indexing systems.
          </p>
        </div>
      </section>

      <section className="highlight">
        <h2>Enhancing Research Visibility Worldwide</h2>
        <p>
          Pulsus continues to expand its indexing footprint, ensuring every
          researcher’s work is globally accessible, citable, and preserved for
          future generations.
        </p>
      </section>
    </div>
  );
}
