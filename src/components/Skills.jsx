import { skills } from "../data.js";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <dl className="skills">
          {skills.map((group) => (
            <div key={group.title}>
              <dt>{group.title}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Skills;
