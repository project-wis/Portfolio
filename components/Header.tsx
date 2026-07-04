export default function Header() {
  return (
    <header>
      <nav>
        <div className="brand">
          <span className="dot"></span>PROJECT WIS
        </div>
        <div className="navlinks">
          <a href="#build">What We Build</a>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello.projectwis@gmail.com">
          Start a project
        </a>
      </nav>
    </header>
  );
}
