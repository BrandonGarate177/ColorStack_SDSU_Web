import { Link } from 'react-router-dom'
import { site } from '../../content/index.js'
import { SOCIAL_ICONS } from '../ui/socialIcons.jsx'
import './SiteFooter.css'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-grid">
        <div className="site-footer-col">
          <span className="site-footer-wordmark">{site.chapterName}</span>
          <p className="site-footer-desc">{site.tagline}</p>
        </div>

        <div className="site-footer-col">
          <h3 className="site-footer-heading">Pages</h3>
          <ul className="site-footer-list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer-col">
          <h3 className="site-footer-heading">Contact</h3>
          <ul className="site-footer-list">
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li className="site-footer-muted">{site.contact.affiliation}</li>
          </ul>
        </div>

        <div className="site-footer-col">
          <h3 className="site-footer-heading">Social</h3>
          <div className="site-footer-socials">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="site-footer-social-icon"
                aria-label={social.label}
              >
                {SOCIAL_ICONS[social.label]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
