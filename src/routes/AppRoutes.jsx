import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../app/App";

// Import all pages
import Home from "../pages/Home";
import PulsusProfile from "../pages/About/PulsusProfile";
import AbstractionIndexing from "../pages/About/AbstractionIndexing";
import EditorialPolicy from "../pages/About/EditorialPolicy";
import JournalsAtoZ from "../pages/Journals/JournalsAtoZ";
import BrowseBySubjects from "../pages/Journals/BrowseBySubjects";
import Conferences from "../pages/Conferences";
import Membership from "../pages/Membership";
import CovidArticles from "../pages/CovidArticles";
import Careers from "../pages/Careers";
import SkillDevelopment from "../pages/SkillDevelopment";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
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
  );
}
