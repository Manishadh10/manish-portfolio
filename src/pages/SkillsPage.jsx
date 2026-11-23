import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { skillCategories } from "../data.js";
import {
  ShieldCheck,
  Code,
  Database,
  Terminal,
  Network,
  ArrowRight
} from "lucide-react";

const categoryIconMap = {
  ShieldCheck,
  Network,
  Code,
  Database,
  Terminal
};

function SkillsPage() {
  const qaConcepts = [
    {
      term: "Test Case Design",
      desc: "Structuring test scenarios with clear preconditions, specific test data, step-by-step instructions, and expected vs. actual outcomes."
    },
    {
      term: "Boundary Value Analysis (BVA)",
      desc: "Testing values right at the boundaries of input limits (min, min+1, max-1, max) where software calculations and edge cases often break."
    },
    {
      term: "Equivalence Partitioning (EP)",
      desc: "Dividing test data into valid and invalid partitions to select representative test cases and eliminate redundant testing."
    },
    {
      term: "API Testing in Postman",
      desc: "Verifying endpoints using GET, POST, PUT, DELETE, inspecting HTTP status codes, query parameters, auth headers, and JSON response bodies."
    },
    {
      term: "Defect Life Cycle",
      desc: "Logging bugs with precise reproduction steps, environment details, and severity, followed by retesting fixed issues before closure."
    },
    {
      term: "Smoke vs. Sanity Testing",
      desc: "Executing quick smoke tests to accept builds for further testing, and sanity passes to verify specific bug fixes."
    }
  ];

  return (
    <div className="skills-page">
      <PageHeader
        badge="Technical Skills"
        title="Skills &amp; Competencies"
        subtitle="A clear overview of my fundamentals in manual software testing, API testing with Postman, SQL database queries, and programming foundations."
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

                  <div className="skills-pill-grid">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="skill-item-card">
                        <h3 className="skill-item-name">{skill.name}</h3>
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

      {/* QA Concepts Reference */}
      <section className="qa-concepts-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Methodologies</span>
            <h2 className="section-title">Core Testing Fundamentals</h2>
            <p className="section-subtitle">
              Standard techniques applied during test planning, boundary checks, and API validation.
            </p>
          </div>

          <div className="qa-concepts-grid">
            {qaConcepts.map((item, idx) => (
              <div key={idx} className="qa-concept-card">
                <span className="qa-concept-index">0{idx + 1}</span>
                <h3 className="qa-concept-term">{item.term}</h3>
                <p className="qa-concept-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="skills-cta-section">
        <div className="container">
          <div className="skills-cta-card">
            <div>
              <h3>Interested in practical project work?</h3>
              <p>Explore desktop applications, backend database schemas, and testing artifacts.</p>
            </div>
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
