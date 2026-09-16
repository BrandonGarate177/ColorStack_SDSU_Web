import Hero from '../components/ui/Hero.jsx'
import Section from '../components/ui/Section.jsx'
import { values } from '../content/index.js'
import './About.css'

const WHAT_WE_DO = [
  {
    title: 'Technical Workshops',
    desc: 'Hands-on sessions covering data structures, web dev, and interview-ready skills.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Peer Mentorship',
    desc: 'Upperclassmen and alumni pairing with newer members to guide their path.',
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
    title: 'Networking Events',
    desc: 'Socials and mixers that connect members with sponsors, alumni, and each other.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
        <path d="M10.5 10.5 5.7 7.2M13.5 10.5l4.8-3.3M10.5 13.5l-4.8 3.3M13.5 13.5l4.8 3.3" />
      </svg>
    ),
  },
  {
    title: 'Career Prep',
    desc: 'Resume reviews, mock interviews, and referrals to help members land roles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

function About() {
  return (
    <>
      <Hero variant="sm" heading="Who We Are" />

      <Section kicker="Our Mission" title="Why we exist">
        <div className="about-mission">
          <div className="about-mission-copy">
            <p>
              ColorStack SDSU is a student-led chapter dedicated to increasing the representation
              of Black and Latinx students in computer science and tech. We believe talent is
              everywhere, but opportunity isn't — so we build the community, skills, and
              connections that close that gap.
            </p>
            <p>
              From first-year students writing their first line of code to seniors interviewing
              at top companies, we meet members where they are and help them get where they're
              going — together.
            </p>
          </div>
          <div className="about-mission-photo placeholder-box">Chapter photo</div>
        </div>
      </Section>

      <Section title="What We Do">
        <div className="about-activities">
          {WHAT_WE_DO.map((activity) => (
            <div className="about-activity" key={activity.title}>
              <span className="about-activity-icon" aria-hidden="true">
                {activity.icon}
              </span>
              <div className="about-activity-text">
                <h3 className="about-activity-title">{activity.title}</h3>
                <p className="about-activity-desc">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Core Values" tinted>
        <div className="about-values">
          {values.map((value, index) => (
            <div className="about-value-card" key={value.id}>
              <p className="about-value-kicker">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="about-value-name">{value.name}</h3>
              <p className="about-value-desc">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default About
