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
          <p className="eyebrow">Sanket Paradkar - Full-stack developer</p>
          <h1>Full Stack Developer</h1>
          <p className="hero-copy">
            I am a Computer Science student based in India. I work with React, Node.js, Python, and databases to turn ideas into working products.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">See my work</a>
            <a className="text-link" href="https://github.com/geeksanket" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>One project, shown clearly.</h2>
          </div>

          <article className="project project-text-only">
            <div className="project-details">
              <p className="eyebrow">Team project - Full stack</p>
              <h3>Project Kurukshetra</h3>
              <p>
                I contribute to Project Kurukshetra, working with a team to build useful web features.
              </p>
              <dl className="project-facts">
                <div><dt>Role</dt><dd>Team member</dd></div>
                <div><dt>Focus</dt><dd>Frontend and backend features</dd></div>
                <div><dt>Status</dt><dd>In progress</dd></div>
              </dl>
              <a className="text-link" href="https://github.com/geeksanket" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>
            </div>
          </article>
        </section>

        <section id="about" className="section split-section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Learning by building.</h2>
          </div>
          <div className="prose">
            <p>I am a Computer Science student interested in software development and practical AI tools. I like making small, working versions first, then improving them with feedback.</p>
            <p>I am looking for internships, team projects, and entry-level software roles where I can keep learning and contribute useful work.</p>
            <a className="text-link" href="https://www.linkedin.com/in/paradkarsanket/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p className="eyebrow">Tools I use</p>
            <h2>Current toolkit.</h2>
          </div>
          <ul className="skills-list" aria-label="Technical skills">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>

        <section className="contact-section">
          <p className="eyebrow">Get in touch</p>
          <h2>Have a project or role in mind?</h2>
          <p>Send me an email. I am open to internships, collaborations, and full-time opportunities.</p>
          <a className="button" href="mailto:sanketparadkar10@gmail.com">sanketparadkar10@gmail.com</a>
        </section>
      </main>

      <footer className="site-footer">
        <span>(c) 2025 Sanket Paradkar</span>
        <span>Mordongri, India</span>
      </footer>
    </div>
  )
}
