import { GITHUB_URL } from "../data.js";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Hi, I'm Manish Adhikari.</h1>
        <p className="subtitle">QA / Software Testing Intern and BCA student</p>
        <p className="intro">
          I like finding the bugs before users do. I'm currently interning at
          Pravidhi Digital Innovation, and I'm learning manual testing,
          automation and database testing.
        </p>
        <div className="buttons">
          <a
            className="btn btn-main"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            See my projects on GitHub
          </a>
          <a className="btn" href="#contact">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
