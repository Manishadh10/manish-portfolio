import React, { useState } from "react";
import { Send, CheckCircle2, Copy, Check, Mail, AlertCircle, Loader2 } from "lucide-react";
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
  const [submittedData, setSubmittedData] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey.trim() === "" || accessKey.includes("YOUR_")) {
      setError(
        "Email service key (VITE_WEB3FORMS_ACCESS_KEY) is missing in .env. Please add your free Web3Forms access key, or send directly via your email app below."
      );
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: `${formData.name.trim()} (Portfolio Contact Form)`,
          botcheck: false
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedData({ ...formData });
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.message || "Failed to send message. Please verify your access key or email directly.");
      }
    } catch (err) {
      setError("A network error occurred while sending your message. Please check your connection or send via your email app.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      {/* Quick Email Banner */}
      <div className="quick-copy-card">
        <div className="quick-copy-info">
          <Mail size={18} className="copy-icon-accent" />
          <div>
            <div className="copy-label">Direct Email Address</div>
            <div className="copy-email-text">{contactInfo.email}</div>
          </div>
        </div>
        <button
          type="button"
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
      {submitted ? (
        <div className="form-success-card">
          <CheckCircle2 size={44} className="success-icon" />
          <h3>Message Sent Successfully!</h3>
          <p>
            Thank you, <strong>{submittedData?.name}</strong>! Your message has been sent directly to Manish Adhikari. 
            I will get back to you at <strong>{submittedData?.email}</strong> shortly.
          </p>
          <div className="success-actions">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setSubmittedData(null);
              }}
              className="btn btn-primary btn-sm"
            >
              Send Another Message
            </button>
            <a
              href={`mailto:${contactInfo.email}`}
              className="btn btn-outline btn-sm"
            >
              Direct Email
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {/* Honeypot spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <div className="form-heading">
            <h3>Send a Direct Message</h3>
            <p>Fill out the form below and your message will be delivered straight to my email inbox.</p>
          </div>

          {error && (
            <div className="form-error-banner">
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div>{error}</div>
                {formData.message && (
                  <div style={{ marginTop: "8px" }}>
                    <a
                      href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                        formData.subject || `Message from ${formData.name || "Portfolio Visitor"}`
                      )}&body=${encodeURIComponent(
                        `Hi Manish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                      )}`}
                      style={{
                        color: "inherit",
                        fontWeight: 600,
                        textDecoration: "underline",
                        fontSize: "0.8125rem"
                      }}
                    >
                      Send via Email App (Outlook, Gmail, etc.)
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                Your Name <span className="required-star">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Your Email <span className="required-star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. jane@example.com"
                className="form-input"
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
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required-star">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="form-textarea"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary btn-block submit-btn"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
