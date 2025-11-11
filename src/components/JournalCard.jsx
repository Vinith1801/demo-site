import React from "react";

export default function JournalCard({ item }) {
  return (
    <article className="card">
      <div className="cover">
        {item.cover ? (
          <img
            src={item.cover}
            alt={item.title}
            className="cover-img"
            loading="lazy"
          />
        ) : (
          <div className="placeholder">No Cover</div>
        )}

        <div className="overlay">
          <button className="view-btn">View Journal</button>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        {item.description && <p className="card-desc">{item.description}</p>}
      </div>
    </article>
  );
}
