import React, { useState } from "react";
import { Send, CheckCircle2, Copy, Check, Mail, AlertCircle } from "lucide-react";
import { contactInfo } from "../data.js";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setError("");

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <div className="contact-form-wrapper">
      {/* Quick Email Banner */}
      <div className="quick-copy-card">
        <div className="quick-copy-info">
          <Mail size={18} className="copy-icon-accent" />
          <div>
            <div className="quick-copy-label">Direct Email Address</div>
            <div className="quick-copy-value">{contactInfo.email}</div>
          </div>
        </div>
        <button
          onClick={copyEmail}
          className="btn-copy"
          aria-label="Copy email address"
          title="Copy email to clipboard"
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {submitted ? (
          <div className="form-success-alert">
            <CheckCircle2 size={36} className="success-icon" />
            <h3>Message Prepared Successfully!</h3>
            <p>
              Thank you for reaching out! You can also email me directly at{" "}
              <strong>{contactInfo.email}</strong>.
            </p>
            <div className="success-actions">
              <a
                href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                  formData.subject || "Contact from Portfolio"
                )}&body=${encodeURIComponent(
                  `Hi Manish,\n\nMy name is ${formData.name}.\n\n${formData.message}`
                )}`}
                className="btn btn-primary btn-sm"
              >
                Send via Email App
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn btn-outline btn-sm"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="form-heading">
              <h3>Send a Direct Message</h3>
              <p>Fill out the form below and I'll respond as soon as possible.</p>
            </div>

            {error && (
              <div className="form-error-alert">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Your Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Your Email <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. QA Opportunity / Project Discussion"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="req">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary btn-block submit-btn"
            >
              {submitting ? (
                <span>Sending message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
