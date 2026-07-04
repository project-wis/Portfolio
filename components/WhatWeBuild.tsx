const services = [
  {
    tag: "LMS",
    title: "Learning Platforms",
    description:
      "Course architecture, progress tracking, and content delivery — built to handle real student load, not just a demo.",
  },
  {
    tag: "ORDER",
    title: "Ordering & Menu Systems",
    description:
      "QR-based digital menus and order flows for restaurants and retail, with real-time updates on the kitchen side.",
  },
  {
    tag: "REVIEW",
    title: "Submission & Review Systems",
    description:
      "Journal and peer-review platforms — separate applications for public submission and internal review, connected by API.",
  },
  {
    tag: "CUSTOM",
    title: "Custom Web Applications",
    description:
      "Anything that doesn't fit a template: internal tools, dashboards, and full-stack products built from a blank page.",
  },
];

export default function WhatWeBuild() {
  return (
    <section id="build">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">What We Build</div>
          <h2>Four kinds of systems, one approach</h2>
          <p className="section-sub">
            Every project starts the same way — understand how the people using
            it actually work, then build the system around that.
          </p>
        </div>
        <div className="grid-4">
          {services.map((service) => (
            <div className="service-card" key={service.tag}>
              <div className="icon-tag">{service.tag}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
