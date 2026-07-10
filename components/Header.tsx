import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#" className="brand">
          <Logo
            style={{ height: "48px", width: "auto", borderRadius: "10px" }}
          />
          <span>PROJECT WIS</span>
        </a>
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
