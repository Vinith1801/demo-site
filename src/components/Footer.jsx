import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Logo and About */}
        <div className="footer-col">
          <div className="footer-logo">PULSUS</div>
          <p className="footer-about">
            Pulsus Group is a peer-reviewed publisher supporting the work of
            medical researchers worldwide, ensuring high standards in scientific
            publishing.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about/pulsus-profile">About Us</Link></li>
            <li><Link to="/journals/a-z">Journals</Link></li>
            <li><Link to="/conferences">Conferences</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/about/editorial-policy">Editorial Policy</Link></li>
            <li><Link to="/about/editorial-policy">Peer Review Process</Link></li>
            <li><Link to="/advertising">Advertising</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: info@pulsus.com</p>
          <p>Phone: +44 2033189089</p>

          <div className="footer-social">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Link>
            <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pulsus Group. All Rights Reserved.</p>
        <p>
          <Link to="/sitemap">Site Map</Link> | <Link to="/feedback">Feedback</Link>
        </p>
      </div>
    </footer>
  );
}
