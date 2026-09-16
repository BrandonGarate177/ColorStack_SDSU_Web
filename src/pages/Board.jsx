import { useEffect, useState } from 'react'
import Hero from '../components/ui/Hero.jsx'
import Section from '../components/ui/Section.jsx'
import { board } from '../content/index.js'
import './Board.css'

const CONTACT_LINKS = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'github', label: 'GitHub' },
  { key: 'email', label: 'Email' },
  { key: 'website', label: 'Portfolio' },
]

function contactHref(key, value) {
  return key === 'email' ? `mailto:${value}` : value
}

function Board() {
  const [selectedId, setSelectedId] = useState(null)
  const selected = board.find((member) => member.id === selectedId) ?? null

  useEffect(() => {
    if (!selected) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedId(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <>
      <Hero variant="sm" heading="Meet the Board" subtext="Who runs the chapter this year." />

      <Section title="2026–2027 E-Board">
        <div className="board-grid">
          {board.map((member) => (
            <article className="board-card" key={member.id}>
              <div
                className="board-card-header"
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onClick={() => setSelectedId(member.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedId(member.id)
                  }
                }}
              >
                <div className="board-card-photo placeholder-box">Photo</div>
                <div className="board-card-info">
                  <strong className="board-card-name">{member.name}</strong>
                  <span className="board-card-role">{member.role}</span>
                  <span className="board-card-meta">
                    {member.major}
                    {member.major && member.year && ' · '}
                    {member.year}
                  </span>
                </div>
                <span className="board-card-toggle" aria-hidden="true">
                  +
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {selected && (
        <div
          className="board-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="board-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="board-modal-close"
              type="button"
              aria-label="Close"
              onClick={() => setSelectedId(null)}
            >
              ×
            </button>
            <div className="board-modal-photo placeholder-box">Photo</div>
            <strong className="board-card-name">{selected.name}</strong>
            <span className="board-card-role">{selected.role}</span>
            <span className="board-card-meta">
              {selected.major}
              {selected.major && selected.year && ' · '}
              {selected.year}
            </span>
            <p className="board-card-bio">{selected.bio}</p>
            {CONTACT_LINKS.some(({ key }) => selected.contact?.[key]) && (
              <div className="board-card-contacts">
                {CONTACT_LINKS.filter(({ key }) => selected.contact?.[key]).map(
                  ({ key, label }) => (
                    <a
                      key={key}
                      className="board-card-link"
                      href={contactHref(key, selected.contact[key])}
                      target={key === 'email' ? undefined : '_blank'}
                      rel={key === 'email' ? undefined : 'noreferrer'}
                    >
                      {label} ↗
                    </a>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Board
