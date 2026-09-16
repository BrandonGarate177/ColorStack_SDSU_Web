import { Link } from 'react-router-dom'
import HeroCarousel from './HeroCarousel.jsx'
import './Hero.css'

/**
 * @param {{
 *   variant: 'lg' | 'sm',
 *   eyebrow?: string,
 *   heading: string,
 *   subtext?: string,
 *   actions?: { label: string, href: string, kind?: 'primary' | 'secondary' }[],
 *   graphic?: boolean,
 *   slides?: { src?: string, alt?: string, label?: string }[],
 * }} props
 */
function Hero({ variant = 'sm', eyebrow, heading, subtext, actions = [], graphic = false, slides }) {
  return (
    <section className={`hero hero--${variant}`}>
      <div className="container hero-inner">
        <div className="hero-text">
          {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
          <h1 className="hero-heading">{heading}</h1>
          {subtext && <p className="hero-subtext">{subtext}</p>}
          {actions.length > 0 && (
            <div className="hero-actions">
              {actions.map((action) => {
                const className = `btn ${action.kind === 'secondary' ? 'btn-secondary' : 'btn-primary'}`
                const isExternal = /^https?:\/\//.test(action.href)
                return isExternal ? (
                  <a
                    key={action.label}
                    href={action.href}
                    className={className}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {action.label}
                  </a>
                ) : (
                  <Link key={action.label} to={action.href} className={className}>
                    {action.label}
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {graphic && (
          <div className="hero-graphic">
            <HeroCarousel slides={slides} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
