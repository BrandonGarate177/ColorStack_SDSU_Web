import Hero from '../components/ui/Hero.jsx'
import Section from '../components/ui/Section.jsx'
import { SOCIAL_ICONS } from '../components/ui/socialIcons.jsx'
import { site, contacts, faq, join } from '../content/index.js'
import './Join.css'

const DISCORD_URL = site.socials.find((social) => social.label === 'Discord')?.href ?? '#'

// "Ways to Join" CTA cards are content-driven (join.json), but their action
// links depend on values only known at runtime (e.g. DISCORD_URL is derived
// from site.json), so each card's actions are keyed by the matching cta.id.
const CTA_ACTIONS = {
  discord: [{ label: 'Join the Discord', href: DISCORD_URL, kind: 'primary' }],
  apply: [
    { label: 'Start Application', href: join.applyUrl, kind: 'primary' },
    { label: 'View Requirements', href: join.requirementsUrl, kind: 'secondary' },
  ],
}

/** Icon set for the membership-benefits tiles, keyed by `join.json`'s `icon` field. */
const BENEFIT_ICONS = {
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  userCheck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  ),
  fileText: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  bookOpen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  messageCircle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  dollarSign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <polyline points="22 6 12 13 2 6" />
    </svg>
  ),
}

/** A single card in the "SDSU Chapter vs. National ColorStack" comparison. */
function ComparisonCard({ kicker, title, desc }) {
  return (
    <div className="join-step-card">
      <span className="join-step-kicker">{kicker}</span>
      <h3 className="join-step-title">{title}</h3>
      <p className="join-step-desc">{desc}</p>
    </div>
  )
}

/** A membership-benefits card showing a scannable grid of icon + title + blurb tiles. */
function BenefitsCard({ kicker, title, items }) {
  return (
    <div className="join-benefits-card">
      <span className="join-benefits-kicker">{kicker}</span>
      <h3 className="join-benefits-title">{title}</h3>
      <div className="join-benefits-list">
        {items.map((item) => (
          <div className="join-benefit-tile" key={item.title}>
            <span className="join-benefit-icon" aria-hidden="true">
              {BENEFIT_ICONS[item.icon]}
            </span>
            <div className="join-benefit-copy">
              <h4 className="join-benefit-title">{item.title}</h4>
              <p className="join-benefit-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * A "Ways to Join" call-to-action card. `actions` follows the same shape
 * used by Hero (`{ label, href, kind }`), rendered as external links since
 * every current action here points off-site.
 */
function CtaCard({ kicker, title, desc, actions }) {
  return (
    <div className="join-cta-card">
      <span className="join-cta-kicker">{kicker}</span>
      <h3 className="join-cta-title">{title}</h3>
      <p className="join-cta-desc">{desc}</p>
      <div className="join-cta-actions">
        {actions.map((action) => (
          <a
            key={action.label}
            className={`btn ${action.kind === 'secondary' ? 'btn-secondary' : 'btn-primary'}`}
            href={action.href}
            target="_blank"
            rel="noreferrer"
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  )
}

/** A single point-of-contact card (role, name, and mailto link). */
function ContactCard({ role, name, email }) {
  return (
    <div className="join-contact-card">
      <strong className="join-contact-role">
        {role} — {name}
      </strong>
      <a className="join-contact-email" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  )
}

/** A collapsible FAQ entry. */
function FaqItem({ q, a, defaultOpen }) {
  return (
    <details className="join-faq-item" open={defaultOpen}>
      <summary className="join-faq-question">
        <span>{q}</span>
        <span className="join-faq-icon" aria-hidden="true" />
      </summary>
      <p className="join-faq-answer">{a}</p>
    </details>
  )
}

function Join() {
  return (
    <>
      <Hero
        variant="sm"
        heading="Get Involved"
        subtext="Join the SDSU chapter Discord, then apply to ColorStack nationally to become a member."
        actions={[
          { label: 'Join the Discord', href: DISCORD_URL, kind: 'primary' },
          { label: 'Apply to ColorStack', href: join.applyUrl, kind: 'secondary' },
        ]}
      />

      <Section kicker="Know the Difference" title="SDSU Chapter vs. National ColorStack">
        <div className="join-steps">
          {join.orgs.map((org) => (
            <ComparisonCard key={org.title} {...org} />
          ))}
        </div>
      </Section>

      <Section kicker="Why Join" title="Why you should join us">
        <p className="join-why-intro">
          Joining ColorStack means joining two communities at once — a chapter that has your
          back day-to-day at SDSU, and a national network that opens doors across the industry.
          Here's what membership actually gets you.
        </p>
        <div className="join-benefits-grid">
          {join.benefits.map((group) => (
            <BenefitsCard key={group.title} {...group} />
          ))}
        </div>
      </Section>

      <Section title="Ways to Join" tinted>
        <div className="join-ways-row">
          <div className="join-ways-col">
            {join.ctas.map((cta) => (
              <CtaCard key={cta.id} {...cta} actions={CTA_ACTIONS[cta.id]} />
            ))}
          </div>

          <div className="join-contact-col">
            <h2 className="join-contact-heading">Points of Contact</h2>
            {contacts.map((contact) => (
              <ContactCard key={contact.role} {...contact} />
            ))}

            <div className="join-contact-social">
              <span className="join-contact-social-kicker">Social</span>
              <div className="join-contact-social-icons">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="join-contact-social-icon"
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {SOCIAL_ICONS[social.label]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="FAQ">
        <div className="join-faq-list">
          {faq.map((item, index) => (
            <FaqItem key={item.q} {...item} defaultOpen={index === 0} />
          ))}
        </div>
      </Section>
    </>
  )
}

export default Join
