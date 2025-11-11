import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import "./styles/globals.css";
import "./split-styles/main.css";

// Import Pages
import Home from "./pages/Home.jsx";
import PulsusProfile from "./pages/About/PulsusProfile.jsx";
import AbstractionIndexing from "./pages/About/AbstractionIndexing.jsx";
import EditorialPolicy from "./pages/About/EditorialPolicy.jsx";
import JournalsAtoZ from "./pages/Journals/JournalsAtoZ.jsx";
import BrowseBySubjects from "./pages/Journals/BrowseBySubjects.jsx";
import Conferences from "./pages/Conferences.jsx";
import Membership from "./pages/Membership.jsx";
import CovidArticles from "./pages/CovidArticles.jsx";
import Careers from "./pages/Careers.jsx";
import SkillDevelopment from "./pages/SkillDevelopment.jsx";
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout Route (Header + Footer included once) */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about/pulsus-profile" element={<PulsusProfile />} />
          <Route path="about/abstraction-indexing" element={<AbstractionIndexing />} />
          <Route path="about/editorial-policy" element={<EditorialPolicy />} />
          <Route path="journals/a-z" element={<JournalsAtoZ />} />
          <Route path="journals/subjects" element={<BrowseBySubjects />} />
          <Route path="conferences" element={<Conferences />} />
          <Route path="membership" element={<Membership />} />
          <Route path="covid-articles" element={<CovidArticles />} />
          <Route path="careers" element={<Careers />} />
          <Route path="skill-development" element={<SkillDevelopment />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
