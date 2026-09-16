import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { site } from '../../content/index.js'
import './SiteHeader.css'

function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()
  const [lastPathname, setLastPathname] = useState(location.pathname)

  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setMobileNavOpen(false)
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setMobileNavOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileNavOpen])

  return (
    <header className="site-header">
      <div className="site-header-bar container">
        <NavLink to="/" className="site-header-brand">
          <span className="site-header-logo" aria-hidden="true">
            <img src="/logo.png" alt="" className="site-header-logo-img" />
          </span>
          <span className="site-header-wordmark">{site.chapterName}</span>
        </NavLink>

        <nav className="site-header-nav" aria-label="Primary">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) => 'site-header-link' + (isActive ? ' is-active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header-actions">
          <NavLink to="/join" className="btn btn-primary site-header-join">
            Join Us
          </NavLink>
          <button
            type="button"
            className="site-header-burger"
            aria-label="Toggle menu"
            aria-expanded={mobileNavOpen}
            aria-controls="site-header-mobile-panel"
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="site-header-mobile-panel"
        className={'site-header-mobile-panel' + (mobileNavOpen ? ' is-open' : '')}
      >
        <nav aria-label="Mobile">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) => 'site-header-mobile-link' + (isActive ? ' is-active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
