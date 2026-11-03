import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { profile, contactInfo } from "../data.js";
import {
  ShieldCheck,
  Target,
  Code2,
  CheckCircle2,
  Layers,
  ArrowRight,
  MapPin,
  Mail,
  GraduationCap,
  Briefcase
} from "lucide-react";

function AboutPage() {
  const philosophies = [
    {
      title: "Prevention Over Patching",
      description:
        "The best time to catch a bug is during requirements analysis before a line of code is written. I analyze acceptance criteria early to eliminate ambiguities.",
      icon: ShieldCheck
    },
    {
      title: "Boundary & Edge-Case Vigilance",
      description:
        "Standard user workflows rarely reveal breaking issues. I apply Boundary Value Analysis and Equivalence Partitioning to probe where applications tend to fail.",
      icon: Target
    },
    {
      title: "Data & Constraint Integrity",
      description:
        "A reliable frontend is meaningless if data persistence breaks. My background in PostgreSQL and SQL allows me to validate data persistence directly at the database layer.",
      icon: Code2
    },
    {
      title: "Constructive Developer Partnership",
      description:
        "Testing is not about finding fault—it is about shipping great software together. I provide clear reproduction steps, logs, and screenshots so developers can reproduce and fix bugs quickly.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="about-page">
      <PageHeader
        badge="Professional Profile"
        title="About Manish Adhikari"
        subtitle="7th semester BCA student and QA / Software Testing Intern passionate about engineering reliability and robust software systems."
        breadcrumb="About"
      />

      <section className="about-main-section">
        <div className="container">
          <div className="about-grid">
            {/* Left Bio Column */}
            <div className="about-bio-col">
              <h2 className="section-title">Background &amp; Aspirations</h2>

              <p className="about-lead">
                I am a 7th semester Bachelor of Computer Applications (BCA) student
                at <strong>La Grandee International College</strong> (affiliated with
                Pokhara University) in Pokhara, Nepal.
              </p>

              <p>
                My passion for Software Quality Assurance grew from building academic
                and desktop applications in Java and Python. Whenever I implemented a
                feature—whether it was user authentication, question bank CRUD operations,
                or database transactions—I found myself constantly testing edge cases,
                invalid inputs, and system limits to make sure the software wouldn't break.
              </p>

              <p>
                Currently, I am putting this mindset into industry practice as a{" "}
                <strong>QA / Software Testing Intern at Pravidhi Digital Innovation</strong>.
                Working alongside senior engineers, I execute manual test suites, formulate
                test matrices, verify bug fixes, and validate database records using SQL.
              </p>

              <p>
                I am actively seeking QA and Software Engineering opportunities where I
                can apply my strong testing foundation, problem-solving abilities, and
                continuous curiosity to ensure bulletproof software quality.
              </p>

              {/* Action Buttons */}
              <div className="about-actions">
                <Link to="/experience" className="btn btn-primary">
                  <span>View My Work Experience</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>

            {/* Right Quick Facts Card */}
            <div className="about-sidebar-col">
              <div className="quick-facts-card">
                <h3 className="facts-title">Quick Overview</h3>

                <ul className="facts-list">
                  <li>
                    <span className="fact-label">Full Name</span>
                    <span className="fact-val">{profile.name}</span>
                  </li>
                  <li>
                    <span className="fact-label">Primary Role</span>
                    <span className="fact-val">QA &amp; Software Testing Intern</span>
                  </li>
                  <li>
                    <span className="fact-label">Education</span>
                    <span className="fact-val">BCA, 7th Semester (Pokhara Univ.)</span>
                  </li>
                  <li>
                    <span className="fact-label">Current Company</span>
                    <span className="fact-val">Pravidhi Digital Innovation</span>
                  </li>
                  <li>
                    <span className="fact-label">Location</span>
                    <span className="fact-val">{profile.location}</span>
                  </li>
                  <li>
                    <span className="fact-label">Availability</span>
                    <span className="fact-val status-highlight">
                      Open to Opportunities
                    </span>
                  </li>
                  <li>
                    <span className="fact-label">Languages</span>
                    <span className="fact-val">English, Nepali</span>
                  </li>
                </ul>

                <div className="facts-card-footer">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="btn btn-sm btn-outline btn-block"
                  >
                    <Mail size={14} />
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Philosophy Section */}
      <section className="about-philosophy-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Guiding Principles</span>
            <h2 className="section-title">My Approach to Quality Assurance</h2>
            <p className="section-subtitle">
              Quality is an engineering discipline, not an afterthought. Here is how I approach every testing cycle.
            </p>
          </div>

          <div className="philosophy-grid">
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="philosophy-card">
                  <div className="philosophy-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="philosophy-title">{item.title}</h3>
                  <p className="philosophy-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
