import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle, ShieldCheck } from "lucide-react";
import GithubIcon from "./GithubIcon.jsx";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`project-card ${expanded ? "expanded" : ""}`}>
      {/* Top Header */}
      <div className="project-card-header">
        <div className="project-badges">
          <span className="badge badge-accent">{project.category}</span>
          <span className="badge badge-subtle">{project.badge}</span>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-icon"
          title="View source on GitHub"
          aria-label={`View ${project.title} on GitHub`}
        >
          <GithubIcon size={18} />
        </a>
      </div>

      {/* Title & Summary */}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-summary">{project.summary}</p>

      {/* Tech Stack Pills */}
      <div className="project-tech-pills">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>

      {/* QA & Testing Highlights */}
      <div className="project-qa-section">
        <div className="qa-heading">
          <ShieldCheck size={16} />
          <span>Testing &amp; Implementation Focus</span>
        </div>
        <ul className="project-qa-list">
          {project.testingHighlights.slice(0, expanded ? undefined : 2).map((item, idx) => (
            <li key={idx}>
              <CheckCircle size={14} className="check-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="project-expanded-body">
          <div className="project-detail-block">
            <h4>In-Depth Overview</h4>
            <p>{project.description}</p>
          </div>

          <div className="project-detail-block">
            <h4>Key Features</h4>
            <ul className="project-feature-list">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Card Footer Actions */}
      <div className="project-card-footer">
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-toggle-details"
          aria-expanded={expanded}
        >
          <span>{expanded ? "Show Less" : "Deep Dive Details"}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline"
        >
          <span>GitHub</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
