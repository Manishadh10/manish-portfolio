import { projects, GITHUB_URL } from "../data.js";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="note">Click any project to see my work on GitHub.</p>

        {projects.map((project) => (
          <a
            className="project"
            key={project.title}
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p>{project.description}</p>
            <span className="go">View on GitHub</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
