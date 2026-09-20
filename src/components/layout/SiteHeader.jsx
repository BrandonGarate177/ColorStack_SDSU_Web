import { useEffect, useRef, useState } from 'react'
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

  // The panel is hidden by CSS at desktop widths; close it so the body scroll lock
  // doesn't stay stuck if the viewport is resized or rotated while it's open.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 900px)')
    function onChange(event) {
      if (event.matches) setMobileNavOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  // Lock scroll on <html>, not <body>: overflow on <body> makes it the scroll container
  // for the sticky header, which then scrolls away with the page.
  useEffect(() => {
    document.documentElement.style.overflow = mobileNavOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [mobileNavOpen])

  // The panel covers the header while open, so move focus into it and hand it back
  // to the burger on close.
  const burgerRef = useRef(null)
  const closeRef = useRef(null)
  const wasOpenRef = useRef(false)
  useEffect(() => {
    if (mobileNavOpen) closeRef.current?.focus()
    else if (wasOpenRef.current) burgerRef.current?.focus()
    wasOpenRef.current = mobileNavOpen
  }, [mobileNavOpen])

  return (
    <header className={'site-header' + (mobileNavOpen ? ' is-menu-open' : '')}>
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
            ref={burgerRef}
            type="button"
            className="site-header-burger"
            aria-label="Open menu"
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
        <div className="site-header-mobile-top">
          <button
            ref={closeRef}
            type="button"
            className="site-header-burger is-open"
            aria-label="Close menu"
            onClick={() => setMobileNavOpen(false)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav aria-label="Mobile">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) => 'site-header-mobile-link' + (isActive ? ' is-active' : '')}
              onClick={() => setMobileNavOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/join"
          className="btn btn-primary site-header-mobile-join"
          onClick={() => setMobileNavOpen(false)}
        >
          Join Us
        </NavLink>
      </div>
    </header>
  )
}

export default SiteHeader
