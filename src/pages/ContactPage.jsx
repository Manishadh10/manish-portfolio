import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { contactInfo, profile } from "../data.js";
import {
  Mail,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  HelpCircle
} from "lucide-react";
import GithubIcon from "../components/GithubIcon.jsx";

function ContactPage() {
  const faqs = [
    {
      q: "What types of opportunities are you seeking?",
      a: "I am actively looking for QA / Software Testing Internships, Junior QA Engineer, or Software Engineering positions where I can apply manual testing, test case design, and database validation."
    },
    {
      q: "Are you available for remote or on-site roles?",
      a: "I am based in Pokhara, Nepal, and available for on-site roles in Pokhara/Kathmandu, as well as remote opportunities worldwide."
    },
    {
      q: "What is your primary testing focus?",
      a: "Manual and functional testing, test scenario design, boundary value analysis, defect lifecycle tracking, and backend database verification with SQL."
    }
  ];

  return (
    <div className="contact-page">
      <PageHeader
        badge="Let's Connect"
        title="Get in Touch"
        subtitle="Have a QA opening, project idea, or question? Feel free to reach out via the form or direct contact details below."
        breadcrumb="Contact"
      />

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Contact Info Column */}
            <div className="contact-info-col">
              <h2 className="section-title">Contact Channels</h2>
              <p className="contact-intro-text">
                Feel free to reach out regarding software testing opportunities, QA projects, or questions. I typically reply within 24 hours.
              </p>

              {/* Direct Info Cards */}
              <div className="contact-channels-list">
                {/* Email */}
                <div className="contact-channel-card">
                  <div className="channel-icon">
                    <Mail size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Email Address</span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="channel-value channel-link"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-channel-card">
                  <div className="channel-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">{contactInfo.location}</span>
                    <span className="channel-subtext">Nepal Standard Time (UTC +5:45)</span>
                  </div>
                </div>

                {/* GitHub */}
                <div className="contact-channel-card">
                  <div className="channel-icon">
                    <GithubIcon size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">GitHub Profile</span>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value channel-link flex-align"
                    >
                      <span>{contactInfo.githubDisplay}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Frequently Asked</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <div className="faq-q">
                  <HelpCircle size={18} className="faq-icon" />
                  <h3>{faq.q}</h3>
                </div>
                <p className="faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
