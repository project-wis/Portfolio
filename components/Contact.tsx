export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box">
          <div
            className="section-eyebrow"
            style={{ justifyContent: "center", display: "flex" }}
          >
            Get in touch
          </div>
          <h2>Have an idea worth building?</h2>
          <p>
            Tell us what you&apos;re trying to solve — we&apos;ll tell you honestly
            whether it&apos;s a weekend build or a real system.
          </p>
          <div className="contact-links">
            <a
              className="btn-primary"
              href="mailto:hello.projectwis@gmail.com"
            >
              hello.projectwis@gmail.com
            </a>
            <a
              className="btn-secondary"
              href="https://github.com/project-wis"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
