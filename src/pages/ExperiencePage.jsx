import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { experience, qaWorkflow } from "../data.js";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  GitBranch,
  Layers,
  FileCheck
} from "lucide-react";

function ExperiencePage() {
  return (
    <div className="experience-page">
      <PageHeader
        badge="Career History"
        title="Work Experience"
        subtitle="Practical QA testing, agile team collaboration, and defect lifecycles in industry software projects."
        breadcrumb="Experience"
      />

      {/* Main Experience Section */}
      <section className="exp-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Professional Roles</span>
            <h2 className="section-title">Industry Experience</h2>
          </div>

          <div className="exp-timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker">
                  <Briefcase size={18} />
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <div className="timeline-badge-row">
                        <span className="badge badge-accent">{exp.type}</span>
                      </div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                    </div>

                    <div className="timeline-meta">
                      <div className="meta-item">
                        <Calendar size={15} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={15} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="timeline-desc">{exp.description}</p>

                  <div className="timeline-subheading">
                    <FileCheck size={16} />
                    <span>Key Responsibilities &amp; Daily Workflows</span>
                  </div>

                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <CheckCircle size={15} className="check-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="timeline-skills">
                    <span className="skills-label">Methodologies &amp; Skills:</span>
                    <div className="skills-pill-list">
                      {exp.skillsUsed.map((skill) => (
                        <span key={skill} className="tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Workflow / STLC Section */}
      <section className="qa-workflow-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Methodology &amp; Standards</span>
            <h2 className="section-title">My Testing Workflow Pipeline</h2>
            <p className="section-subtitle">
              Adhering to structured Software Testing Life Cycle (STLC) principles to deliver zero-defect releases.
            </p>
          </div>

          <div className="workflow-grid">
            {qaWorkflow.map((item) => (
              <div key={item.step} className="workflow-card">
                <div className="workflow-step-badge">{item.step}</div>
                <h3 className="workflow-title">{item.title}</h3>
                <p className="workflow-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="home-section">
        <div className="container text-center">
          <h2 className="section-title">Want to see these skills in action?</h2>
          <p className="section-subtitle">
            Explore the software and testing artifacts I've built and validated.
          </p>
          <div className="hero-buttons center">
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span>Contact Manish</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExperiencePage;
