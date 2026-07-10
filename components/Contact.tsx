"use client";

import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "8acb3f04-6138-409a-8ae3-911c81b15660");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent — we'll be in touch.");
        event.currentTarget.reset();
      } else {
        setResult("Something went wrong. Try emailing directly.");
      }
    } catch {
      setResult("Network error. Try emailing directly.");
    }
  };

  const isSuccess = result.includes("sent");
  const isError = result && !isSuccess && result !== "Sending...";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="section-eyebrow">// contact</div>
        <h2 className="contact-heading">Have an idea worth building?</h2>
        <p className="contact-desc">
          Tell us what you&apos;re trying to solve — we&apos;ll tell you
          honestly whether it&apos;s a weekend build or a real system.
        </p>

        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-field">
            <label htmlFor="contact-name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="contact-name"
              required
              className="form-input"
              autoComplete="name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="contact-email"
              required
              className="form-input"
              autoComplete="email"
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              id="contact-message"
              required
              rows={5}
              className="form-input form-input--textarea"
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", marginTop: "4px" }}
          >
            Send message
          </button>
          {result && (
            <p
              className={`form-result ${isSuccess ? "form-result--success" : ""} ${isError ? "form-result--error" : ""}`}
            >
              {result}
            </p>
          )}
        </form>

        <div className="contact-fallback">
          <span className="contact-fallback-label">Or reach out directly</span>
          <a href="mailto:hello.projectwis@gmail.com">
            hello.projectwis@gmail.com
          </a>
          <a
            href="https://github.com/project-wis"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/project-wis
          </a>
          <a
            href="https://linkedin.com/company/project-wis"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/company/project-wis
          </a>
        </div>
      </div>
    </section>
  );
}
