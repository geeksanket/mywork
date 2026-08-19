const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Python",
  "REST APIs",
  "MongoDB",
  "SQL",
  "Git & GitHub",
  "Tailwind CSS",
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sanket Paradkar home">SP</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="button button-small" href="mailto:sanketparadkar10@gmail.com">Email me</a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Sanket Paradkar — Computer Science Student</p>
          {/* Much shorter H1 so it looks elegant and confident at a large font size */}
          <h1>From logic to interface.</h1>
          <p className="hero-copy">
            I am a developer bridging computer science theory with practical execution. I focus on designing clean database schemas, building responsive React applications.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">View my code</a>
            <a className="text-link" href="https://github.com/geeksanket" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Proof of work.</h2>
          </div>

          <article className="project project-text-only">
            <div className="project-details">
              <p className="eyebrow">Team collaboration — Full stack</p>
              <h3>Project Kurukshetra</h3>
              <p>
                A collaborative full-stack application. My role involves architecting backend endpoints, managing data flow, and building frontend features. It’s an ongoing exercise in writing maintainable code that other developers can actually read and build upon.
              </p>
              <dl className="project-facts">
                <div><dt>Role</dt><dd>Full-stack Contributor</dd></div>
                <div><dt>Focus</dt><dd>API design & UI integration</dd></div>
                <div><dt>Status</dt><dd>Active development</dd></div>
              </dl>
              <a className="text-link" href="https://geeksanket.github.io/websiteK/" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>
            </div>
          </article>
        </section>

        <section id="about" className="section split-section">
          <div className="section-heading">
            <p className="eyebrow">Background</p>
            <h2>Beyond the curriculum.</h2>
          </div>
          <div className="prose">
            <p>The classroom gave me the fundamentals of computer science; building projects taught me how to debug. I lean toward a practical, hands-on approach: I prefer to get a messy prototype working first, figure out where it breaks, and then refactor the architecture as I learn.</p>
            <p>Right now, I am exploring practical AI integrations and strengthening my backend engineering. I am actively looking for an internship or a junior role where I can contribute to a real, production-level codebase and learn from a team.</p>
            <a className="text-link" href="https://www.linkedin.com/in/paradkarsanket/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p className="eyebrow">Technical stack</p>
            <h2>The tools I reach for.</h2>
          </div>
          <ul className="skills-list" aria-label="Technical skills">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>

        <section className="contact-section">
          <p className="eyebrow">Get in touch</p>
          <h2>Looking for a junior developer?</h2>
          <p>I am currently open to internships, team collaborations, and entry-level roles. Let's talk about what we can build.</p>
          <a className="button" href="mailto:sanketparadkar10@gmail.com">sanketparadkar10@gmail.com</a>
        </section>
      </main>

      <footer className="site-footer">
        <span>&copy; 2026 Sanket Paradkar</span>
        <span>Madhya Pradesh, India</span>
      </footer>
    </div>
  )
}