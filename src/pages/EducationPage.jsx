import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { education } from "../data.js";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";

function EducationPage() {
  return (
    <div className="education-page">
      <PageHeader
        badge="Academic Qualifications"
        title="Education &amp; Academics"
        subtitle="Formal degree programs, foundational computer science coursework, and academic milestones."
        breadcrumb="Education"
      />

      <section className="education-main-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Journey</span>
            <h2 className="section-title">Degrees &amp; Certifications</h2>
          </div>

          <div className="edu-list">
            {education.map((edu) => (
              <div key={edu.id} className="edu-card">
                <div className="edu-header">
                  <div className="edu-icon-box">
                    <GraduationCap size={24} />
                  </div>
                  <div className="edu-title-group">
                    <div className="edu-badge-row">
                      <span className="badge badge-accent">{edu.status}</span>
                      {edu.gpa && (
                        <span className="badge badge-subtle highlight-gpa">
                          {edu.gpa}
                        </span>
                      )}
                    </div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <p className="edu-university">{edu.university}</p>
                  </div>
                  <div className="edu-meta">
                    <div className="meta-item">
                      <Calendar size={15} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={15} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="edu-desc">{edu.description}</p>

                {/* Key Coursework */}
                <div className="edu-coursework-section">
                  <div className="edu-section-title">
                    <BookOpen size={16} />
                    <span>Key Coursework &amp; Subject Areas</span>
                  </div>
                  <div className="course-tags">
                    {edu.courses.map((course) => (
                      <span key={course} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="edu-highlights-section">
                    <div className="edu-section-title">
                      <Award size={16} />
                      <span>Academic Highlights</span>
                    </div>
                    <ul className="edu-highlights-list">
                      {edu.highlights.map((item, idx) => (
                        <li key={idx}>
                          <CheckCircle size={14} className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coursework to QA Connection */}
      <section className="qa-concepts-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Synergy</span>
            <h2 className="section-title">How My Studies Inform My QA Practice</h2>
            <p className="section-subtitle">
              Bridging theoretical computer science foundations with real-world software testing and validation.
            </p>
          </div>

          <div className="academic-synergy-grid">
            <div className="synergy-card">
              <h3>Software Engineering</h3>
              <p>
                In-depth understanding of SDLC models (Agile, Waterfall), verification vs. validation, requirement specification (SRS), and defect metrics.
              </p>
            </div>
            <div className="synergy-card">
              <h3>Database Management Systems</h3>
              <p>
                Strong command of ACID properties, normalization, indexing, and complex SQL joins enabling thorough backend and data integrity testing.
              </p>
            </div>
            <div className="synergy-card">
              <h3>Data Structures &amp; Algorithms</h3>
              <p>
                Ability to analyze time/space complexity, understand boundary conditions in arrays/collections, and anticipate edge-case vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="home-section">
        <div className="container text-center">
          <h2 className="section-title">Ready to connect?</h2>
          <p className="section-subtitle">
            I'm happy to provide academic transcripts or discuss project details.
          </p>
          <div className="hero-buttons center">
            <Link to="/contact" className="btn btn-primary">
              <span>Contact Manish</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/skills" className="btn btn-outline">
              <span>Explore Technical Skills</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationPage;
