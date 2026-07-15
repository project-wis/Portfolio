"use client";

import { useState, useEffect } from "react";
import lmsScreenshot from "./assets/Macbook-Air-www.opcode.academy.png";
import orderScreenshot from "./assets/iPhone-14-PRO-MAX-shahiawadh.vercel.app.png";
import chatScreenshot from "./assets/Macbook-Air-privachat-ten.vercel.app.png";
import dphinScreenshot from "./assets/Macbook-Air-dphin.vercel.app.png";

const projects = [
  {
    title: "LMS Platform",
    status: "live" as const,
    statusLabel: "live",
    url: "https://www.opcode.academy",
    displayUrl: "lms.projectwis.app",
    description:
      "Production learning management system with microservices architecture, course builder, and progress tracking.",
    stack: "React · Node.js · Express · MongoDB · PostgreSQL",
    featured: true,
    tilt: "left" as const,
    image: lmsScreenshot,
    isMobile: false,
  },
  {
    title: "Digital Menu & Ordering System",
    status: "live" as const,
    statusLabel: "live",
    url: "https://shahiawadh.vercel.app/demo",
    displayUrl: "order.projectwis.app",
    description:
      "QR-based ordering system built for a restaurant — scan, browse, order, with real-time kitchen updates.",
    stack: "Next.js · Prisma · SQLite · Tailwind",
    featured: true,
    tilt: "right" as const,
    image: orderScreenshot,
    isMobile: true,
  },
  {
    title: "Journal & Peer Review System",
    status: "building" as const,
    statusLabel: "building",
    url: "",
    displayUrl: "review.projectwis.app",
    description:
      "Two connected applications — public submission site and internal review system — linked by API.",
    stack: "MERN · REST API · Webhooks",
    featured: false,
    tilt: null,
    image: null,
    isMobile: false,
  },
  {
    title: "PrivaChat",
    status: "prototype" as const,
    statusLabel: "prototype",
    url: "https://privachat-ten.vercel.app",
    displayUrl: "privachat.projectwis.app",
    description:
      "Real-time chat application with end-to-end encryption, messages secured client-side.",
    stack: "Socket.io · RSA/AES · Node.js",
    featured: false,
    tilt: null,
    image: chatScreenshot,
    isMobile: false,
  },
  {
    title: "DPHIN",
    status: "prototype" as const,
    statusLabel: "frontend prototype",
    url: "https://dphin.vercel.app",
    displayUrl: "dphin.projectwis.app",
    description:
      "Early-stage healthcare records PWA — installable, offline-capable patient data access.",
    stack: "React · PWA · Claude API",
    featured: false,
    tilt: null,
    image: dphinScreenshot,
    isMobile: false,
  },
];

type Project = (typeof projects)[number];

interface FrameProps {
  project: Project;
  onOpenPreview: (project: Project) => void;
}

function BrowserFrame({ project, onOpenPreview }: FrameProps) {
  const statusClass = "work-status--building";

  return (
    <article className="browser-frame" onClick={() => onOpenPreview(project)}>
      <div className="browser-bar">
        <div className="browser-dots">
          <span className="browser-dot browser-dot--red" />
          <span className="browser-dot browser-dot--yellow" />
          <span className="browser-dot browser-dot--green" />
        </div>
        <span className="browser-url">{project.displayUrl}</span>
      </div>
      <div className="api-console">
        <div className="api-line">
          <span className="api-comment">// POST /api/v1/submissions/submit</span>
        </div>
        <div className="api-line">
          {"{"}
        </div>
        <div className="api-line">
          {"  "}<span className="api-key">&quot;event&quot;</span>: <span className="api-val">&quot;submission.received&quot;</span>,
        </div>
        <div className="api-line">
          {"  "}<span className="api-key">&quot;status&quot;</span>: <span className="api-val">&quot;peer_review_pending&quot;</span>,
        </div>
        <div className="api-line">
          {"  "}<span className="api-key">&quot;reviewer_id&quot;</span>: <span className="api-val">&quot;rev_047x&quot;</span>,
        </div>
        <div className="api-line">
          {"  "}<span className="api-key">&quot;webhook&quot;</span>: <span className="api-success">&quot;delivered (200 OK)&quot;</span>
        </div>
        <div className="api-line">
          {"}"}
        </div>
      </div>
      <div className="work-info">
        <div className="work-title-row">
          <h3 className="work-title">{project.title}</h3>
          <span className={`work-status ${statusClass}`}>
            {project.statusLabel}
          </span>
        </div>
        <p className="work-desc">{project.description}</p>
        <span className="work-stack">{project.stack}</span>
      </div>
    </article>
  );
}

function DeviceFrame({ project, onOpenPreview }: FrameProps) {
  const statusClass =
    project.status === "live"
      ? "work-status--live"
      : project.status === "building"
        ? "work-status--building"
        : "";

  const tiltClass =
    project.tilt === "left"
      ? " device-card--tilt-left"
      : project.tilt === "right"
        ? " device-card--tilt-right"
        : "";

  return (
    <article className={`device-card${tiltClass}`} onClick={() => onOpenPreview(project)}>
      <div className={`device-viewport${project.isMobile ? " device-viewport--mobile" : ""}`}>
        {project.image && (
          <img
            src={project.image.src}
            alt={`${project.title} screenshot`}
            className="device-image"
          />
        )}
      </div>
      <div className="work-info">
        <div className="work-title-row">
          <h3 className="work-title">{project.title}</h3>
          <span className={`work-status ${statusClass}`}>
            {project.statusLabel}
          </span>
        </div>
        <p className="work-desc">{project.description}</p>
        <span className="work-stack">{project.stack}</span>
      </div>
    </article>
  );
}

export default function Work() {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [screenWidth, setScreenWidth] = useState(780);

  // Prevent scroll when modal is active
  useEffect(() => {
    if (previewProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewProject]);

  // Handle Resize of Macbook Screen container to compute scaling factor dynamically
  useEffect(() => {
    const handleResize = () => {
      const el = document.querySelector(".macbook-screen");
      if (el) {
        setScreenWidth(el.clientWidth);
      }
    };

    if (previewProject && !previewProject.isMobile && previewProject.url) {
      const timer = setTimeout(handleResize, 100);
      window.addEventListener("resize", handleResize);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [previewProject]);

  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  // Calculate Macbook Screen scale factor to display desktop orientation at 1280px wide
  const scale = screenWidth / 1280;
  const macbookIframeStyle = {
    width: "1280px",
    height: "800px",
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    border: "none",
    position: "absolute" as const,
    top: 0,
    left: 0,
  };

  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">// selected work</div>
          <h2>Systems shipped, not just designed</h2>
        </div>
        <div className="work-featured">
          {featured.map((project) =>
            project.image ? (
              <DeviceFrame
                key={project.title}
                project={project}
                onOpenPreview={setPreviewProject}
              />
            ) : (
              <BrowserFrame
                key={project.title}
                project={project}
                onOpenPreview={setPreviewProject}
              />
            )
          )}
        </div>
        <div className="work-secondary">
          {secondary.map((project) =>
            project.image ? (
              <DeviceFrame
                key={project.title}
                project={project}
                onOpenPreview={setPreviewProject}
              />
            ) : (
              <BrowserFrame
                key={project.title}
                project={project}
                onOpenPreview={setPreviewProject}
              />
            )
          )}
        </div>
      </div>

      {/* Interactive Simulator Modal */}
      {previewProject && (
        <div
          className="modal-overlay"
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setPreviewProject(null)}
            >
              ESC / Close
            </button>

            {/* Check if mobile mockup is requested */}
            {previewProject.isMobile ? (
              <div className="iphone-device">
                <div className="iphone-buttons">
                  <div className="iphone-button iphone-button--switch" />
                  <div className="iphone-button iphone-button--volume-up" />
                  <div className="iphone-button iphone-button--volume-down" />
                  <div className="iphone-button iphone-button--power" />
                </div>
                <div className="iphone-screen">
                  <div className="iphone-speaker" />
                  <div className="iphone-island" />
                  <div className="iphone-glare" />
                  <iframe
                    src={previewProject.url}
                    title={`${previewProject.title} mobile live preview`}
                    className="iphone-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  <div className="iphone-home-bar" />
                </div>
              </div>
            ) : (
              <div className="macbook-device">
                <div className="macbook-screen">
                  <div className="macbook-camera" />
                  {previewProject.url ? (
                    <iframe
                      src={previewProject.url}
                      title={`${previewProject.title} laptop live preview`}
                      className="macbook-iframe"
                      style={macbookIframeStyle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    /* Fallback styled console for building systems */
                    <div className="api-console" style={{ height: "100%" }}>
                      <div className="api-line">
                        <span className="api-comment">// Journal System is currently under construction.</span>
                      </div>
                      <div className="api-line">
                        <span className="api-comment">// Active Dev Server API Logger:</span>
                      </div>
                      <div className="api-line" style={{ marginTop: "12px" }}>
                        <span className="api-key">[18:34:02]</span> <span className="api-success">INFO</span> - Initializing Gateway service...
                      </div>
                      <div className="api-line">
                        <span className="api-key">[18:34:03]</span> <span className="api-success">INFO</span> - Webhook listeners registered.
                      </div>
                      <div className="api-line">
                        <span className="api-key">[18:34:05]</span> <span className="api-val">DEBUG</span> - MongoDB connected successfully.
                      </div>
                      <div className="api-line">
                        <span className="api-key">[18:35:10]</span> <span className="api-comment">/* Listening for public API submissions... */</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="macbook-base">
                  <div className="macbook-notch" />
                </div>
              </div>
            )}

            {/* Bottom info bar */}
            <div className="modal-info-bar">
              <span className="modal-info-title">
                {previewProject.title} — {previewProject.statusLabel}
              </span>
              {previewProject.url && (
                <a
                  href={previewProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-info-link"
                >
                  Open in New Tab ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
