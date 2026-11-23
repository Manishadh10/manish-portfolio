import React from "react";
import { Link } from "react-router-dom";
import { profile, specializations, projects, experience, qaWorkflow, contactInfo } from "../data.js";
import {
  ShieldCheck,
  Database,
  Code,
  Bug,
  Terminal,
  Network,
  ArrowRight,
  Briefcase,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  ExternalLink
} from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";
import GithubIcon from "../components/GithubIcon.jsx";

const iconMap = {
  ShieldCheck,
  Network,
  Database,
  Code,
  Bug,
  Terminal
};

function HomePage() {
  const currentExp = experience[0];
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="home-page">
      {/* =========================================================================
          Hero Section - Clean, Human, Senior Developer Aesthetic
          ========================================================================= */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Column: Direct, Authentic Human Introduction */}
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name-accent">{profile.name}</span>.
            </h1>

            <p className="hero-role-title">
              QA &amp; Software Testing Engineer based in Pokhara, Nepal.
            </p>

            <p className="hero-intro">
              Currently interning at <strong>Pravidhi Digital Innovation</strong> and pursuing my 7th semester of Bachelor of Computer Applications (BCA) at La Grandee International College (affiliated with Pokhara University). My primary focus is on <strong>manual testing</strong>, <strong>REST API validation using Postman</strong>, and <strong>database verification with SQL</strong>.
            </p>

            {/* Clean CTAs */}
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/experience" className="btn btn-secondary">
                <Briefcase size={16} />
                <span>Work Experience</span>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <Mail size={16} />
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Honest, Grounded Overview Grid */}
            <div className="hero-stats-grid">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-note">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean, Elegant Framed Portrait (No Gimmicks) */}
          <div className="hero-visual-wrapper">
            <div className="portrait-frame-card">
              <div className="portrait-photo-box">
                <img
                  src={profile.avatar || "/profile.jpg"}
                  alt={profile.name}
                  className="portrait-photo"
                  loading="eager"
                />
              </div>

              <div className="portrait-meta-footer">
                <div className="portrait-info-line">
                  <span className="portrait-name-bold">{profile.name}</span>
                  <span className="portrait-sub-tag">QA Intern @ Pravidhi Digital</span>
                </div>

                <div className="portrait-links-row">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portrait-pill-link"
                    title="GitHub Profile"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="portrait-pill-link"
                    title="Send Email"
                  >
                    <Mail size={14} />
                    <span>Email</span>
                  </a>
                  <div className="portrait-location-badge">
                    <MapPin size={13} />
                    <span>Pokhara, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Areas of Focus / Core Disciplines
          ========================================================================= */}
      <section className="home-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Disciplines</span>
            <h2 className="section-title">What I Focus On</h2>
            <p className="section-subtitle">
              Clear fundamentals in manual test execution, API request inspection in Postman, and backend database queries.
            </p>
          </div>

          <div className="spec-bento-grid">
            {specializations.map((item) => {
              const IconComp = iconMap[item.icon] || ShieldCheck;
              return (
                <div key={item.id} className="spec-bento-card">
                  <div className="spec-card-top">
                    <div className="spec-icon-wrapper">
                      <IconComp size={22} />
                    </div>
                    <span className="spec-badge">{item.badge}</span>
                  </div>
                  <h3 className="spec-title">{item.title}</h3>
                  <p className="spec-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          Testing Process / STLC Pipeline
          ========================================================================= */}
      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Process</span>
            <h2 className="section-title">My Testing Approach</h2>
            <p className="section-subtitle">
              A standard, methodical workflow applied from requirement breakdown to bug verification.
            </p>
          </div>

          <div className="workflow-pipeline">
            {qaWorkflow.map((step, idx) => (
              <div key={idx} className="workflow-step-card">
                <div className="workflow-step-number">{step.step}</div>
                <h3 className="workflow-step-title">{step.title}</h3>
                <p className="workflow-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          Current Experience Spotlight
          ========================================================================= */}
      <section className="home-section bg-alt">
        <div className="container">
          <div className="section-header-inline">
            <div>
              <span className="section-eyebrow">Work History</span>
              <h2 className="section-title">Current Role</h2>
            </div>
            <Link to="/experience" className="btn-inline-link">
              <span>View full experience</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="exp-spotlight-card">
            <div className="exp-spotlight-header">
              <div className="exp-spotlight-badge-group">
                <span className="badge badge-accent">{currentExp.type}</span>
              </div>
              <div className="exp-spotlight-period">{currentExp.period}</div>
            </div>

            <div className="exp-spotlight-main">
              <div className="exp-spotlight-title-group">
                <h3 className="exp-spotlight-role">{currentExp.role}</h3>
                <h4 className="exp-spotlight-company">
                  {currentExp.company} <span className="text-muted">• {currentExp.location}</span>
                </h4>
              </div>
              <p className="exp-spotlight-desc">{currentExp.description}</p>
            </div>

            <div className="exp-spotlight-skills">
              {currentExp.skillsUsed.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Featured Projects
          ========================================================================= */}
      <section className="home-section">
        <div className="container">
          <div className="section-header-inline">
            <div>
              <span className="section-eyebrow">Portfolio</span>
              <h2 className="section-title">Selected Projects</h2>
            </div>
            <Link to="/projects" className="btn-inline-link">
              <span>All projects ({projects.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          Contact Invitation Callout
          ========================================================================= */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <span className="cta-eyebrow">Contact</span>
              <h2 className="cta-title">
                Interested in working together?
              </h2>
              <p className="cta-desc">
                I am actively open to junior QA engineer, software testing internship, and QA testing roles. If you have an opportunity or question, feel free to reach out.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  <span>Send a Message</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  <span>Read About Manish</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
