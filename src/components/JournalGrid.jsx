import React from "react";
import JournalCard from "./JournalCard";

export default function JournalGrid({ items }) {
  return (
    <section className="journal-grid-section">
      <h2 className="grid-heading">Explore Our Journals</h2>
      <div className="grid">
        {items.map((it) => (
          <JournalCard key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}
