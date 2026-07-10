const services = [
  {
    tag: "LMS",
    title: "Learning Platforms",
    description:
      "Course architecture, progress tracking, content delivery built for real student load.",
  },
  {
    tag: "ORDER",
    title: "Ordering & Menu Systems",
    description:
      "QR-based digital menus and order flows with real-time kitchen-side updates.",
  },
  {
    tag: "REVIEW",
    title: "Submission & Review Systems",
    description:
      "Journal and peer-review platforms, separate public/internal applications connected by API.",
  },
  {
    tag: "CUSTOM",
    title: "Custom Web Applications",
    description:
      "Internal tools, dashboards, full-stack products built from a blank page.",
  },
];

export default function WhatWeBuild() {
  return (
    <section id="build">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">// what we build</div>
          <h2>Four kinds of systems, one approach</h2>
        </div>
        <div className="build-list">
          {services.map((service) => (
            <div className="build-row" key={service.tag}>
              <span className="build-tag">{service.tag}</span>
              <span className="build-title">{service.title}</span>
              <span className="build-desc">{service.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
