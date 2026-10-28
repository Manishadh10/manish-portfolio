import { experience } from "../data.js";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        {experience.map((job) => (
          <div className="entry" key={job.role}>
            <h3>{job.role}</h3>
            <p className="meta">{job.period}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
