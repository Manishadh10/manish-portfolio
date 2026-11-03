import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { skillCategories } from "../data.js";
import {
  ShieldCheck,
  Code,
  Database,
  Terminal,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";

const categoryIconMap = {
  ShieldCheck,
  Code,
  Database,
  Terminal,
  CheckCircle
};

function SkillsPage() {
  const qaConcepts = [
    {
      term: "Boundary Value Analysis (BVA)",
      desc: "Testing values at the boundaries of input domains (min, min+1, nom, max-1, max) where software systems most commonly fail."
    },
    {
      term: "Equivalence Partitioning (EP)",
      desc: "Dividing test input data into valid and invalid partitions, selecting representative test cases to optimize coverage without redundancy."
    },
    {
      term: "Defect Life Cycle",
      desc: "Tracking defects through states: New -> Assigned -> Open -> Fixed -> Retest -> Verified -> Closed (or Reopened)."
    },
    {
      term: "Smoke vs. Sanity Testing",
      desc: "Smoke verifies critical builds for basic stability; Sanity focuses on specific modules after minor bug fixes or builds."
    },
    {
      term: "Regression Testing",
      desc: "Re-executing test suites to guarantee that recent code modifications haven't introduced regressions into existing features."
    }
  ];

  return (
    <div className="skills-page">
      <PageHeader
        badge="Technical Stack"
        title="Skills &amp; Technical Competencies"
        subtitle="A comprehensive overview of software quality engineering, programming languages, relational databases, and industry tools."
        breadcrumb="Skills"
      />

      {/* Main Categories */}
      <section className="skills-main-section">
        <div className="container">
          <div className="skills-category-list">
            {skillCategories.map((category) => {
              const IconComp = categoryIconMap[category.icon] || ShieldCheck;
              return (
                <div key={category.id} className="skill-cat-card">
                  <div className="skill-cat-header">
                    <div className="skill-cat-icon">
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h2 className="skill-cat-title">{category.title}</h2>
                      <p className="skill-cat-desc">{category.description}</p>
                    </div>
                  </div>

                  <div className="skills-items-grid">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skill-item-card">
                        <div className="skill-item-top">
                          <span className="skill-item-name">{skill.name}</span>
                          <span className="skill-level-badge">{skill.level}</span>
                        </div>
                        <p className="skill-item-desc">{skill.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QA Concepts Glossary / Best Practices */}
      <section className="qa-concepts-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Theoretical &amp; Applied Knowledge</span>
            <h2 className="section-title">Core QA Principles &amp; Techniques</h2>
            <p className="section-subtitle">
              Foundational software testing concepts I utilize in everyday verification.
            </p>
          </div>

          <div className="concepts-grid">
            {qaConcepts.map((item, idx) => (
              <div key={idx} className="concept-card">
                <h3 className="concept-term">{item.term}</h3>
                <p className="concept-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="home-section">
        <div className="container text-center">
          <h2 className="section-title">Interested in working together?</h2>
          <p className="section-subtitle">
            Let's discuss how my testing and development skill set fits into your engineering team.
          </p>
          <div className="hero-buttons center">
            <Link to="/contact" className="btn btn-primary">
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/experience" className="btn btn-outline">
              <span>View Experience</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
