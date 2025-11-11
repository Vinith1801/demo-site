import React from "react";
import Sidebar from "../components/Sidebar";
import JournalGrid from "../components/JournalGrid";
import journals from "../data/journals";

export default function Home() {
  return (
    <main className="container">
      <Sidebar />
      <JournalGrid items={journals} />
    </main>
  );
}
