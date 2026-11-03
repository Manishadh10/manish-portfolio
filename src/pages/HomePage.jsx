import React from "react";
import { Link } from "react-router-dom";
import { profile, specializations, projects, experience } from "../data.js";
import {
  ShieldCheck,
  Database,
  Code,
  Bug,
  Terminal,
  ArrowRight,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle,
  FileText
} from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";

const iconMap = {
  ShieldCheck,
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Availability Badge */}
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>{profile.status}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight-text">{profile.name}</span>.
            </h1>

            <p className="hero-role">{profile.role}</p>

            <p className="hero-intro">
              {profile.tagline} Currently interning at{" "}
              <strong>Pravidhi Digital Innovation</strong> and completing my 7th
              semester in Bachelor of Computer Applications (BCA) at La Grandee
              International College.
            </p>

            {/* CTAs */}
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/experience" className="btn btn-secondary">
                <Briefcase size={16} />
                <span>View QA Experience</span>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Stats Row */}
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
        </div>
      </section>

      {/* Specialization / What I Do */}
      <section className="home-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Core Expertise</span>
            <h2 className="section-title">What I Bring to the Table</h2>
            <p className="section-subtitle">
              Combining systematic quality assurance methodologies with strong
              backend and programming foundations.
            </p>
          </div>

          <div className="spec-grid">
            {specializations.map((item) => {
              const IconComp = iconMap[item.icon] || ShieldCheck;
              return (
                <div key={item.id} className="spec-card">
                  <div className="spec-card-top">
                    <div className="spec-icon-wrapper">
                      <IconComp size={24} />
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

      {/* Experience Preview */}
      <section className="home-section">
        <div className="container">
          <div className="section-header-inline">
            <div>
              <span className="section-eyebrow">Professional Milestone</span>
              <h2 className="section-title">Current Work Experience</h2>
            </div>
            <Link to="/experience" className="btn-inline-link">
              <span>View full timeline</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="exp-preview-card">
            <div className="exp-preview-header">
              <div>
                <span className="exp-preview-badge">Active Internship</span>
                <h3 className="exp-preview-role">{currentExp.role}</h3>
                <div className="exp-preview-company">
                  <span>{currentExp.company}</span>
                  <span className="dot-sep">&bull;</span>
                  <span>{currentExp.location}</span>
                </div>
              </div>
              <div className="exp-preview-period">{currentExp.period}</div>
            </div>

            <p className="exp-preview-desc">{currentExp.description}</p>

            <div className="exp-preview-skills">
              {currentExp.skillsUsed.slice(0, 6).map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="home-section bg-alt">
        <div className="container">
          <div className="section-header-inline">
            <div>
              <span className="section-eyebrow">Selected Works</span>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <Link to="/projects" className="btn-inline-link">
              <span>Browse all projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="projects-view-all">
            <Link to="/projects" className="btn btn-outline">
              <span>View All 4 Projects &amp; Testing Artifacts</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <span className="cta-eyebrow">Let's Collaborate</span>
              <h2 className="cta-title">
                Looking for a meticulous QA or Software Engineer?
              </h2>
              <p className="cta-desc">
                I am actively seeking software testing internships and junior QA /
                engineering roles where I can make an immediate impact on product
                stability and code quality.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  <span>Start a Conversation</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  <span>Learn More About Manish</span>
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
