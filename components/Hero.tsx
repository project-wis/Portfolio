export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left column — terminal command + description + CTA */}
        <div>
          <h1 className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-cmd">build</span>{" "}
            <span className="terminal-string">&quot;your idea&quot;</span>{" "}
            <span className="terminal-flag">--ship</span>
          </h1>
          <p className="hero-desc">
            Project WIS builds custom web platforms — LMS, ordering systems,
            review systems — architected from scratch, not assembled from
            templates.
          </p>
          <a className="btn-primary" href="mailto:hello.projectwis@gmail.com">
            Start a project →
          </a>
        </div>

        {/* Right column — file explorer window */}
        <div className="explorer" role="img" aria-label="Project WIS file explorer showing active projects">
          <div className="explorer-bar">
            <div className="explorer-dots">
              <span className="explorer-dot explorer-dot--red" />
              <span className="explorer-dot explorer-dot--yellow" />
              <span className="explorer-dot explorer-dot--green" />
            </div>
            <span className="explorer-title">project-wis — explorer</span>
          </div>
          <div className="explorer-body">
            <div className="file-folder">▾ project-wis/</div>
            <div className="file-row">
              <span>
                <span className="file-name">lms</span>
                <span className="file-ext--cyan">.system</span>
              </span>
              <span className="file-status">[live]</span>
            </div>
            <div className="file-row">
              <span>
                <span className="file-name">ordering</span>
                <span className="file-ext--cyan">.system</span>
              </span>
              <span className="file-status">[live]</span>
            </div>
            <div className="file-row">
              <span>
                <span className="file-name">review</span>
                <span className="file-ext--cyan">.system</span>
              </span>
              <span className="file-status">[building]</span>
            </div>
            <div className="file-row">
              <span>
                <span className="file-name">privachat</span>
                <span className="file-ext--amber">.app</span>
              </span>
              <span className="file-status">[prototype]</span>
            </div>
            <div className="file-row">
              <span>
                <span className="file-name">dphin</span>
                <span className="file-ext--amber">.health</span>
              </span>
              <span className="file-status">[prototype]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
