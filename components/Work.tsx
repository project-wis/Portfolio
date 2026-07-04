const projects = [
  {
    title: "LMS Platform",
    status: "● Live in production",
    description:
      "Full learning management system with course architecture split across content and relational data, dark-themed learning UI, and progress tracking.",
    stack: "React · Node.js · MongoDB · PostgreSQL",
  },
  {
    title: "Digital Menu & Ordering",
    status: "● Deployed",
    description:
      "QR-based ordering system for a royal Awadhi restaurant — Mughal-inspired theme, built for real table-side use.",
    stack: "Next.js · Prisma · SQLite · Tailwind",
  },
  {
    title: "Journal & Peer Review System",
    status: "● In development",
    description:
      "Two connected applications — a public submission site and an internal review system — linked by API and webhooks.",
    stack: "MERN · REST API · Webhooks",
  },
  {
    title: "PrivaChat",
    status: "● Prototype",
    description:
      "Real-time chat application with end-to-end encryption — messages secured client-side before they ever touch the server.",
    stack: "Socket.io · RSA/AES · Node.js",
  },
  {
    title: "DPHIN",
    status: "● Frontend prototype",
    description:
      "Early-stage healthcare records PWA — patient data access designed as an installable, offline-capable web app.",
    stack: "React · PWA · Claude API",
  },
];

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">Selected Work</div>
          <h2>Systems shipped, not just designed</h2>
        </div>
        <div className="work-list">
          {projects.map((project) => (
            <div className="work-item" key={project.title}>
              <div className="wtitle">
                {project.title}
                <span className="status">{project.status}</span>
              </div>
              <div className="wdesc">{project.description}</div>
              <div className="wstack">{project.stack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
