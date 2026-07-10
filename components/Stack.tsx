const layers = [
  { label: "Frontend", name: "Interface layer", tech: "React · Next.js · Tailwind" },
  { label: "Backend", name: "Application layer", tech: "Node.js · Express" },
  { label: "Database", name: "Data layer", tech: "MongoDB · PostgreSQL · Prisma" },
  { label: "Realtime", name: "Live features", tech: "Socket.io" },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">// the stack</div>
          <h2>What&apos;s under the hood</h2>
          <p className="section-sub">
            The same core stack, adapted to what each project actually needs.
          </p>
        </div>
        <div className="stack-layers">
          {layers.map((layer) => (
            <div className="layer" key={layer.label}>
              <div>
                <span className="layer-label">{layer.label}</span>
                <div className="layer-name">{layer.name}</div>
              </div>
              <div className="layer-tech">{layer.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
