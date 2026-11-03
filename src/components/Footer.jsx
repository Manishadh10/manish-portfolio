import React from "react";
import { Link } from "react-router-dom";
import { profile, navLinks, contactInfo } from "../data.js";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import GithubIcon from "./GithubIcon.jsx";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Col 1: Bio */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand">
              <span className="footer-brand-title">{profile.name}</span>
            </Link>
            <p className="footer-desc">
              QA &amp; Software Testing Intern and 7th semester BCA student at La Grandee International College. Committed to software quality, thorough defect detection, and reliable software systems.
            </p>
            <div className="footer-availability-badge">
              <span className="status-dot"></span>
              <span>Available for Opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Information</h4>
            <ul className="footer-contact-list">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="footer-contact-item">
                  <Mail size={16} />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone}`} className="footer-contact-item">
                  <Phone size={16} />
                  <span>{contactInfo.displayPhone}</span>
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>{contactInfo.location}</span>
              </li>
              <li>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <GithubIcon size={16} />
                  <span>{contactInfo.githubDisplay}</span>
                  <ArrowUpRight size={14} className="ext-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="footer-built">
            Built with React, Vite &amp; Multi-Page Routing
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
