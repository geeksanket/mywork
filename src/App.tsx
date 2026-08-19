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
        <a className="brand" href="#top" aria-label="Sanket Paradkar home">Sanket.</a>
        <nav aria-label="Main navigation" style={{ marginLeft: 'auto' }}>
          <a href="#work">Projects</a>
          <a href="#about">Context</a>
          <a href="#skills">Toolkit</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Sanket Paradkar — Computer Science Student</p>
          <h1>From logic to interface.</h1>
          <p className="hero-copy">
            I am a developer bridging computer science theory with practical execution. Based in Mordongri, I focus on designing clean database schemas, writing robust APIs, and building responsive React applications.
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
                <div><dt>Focus</dt><dd>Minimal & Classy Webpage Designing</dd></div>
                <div><dt>Status</dt><dd>Active development</dd></div>
              </dl>
              <a className="text-link" href="https://github.com/geeksanket/websiteK" target="_blank" rel="noopener noreferrer">Visit Page ↗</a>
            </div>
          </article>
        </section>

        <section id="about" className="section split-section">
          <div className="section-heading">
            <p className="eyebrow">Background</p>
            <h2>Beyond the curriculum.</h2>
          </div>
          <div className="prose">
            <p>I'm a Computer Science student who learns by building. I like taking ideas apart, turning them into working software, and figuring things out along the way.</p>
            <p>Currently exploring React, backend development, AI, and machine learning.</p>
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

        <section className="contact-section" style={{ paddingBottom: '4rem' }}>
          <p className="eyebrow">Get in touch</p>
          <h2>Looking for a junior developer?</h2>
          <p style={{ marginBottom: '2rem' }}>I am currently open to internships, team collaborations, and entry-level roles. Let's talk about what we can build.</p>
          
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
            <strong>Sanket Paradkar</strong>
            <a className="text-link" href="mailto:sanketparadkar10@gmail.com" style={{ textDecoration: 'none' }}>sanketparadkar10@gmail.com</a>
            <a className="text-link" href="tel:+919691544197" style={{ textDecoration: 'none' }}>+91 9691544197</a>
          </div>

          <div className="social-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/paradkarsanket/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'inherit' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="https://www.instagram.com/helosanket?igsi=bHBzZ213NXkxNTdn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'inherit' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/919691544197" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: 'inherit' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>&copy; 2026 Sanket Paradkar</span>
        <span>Mordongri, India</span>
      </footer>
    </div>
  )
}