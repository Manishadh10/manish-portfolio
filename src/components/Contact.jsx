import { contact, GITHUB_URL } from "../data.js";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            Email: <a href={"mailto:" + contact.email}>{contact.email}</a>
          </li>
          <li>
            Phone: <a href={"tel:" + contact.phone}>{contact.phone}</a>
          </li>
          <li>
            GitHub:{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              github.com/Manishadh10
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
