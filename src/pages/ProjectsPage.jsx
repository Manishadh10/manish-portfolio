import React, { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects, GITHUB_URL } from "../data.js";
import { Filter, ArrowUpRight, FolderGit2 } from "lucide-react";
import GithubIcon from "../components/GithubIcon.jsx";

function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { key: "all", label: "All Projects" },
    { key: "qa", label: "QA & Testing" },
    { key: "desktop", label: "Desktop & Java" },
    { key: "backend", label: "Backend & DB" },
    { key: "python", label: "Python Suite" }
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.categoryKey === filter;
  });

  return (
    <div className="projects-page">
      <PageHeader
        badge="Software & Quality Engineering"
        title="Featured Projects &amp; Case Studies"
        subtitle="A collection of applications, database architectures, and testing documentation demonstrating software development and verification."
        breadcrumb="Projects"
      />

      <section className="projects-main-section">
        <div className="container">
          {/* Filter Bar */}
          <div className="projects-filter-bar">
            <div className="filter-label">
              <Filter size={16} />
              <span>Filter by:</span>
            </div>
            <div className="filter-tabs">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`filter-tab-btn ${filter === tab.key ? "active" : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* GitHub CTA Callout */}
          <div className="github-callout-card">
            <div className="github-callout-left">
              <div className="github-icon-circle">
                <GithubIcon size={28} />
              </div>
              <div>
                <h3>Explore My Code on GitHub</h3>
                <p>
                  Interested in code commits, test case structures, or project setup instructions? Check out my public repositories.
                </p>
              </div>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Visit github.com/Manishadh10</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
