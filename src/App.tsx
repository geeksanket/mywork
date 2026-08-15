import { useEffect, useRef, useState } from 'react'
import kurukshetraLogo from '@/imports/image.png'

const hireContact = {
  name: 'Sanket Paradkar',
  title: 'Full Stack Developer · CS Student',
  email: 'sanketparadkar10@gmail.com',
  phone: '+91 9691544197',
  location: 'Mordongri, India',
  availability: 'Open to internships, collaborations & full-time roles',
  education: 'Computer Science (Student)',
  linkedin: 'https://www.linkedin.com/in/paradkarsanket/',
  github: 'https://github.com/geeksanket',
  stack: 'React, Node.js, Python, REST APIs, MongoDB, SQL',
}

const projects = [
  {
    id: 1,
    title: 'Project Kurukshetra',
    category: 'Team Project · Full Stack',
    year: '2025',
    description: 'Currently contributing as a team member on Project Kurukshetra — building and shipping features end to end.',
    img: '',
    color: '#c8f135',
    github: 'https://github.com/geeksanket',
  },
]

const skills = [
  'HTML & CSS', 'JavaScript', 'React', 'Node.js', 'Express',
  'Python', 'Git & GitHub', 'REST APIs', 'SQL', 'MongoDB',
  'Tailwind CSS', 'AI & Prompting', 'Problem Solving', 'Vibe Coding',
]

const marqueeItems = [
  'FULL STACK DEV', '·', 'WANNABE WEB DEV', '·', 'VIBE CODER', '·',
  'CS STUDENT', '·', 'AI ENTHUSIAST', '·', 'BUILDER', '·',
  'FULL STACK DEV', '·', 'WANNABE WEB DEV', '·', 'VIBE CODER', '·',
  'CS STUDENT', '·', 'AI ENTHUSIAST', '·', 'BUILDER', '·',
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/paradkarsanket/' },
  { label: 'GitHub', href: 'https://github.com/geeksanket' },
]

function HireMeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  const details: { label: string; value: string; href?: string }[] = [
    { label: 'Email', value: hireContact.email, href: `mailto:${hireContact.email}` },
    { label: 'Phone', value: hireContact.phone, href: `tel:${hireContact.phone.replace(/\s/g, '')}` },
    { label: 'Location', value: hireContact.location },
    { label: 'Role', value: hireContact.title },
    { label: 'Education', value: hireContact.education },
    { label: 'Availability', value: hireContact.availability },
    { label: 'Tech Stack', value: hireContact.stack },
  ]

  return (
    <div
      className="hire-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="hire-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hire-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="hire-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', color: '#c8f135', marginBottom: '0.75rem' }}>
          HIRE / CONTACT
        </p>
        <h2 id="hire-modal-title" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 400, color: '#f0ede6', margin: '0 0 0.35rem', letterSpacing: '-0.02em' }}>
          {hireContact.name}
        </h2>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: '#6b6b6b', margin: '0 0 2rem' }}>
          Details for recruiters & hiring teams
        </p>

        <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
          {details.map(({ label, value, href }) => (
            <div key={label} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', alignItems: 'start', borderBottom: '1px solid #1f1f1f', paddingBottom: '1rem' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#3a3a3a', paddingTop: '0.15rem' }}>
                {label}
              </span>
              {href ? (
                <a
                  href={href}
                  style={{ color: '#f0ede6', fontSize: '0.9rem', lineHeight: 1.5, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#c8f135')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#f0ede6')}
                >
                  {value}
                </a>
              ) : (
                <span style={{ color: '#f0ede6', fontSize: '0.9rem', lineHeight: 1.5 }}>{value}</span>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href={hireContact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#080808', background: '#c8f135', padding: '0.75rem 1.25rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            LINKEDIN ↗
          </a>
          <a
            href={hireContact.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#f0ede6', border: '1px solid #1f1f1f', padding: '0.75rem 1.25rem', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8f135'; e.currentTarget.style.color = '#c8f135' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1f1f1f'; e.currentTarget.style.color = '#f0ede6' }}
          >
            GITHUB ↗
          </a>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(hireContact.email)}
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#f0ede6', border: '1px solid #1f1f1f', padding: '0.75rem 1.25rem', background: 'transparent', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8f135'; e.currentTarget.style.color = '#c8f135' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1f1f1f'; e.currentTarget.style.color = '#f0ede6' }}
          >
            COPY EMAIL
          </button>
        </div>
      </div>
    </div>
  )
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [hireModalOpen, setHireModalOpen] = useState(false)
  useReveal()

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px'
        glowRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div style={{ background: '#080808', minHeight: '100vh', position: 'relative' }}>
      <div className="noise-overlay" />
      <div ref={glowRef} className="cursor-glow" style={{ left: -999, top: -999 }} />

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '1.5rem 2.5rem', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', borderBottom: '1px solid #111',
        backdropFilter: 'blur(12px)', background: 'rgba(8,8,8,0.7)',
      }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#c8f135' }}>
          SP/PORTFOLIO
        </span>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Work', 'About', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setHireModalOpen(true)}
          style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.1em',
            color: '#080808', background: '#c8f135', padding: '0.5rem 1.2rem', border: 'none',
            cursor: 'pointer', transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          HIRE ME
        </button>
      </nav>

      <HireMeModal open={hireModalOpen} onClose={() => setHireModalOpen(false)} />

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', padding: '0 2.5rem 5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px', pointerEvents: 'none',
        }} />
        <div className="animate-float" style={{
          position: 'absolute', top: '20%', right: '10%', width: 480, height: 480,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,241,53,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div className="animate-fade-in" style={{
          position: 'absolute', top: '12rem', right: '2.5rem',
          fontFamily: 'Fraunces, serif', fontSize: 'clamp(8rem, 20vw, 18rem)',
          fontWeight: 700, color: 'rgba(255,255,255,0.025)', lineHeight: 1,
          letterSpacing: '-0.04em', userSelect: 'none', animationDelay: '0.3s',
        }}>
          SP
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="animate-fade-up" style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem',
            letterSpacing: '0.14em', color: '#c8f135', marginBottom: '1.5rem', animationDelay: '0.1s',
          }}>
            WANNABE WEB DEV · FULL STACK · VIBE CODER
          </p>

          <h1 className="animate-fade-up" style={{
            fontFamily: 'Fraunces, serif', fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em',
            color: '#f0ede6', margin: 0, animationDelay: '0.2s',
          }}>
            <span>Sanket</span>
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Paradkar</em>
          </h1>

          <div className="animate-fade-up" style={{
            display: 'flex', alignItems: 'center', gap: '3rem',
            marginTop: '3rem', animationDelay: '0.4s',
          }}>
            <p style={{ maxWidth: 400, color: '#6b6b6b', fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', lineHeight: 1.7 }}>
              CS student interested in software development, AI, and building things that solve real problems.
              Still learning, still building — and slowly turning "I have no idea how this works" into "wait, I actually made this."
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexShrink: 0 }}>
              {[{ n: '1', l: 'Project' }, { n: '∞', l: 'Things broken' }, { n: '0→1', l: 'Builder' }].map(({ n, l }) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 600, color: '#f0ede6', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#6b6b6b', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-fade-in" style={{
          position: 'absolute', bottom: '2.5rem', right: '2.5rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem', animationDelay: '1s',
        }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#3a3a3a' }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #3a3a3a, transparent)' }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid #1f1f1f', borderBottom: '1px solid #1f1f1f', padding: '1rem 0', background: '#0d0d0d' }}>
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.18em',
              color: item === '·' ? '#c8f135' : '#3a3a3a', flexShrink: 0,
            }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── WORK ── */}
      <section id="work" style={{ padding: '8rem 2.5rem' }}>
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.14em', color: '#c8f135', marginBottom: '1rem' }}>
            <span className="line-accent" />SELECTED WORK
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: '#f0ede6', letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>
            Things I've <em style={{ fontStyle: 'italic', fontWeight: 600 }}>built</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <div key={p.id} className={`project-card reveal stagger-${i + 1}`} style={{ cursor: 'pointer' }}>
              <div style={{ aspectRatio: '4/3', position: 'relative', background: '#0f0d08', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="kurukshetra.png" alt="Project Kurukshetra logo"
                  style={{ width: '65%', height: '65%', objectFit: 'contain', display: 'block', transition: 'transform 0.6s ease', filter: 'drop-shadow(0 0 24px rgba(200,160,40,0.35))' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(200,160,40,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(200,160,40,0.7)', background: 'rgba(8,8,8,0.6)', padding: '0.3rem 0.6rem' }}>
                  {p.year}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.6rem', fontWeight: 400, color: '#f0ede6', margin: 0, letterSpacing: '-0.01em' }}>
                    {p.title}
                  </h3>
                </div>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: '#3a3a3a', marginBottom: '0.75rem' }}>
                  {p.category}
                </p>
                <p style={{ color: '#6b6b6b', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                  {p.description}
                </p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                    letterSpacing: '0.1em', color: '#6b6b6b', textDecoration: 'none',
                    padding: '0.5rem 1rem', border: '1px solid #1f1f1f',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#c8f135'; e.currentTarget.style.borderColor = '#c8f135' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#6b6b6b'; e.currentTarget.style.borderColor = '#1f1f1f' }}
                >
                  VIEW ON GITHUB ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{
        padding: '8rem 2.5rem', borderTop: '1px solid #1f1f1f',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center',
      }}>
        <div>
          <p className="reveal" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.14em', color: '#c8f135', marginBottom: '1rem' }}>
            <span className="line-accent" />ABOUT
          </p>
          <h2 className="reveal stagger-1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#f0ede6', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 2rem' }}>
            Breaking things to <em style={{ fontStyle: 'italic', fontWeight: 600 }}>understand</em> them
          </h2>
          <p className="reveal stagger-2" style={{ color: '#6b6b6b', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            I'm a Computer Science student interested in software development, AI, and building things that solve real problems.
            I enjoy learning by experimenting, breaking things, and occasionally figuring out why they broke.
          </p>
          <p className="reveal stagger-3" style={{ color: '#6b6b6b', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Still learning, still building, and slowly turning "I have no idea how this works" into "wait, I actually made this."
            Based in Mordongri, India — open to collaborations and opportunities.
          </p>

          <div className="reveal stagger-4" style={{ display: 'flex', gap: '1rem' }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#6b6b6b', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #1f1f1f', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#c8f135'; e.currentTarget.style.borderColor = '#c8f135' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6b6b6b'; e.currentTarget.style.borderColor = '#1f1f1f' }}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="reveal-left" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -24, left: -24, right: 24, bottom: 24, border: '1px solid #1f1f1f', pointerEvents: 'none' }} />
          <img
            src="f1.png"
            alt="Sanket working on code"
            style={{ width: '100%', aspectRatio: '5/6', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)', position: 'relative', zIndex: 1 }}
          />
          <div style={{ position: 'absolute', bottom: -1, left: -1, right: 0, height: '40%', background: 'linear-gradient(to top, #080808, transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 3, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#3a3a3a' }}>
            MORDONGRI, INDIA · OPEN TO OPPORTUNITIES
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: '8rem 2.5rem', borderTop: '1px solid #1f1f1f', background: '#0d0d0d' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          <div>
            <p className="reveal" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.14em', color: '#c8f135', marginBottom: '1rem' }}>
              <span className="line-accent" />SKILLS
            </p>
            <h2 className="reveal stagger-1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: '#f0ede6', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}>
              What I'm <em style={{ fontStyle: 'italic', fontWeight: 600 }}>learning</em> to wield
            </h2>
          </div>
          <div className="reveal stagger-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '3.5rem' }}>
            {skills.map((skill) => (
              <span key={skill} className="skill-pill" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#6b6b6b', padding: '0.6rem 1.2rem', cursor: 'default' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Journey timeline */}
        <div style={{ marginTop: '6rem' }}>
          <p className="reveal" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', color: '#3a3a3a', marginBottom: '3rem' }}>
            MY APPROACH
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1.25rem', left: 0, right: 0, height: '1px', background: '#1f1f1f' }} />
            {[
              { n: '01', title: 'Experiment', desc: 'Start by trying. Break things on purpose to understand how they actually work.' },
              { n: '02', title: 'Search', desc: 'Docs, forums, AI tools — find the why, not just the fix.' },
              { n: '03', title: 'Build', desc: 'Ship something real, even if imperfect. Done beats perfect.' },
              { n: '04', title: 'Iterate', desc: 'Go back in, refine, and make it less embarrassing than it was.' },
            ].map((step, i) => (
              <div key={step.n} className={`reveal stagger-${i + 1}`}>
                <div style={{ width: 10, height: 10, background: '#c8f135', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#3a3a3a', display: 'block', marginBottom: '0.5rem' }}>
                  {step.n}
                </span>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', fontWeight: 400, color: '#f0ede6', margin: '0 0 0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#6b6b6b', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '10rem 2.5rem', borderTop: '1px solid #1f1f1f', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,241,53,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <p className="reveal" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.14em', color: '#c8f135', marginBottom: '1.5rem' }}>
          <span className="line-accent" />GET IN TOUCH
        </p>
        <h2 className="reveal stagger-1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, color: '#f0ede6', letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 1.5rem' }}>
          Let's build
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 600 }}>something</em>
          <br />
          together
        </h2>
        <p className="reveal stagger-2" style={{ color: '#6b6b6b', fontSize: '1rem', maxWidth: 420, margin: '0 auto 3rem', lineHeight: 1.7 }}>
          Open to collaborations, team projects, and opportunities. Drop me a line — I'll get back to you.
        </p>

        <div className="reveal stagger-3" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="mailto:sanketparadkar10@gmail.com"
            className="magnetic-btn"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#080808', background: '#c8f135', padding: '1rem 2.5rem', display: 'inline-block', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            SEND AN EMAIL
          </a>
          <a
            href="https://www.linkedin.com/in/paradkarsanket/"
            target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#f0ede6', border: '1px solid #1f1f1f', padding: '1rem 2.5rem', display: 'inline-block', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8f135'; e.currentTarget.style.color = '#c8f135' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1f1f1f'; e.currentTarget.style.color = '#f0ede6' }}
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://github.com/geeksanket"
            target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.12em', color: '#f0ede6', border: '1px solid #1f1f1f', padding: '1rem 2.5rem', display: 'inline-block', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8f135'; e.currentTarget.style.color = '#c8f135' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1f1f1f'; e.currentTarget.style.color = '#f0ede6' }}
          >
            GITHUB ↗
          </a>
        </div>

        <p className="reveal stagger-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#3a3a3a', marginTop: '2rem' }}>
          sanketparadkar10@gmail.com
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '2rem 2.5rem', borderTop: '1px solid #1f1f1f', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#3a3a3a' }}>
          © 2025 SANKET PARADKAR
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#3a3a3a' }}>
          BUILT WITH CURIOSITY & CAFFEINE
        </span>
      </footer>
    </div>
  )
}
