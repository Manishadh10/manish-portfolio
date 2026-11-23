import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { profile, contactInfo } from "../data.js";
import {
  ShieldCheck,
  Target,
  Code2,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Network
} from "lucide-react";
import GithubIcon from "../components/GithubIcon.jsx";

function AboutPage() {
  const philosophies = [
    {
      title: "Prevention Over Patching",
      description:
        "The best time to catch an issue is early during requirement analysis before development begins. Reviewing acceptance criteria early prevents costly fixes later.",
      icon: ShieldCheck
    },
    {
      title: "API & Backend Validation",
      description:
        "A working UI must be supported by consistent APIs and clean data. I verify REST API endpoints in Postman and validate data records directly in SQL tables.",
      icon: Network
    },
    {
      title: "Boundary & Edge Case Attention",
      description:
        "Standard user workflows rarely expose breaking issues. I apply Boundary Value Analysis (BVA) and Equivalence Partitioning (EP) to examine where logic is likely to fail.",
      icon: Target
    },
    {
      title: "Constructive Collaboration",
      description:
        "Testing is about shipping stable software as a team. I provide clear steps to reproduce, actual vs. expected results, and logs to help developers resolve defects quickly.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="about-page">
      <PageHeader
        badge="About Me"
        title="About Manish Adhikari"
        subtitle="7th semester BCA student and QA / Software Testing Intern based in Pokhara, Nepal."
        breadcrumb="About"
      />

      <section className="about-main-section">
        <div className="container">
          <div className="about-grid">
            {/* Left Bio Column */}
            <div className="about-bio-col">
              <h2 className="section-title">Background &amp; Focus</h2>

              <p className="about-lead">
                I am a 7th semester Bachelor of Computer Applications (BCA) student
                at <strong>La Grandee International College</strong> (affiliated with
                Pokhara University) in Pokhara, Nepal.
              </p>

              <p>
                My journey into software testing started while building academic desktop applications in Java and Python. Whenever I implemented a feature—such as user login authentication, question bank management, or database transactions—I found myself spending extra time testing boundary limits, invalid inputs, and unexpected workflows to ensure the system remained stable.
              </p>

              <p>
                Currently, I am putting these fundamentals into practice as a{" "}
                <strong>QA / Software Testing Intern at Pravidhi Digital Innovation</strong>.
                My work involves analyzing user requirements, writing detailed test cases, executing manual functional tests, verifying REST APIs using Postman, and inspecting database records using SQL.
              </p>

              <p>
                I am actively seeking junior QA, software testing internship, or software roles where I can contribute thorough testing, strong curiosity, and dependable attention to detail.
              </p>

              {/* Action Buttons */}
              <div className="about-actions">
                <Link to="/experience" className="btn btn-primary">
                  <span>View Work Experience</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

            {/* Right Sidebar: Clean Profile Card */}
            <div className="about-sidebar-col">
              <div className="about-profile-card">
                <div className="about-avatar-container">
                  <img
                    src={profile.avatar || "/profile.jpg"}
                    alt={profile.name}
                    className="about-avatar-img"
                  />
                </div>

                <div className="about-profile-header">
                  <h3 className="about-profile-name">{profile.name}</h3>
                  <p className="about-profile-role">{profile.role}</p>
                </div>

                <ul className="facts-list">
                  <li>
                    <span className="fact-label">Education</span>
                    <span className="fact-val">BCA (7th Sem Ongoing)</span>
                  </li>
                  <li>
                    <span className="fact-label">College</span>
                    <span className="fact-val">La Grandee Int'l College</span>
                  </li>
                  <li>
                    <span className="fact-label">Affiliation</span>
                    <span className="fact-val">Pokhara University</span>
                  </li>
                  <li>
                    <span className="fact-label">Current Role</span>
                    <span className="fact-val">QA Intern @ Pravidhi Digital</span>
                  </li>
                  <li>
                    <span className="fact-label">Location</span>
                    <span className="fact-val">{profile.location}</span>
                  </li>
                  <li>
                    <span className="fact-label">Primary Focus</span>
                    <span className="fact-val status-highlight">Manual Testing &amp; Postman</span>
                  </li>
                </ul>

                <div className="facts-card-footer">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="btn btn-sm btn-primary w-full"
                  >
                    <Mail size={15} />
                    <span>Send Email</span>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline w-full"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Principles</span>
            <h2 className="section-title">Testing Approach</h2>
            <p className="section-subtitle">
              Core principles I follow when testing features and documenting defects.
            </p>
          </div>

          <div className="philosophy-grid">
            {philosophies.map((phil, idx) => {
              const IconComp = phil.icon;
              return (
                <div key={idx} className="philosophy-card">
                  <div className="philosophy-icon">
                    <IconComp size={22} />
                  </div>
                  <h3 className="philosophy-title">{phil.title}</h3>
                  <p className="philosophy-desc">{phil.description}</p>
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
