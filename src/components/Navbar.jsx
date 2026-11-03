import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { navLinks, profile } from "../data.js";
import { useTheme } from "../context/ThemeContext.jsx";
import { Sun, Moon, Menu, X, ShieldCheck, Mail } from "lucide-react";
import GithubIcon from "./GithubIcon.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        {/* Brand / Logo */}
        <Link to="/" className="brand" aria-label="Manish Adhikari Portfolio Home">
          <div className="brand-avatar">
            <span>MA</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-badge">
              <span className="status-dot"></span>
              QA &amp; Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="header-actions">
          <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn-github"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          <Link to="/contact" className="btn btn-sm btn-primary header-cta">
            <span>Hire Me</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="menu-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}>
        <div className="container mobile-nav-content">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <div className="mobile-status">
              <span className="status-dot"></span>
              <span>Available for QA &amp; Software Roles</span>
            </div>
            <Link to="/contact" className="btn btn-primary btn-block">
              <Mail size={16} /> Contact Manish
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
