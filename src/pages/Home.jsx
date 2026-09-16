import { Link } from 'react-router-dom'
import Hero from '../components/ui/Hero.jsx'
import Section from '../components/ui/Section.jsx'
import AnnouncementRow from '../components/home/AnnouncementRow.jsx'
import EventCard from '../components/home/EventCard.jsx'
import { announcements, events, sponsors } from '../content/index.js'
import './Home.css'

const WHO_WE_ARE_PILLARS = [
  {
    title: 'Mentorship',
    desc: "Guidance from peers and mentors who've been where you are.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Technical Workshops',
    desc: 'Hands-on sessions that build real, job-ready skills.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Career Development',
    desc: 'Resources and support to help you break into tech.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

function Home() {
  const visibleAnnouncements = [...announcements]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3)

  const today = new Date().toISOString().slice(0, 10)
  const upcomingEvents = [...events]
    .filter((event) => event.date >= today)
    .sort((a, b) => (a.date > b.date ? 1 : -1))
    .slice(0, 3)

  return (
    <>
      <Hero
        variant="lg"
        heading="ColorStack at San Diego State University"
        subtext="A community for Black and Latinx students in computer science — helping each other get in, get better, and get hired."
        actions={[
          { label: 'Join the chapter', href: '/join', kind: 'primary' },
          { label: 'See events', href: '/events', kind: 'secondary' },
        ]}
        graphic
        slides={[
          { src: '/logo.png', alt: 'ColorStack SDSU logo' },
          { label: 'Hero image 2' },
          { label: 'Hero image 3' },
        ]}
      />

      {visibleAnnouncements.length > 0 && (
        <Section title="Announcements" tinted>
          <div className="home-announcements">
            {visibleAnnouncements.map((item) => (
              <AnnouncementRow key={item.id} {...item} />
            ))}
          </div>
        </Section>
      )}

      <Section
        title="Upcoming Events"
        headerAction={
          <Link to="/events" className="btn btn-ghost">
            View all →
          </Link>
        }
      >
        {upcomingEvents.length > 0 ? (
          <div className="home-events-grid">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="home-events-empty placeholder-box">No upcoming events yet — check back soon.</div>
        )}
      </Section>

      <Section kicker="Our Mission" title="Who We Are" tinted>
        <div className="who-we-are">
          <p className="who-we-are-lead">
            ColorStack SDSU is a student-led chapter dedicated to increasing the representation
            of Black and Latinx students in computer science and tech.
          </p>

          <div className="who-we-are-grid">
            {WHO_WE_ARE_PILLARS.map((pillar) => (
              <div className="who-we-are-pillar" key={pillar.title}>
                <span className="who-we-are-icon" aria-hidden="true">
                  {pillar.icon}
                </span>
                <h3 className="who-we-are-pillar-title">{pillar.title}</h3>
                <p className="who-we-are-pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <p className="who-we-are-closing">
            Creating a support system where students can grow together, share resources, and see
            themselves succeed in tech.
          </p>
        </div>
      </Section>

      <Section title="Sponsors &amp; Partners">
        <div className="home-sponsors-marquee">
          <div className="home-sponsors-track">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={`${sponsor.id}-${index}`} className="home-sponsor-slot">
                <img src={sponsor.logo} alt={sponsor.name} className="home-sponsor-logo" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

export default Home
