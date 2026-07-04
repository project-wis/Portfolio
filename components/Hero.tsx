export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="eyebrow">Web &amp; Internet Solutions</div>
          <h1>
            We turn raw ideas into{" "}
            <span className="accent">working systems.</span>
          </h1>
          <p className="lede">
            Project WIS designs and builds custom platforms — learning systems,
            ordering systems, review systems — end to end, from first sketch to
            deployed product.
          </p>
          <div className="cta-row">
            <a className="btn-primary" href="mailto:hello.projectwis@gmail.com">
              hello.projectwis@gmail.com
            </a>
            <a className="btn-secondary" href="#work">
              View the work →
            </a>
          </div>
        </div>
        <div className="diagram-box">
          <div className="pipeline">
            <div className="pipe-node">
              <span className="num">01</span>
              <div className="box">
                <span className="tag">&gt;</span>Idea — scope the real problem
              </div>
            </div>
            <div className="pipe-connector"></div>
            <div className="pipe-node">
              <span className="num">02</span>
              <div className="box">
                <span className="tag">&gt;</span>Design — data model &amp; flows
              </div>
            </div>
            <div className="pipe-connector"></div>
            <div className="pipe-node">
              <span className="num">03</span>
              <div className="box">
                <span className="tag">&gt;</span>Build — full-stack
                implementation
              </div>
            </div>
            <div className="pipe-connector"></div>
            <div className="pipe-node">
              <span className="num">04</span>
              <div className="box">
                <span className="tag">&gt;</span>Ship — deployed &amp; handed off
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
