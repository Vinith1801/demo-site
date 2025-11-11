import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
  FaChevronDown
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Top Bar */}
      <div className={`header-top ${scrolled ? "hide" : ""}`}>
        <div className="header-logo">
          <Link to="/" className="logo-text">
            PULSUS
          </Link>
          <span className="logo-sub">www.pulsus.com</span>
        </div>

        <div className="header-banner">
          <span className="banner-text">Publish Your Manuscript</span>
        </div>

        <div className="header-right">
          <div className="header-social">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
          <select className="lang-select">
            <option>EN</option>
            <option>FR</option>
            <option>DE</option>
            <option>ES</option>
          </select>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation */}
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="has-dropdown">
            <Link to="#">
              About <FaChevronDown className="dropdown-icon" />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/about/pulsus-profile">Pulsus Profile</Link>
              </li>
              <li>
                <Link to="/about/abstraction-indexing">Abstraction & Indexing</Link>
              </li>
              <li>
                <Link to="/about/editorial-policy">Editorial Policy & Reviews</Link>
              </li>
            </ul>
          </li>

          <li className="has-dropdown">
            <Link to="#">
              Journals <FaChevronDown className="dropdown-icon" />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/journals/a-z">A–Z Journals</Link>
              </li>
              <li>
                <Link to="/journals/subjects">Browse by Subjects</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/conferences">Conferences</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
          <li>
            <Link to="/covid-articles">Covid-19 Articles</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/skill-development">Skill Development</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
