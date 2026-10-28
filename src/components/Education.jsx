import { education } from "../data.js";

function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        {education.map((item) => (
          <div className="entry" key={item.title}>
            <h3>{item.title}</h3>
            <p className="meta">{item.meta}</p>
            {item.details && <p>{item.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
