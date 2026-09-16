import { useMemo, useState } from 'react'
import Hero from '../components/ui/Hero.jsx'
import Section from '../components/ui/Section.jsx'
import { events } from '../content/index.js'
import './Events.css'

const TYPE_LABEL = {
  workshop: 'Workshop',
  social: 'Social',
  hackathon: 'Hackathon',
  speaker: 'Speaker',
}

const TYPE_FILTERS = ['all', 'workshop', 'social', 'hackathon', 'speaker']

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function toISO(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function formatMonthLabel(date) {
  return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
}

function formatDayLabel(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  })
}

function formatTime(time) {
  const [hours, minutes] = time.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const hour12 = ((hours + 11) % 12) + 1
  return `${hour12}:${String(minutes).padStart(2, '0')} ${period}`
}

function buildCalendarCells(viewDate) {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstOfMonth = new Date(year, month, 1)
  const startWeekday = (firstOfMonth.getDay() + 6) % 7 // Monday = 0
  const start = new Date(year, month, 1 - startWeekday)

  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
    return { date, iso: toISO(date), inMonth: date.getMonth() === month }
  })
}

function Events() {
  const today = new Date()
  const todayIso = toISO(today)
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [activeType, setActiveType] = useState('all')

  const cells = useMemo(() => buildCalendarCells(viewDate), [viewDate])

  const filteredEvents = useMemo(
    () => events.filter((event) => activeType === 'all' || event.type === activeType),
    [activeType],
  )

  const eventsByDate = useMemo(() => {
    const map = new Map()
    filteredEvents.forEach((event) => {
      const list = map.get(event.date) ?? []
      list.push(event)
      map.set(event.date, list)
    })
    return map
  }, [filteredEvents])

  const monthEvents = useMemo(
    () =>
      [...filteredEvents]
        .filter((event) => cells.some((cell) => cell.inMonth && cell.iso === event.date))
        .sort((a, b) => (a.date > b.date ? 1 : -1)),
    [filteredEvents, cells],
  )

  const pastEvents = useMemo(
    () =>
      [...filteredEvents]
        .filter((event) => event.date < todayIso)
        .sort((a, b) => (a.date < b.date ? 1 : -1)),
    [filteredEvents, todayIso],
  )

  function changeMonth(delta) {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1))
  }

  return (
    <>
      <Hero variant="sm" heading="What's Happening" subtext="Everything on the chapter calendar." />

      <Section
        title={formatMonthLabel(viewDate)}
        headerAction={
          <div className="events-month-nav">
            <button type="button" className="events-nav-btn" onClick={() => changeMonth(-1)} aria-label="Previous month">
              ‹
            </button>
            <button type="button" className="events-nav-btn" onClick={() => changeMonth(1)} aria-label="Next month">
              ›
            </button>
          </div>
        }
      >
        <div className="events-filters">
          {TYPE_FILTERS.map((type) => (
            <button
              key={type}
              type="button"
              className={'events-filter-chip' + (activeType === type ? ' is-active' : '')}
              onClick={() => setActiveType(type)}
            >
              {type === 'all' ? 'All' : TYPE_LABEL[type]}
            </button>
          ))}
        </div>

        <div className="events-calendar">
          {WEEKDAYS.map((day) => (
            <div className="events-calendar-heading" key={day}>
              {day}
            </div>
          ))}
          {cells.map((cell) => {
            const dayEvents = eventsByDate.get(cell.iso) ?? []
            return (
              <div
                key={cell.iso}
                className={
                  'events-calendar-cell' +
                  (cell.inMonth ? '' : ' is-dim') +
                  (cell.iso === todayIso ? ' is-today' : '')
                }
              >
                <span className="events-calendar-daynum">{cell.date.getDate()}</span>
                {dayEvents.map((event) => (
                  <span
                    key={event.id}
                    className={`events-calendar-chip events-calendar-chip--${event.type}`}
                    title={event.title}
                  >
                    {event.title}
                  </span>
                ))}
              </div>
            )
          })}
        </div>

        <div className="events-legend">
          {TYPE_FILTERS.filter((type) => type !== 'all').map((type) => (
            <span className="events-legend-item" key={type}>
              <span className={`events-legend-dot events-legend-dot--${type}`} aria-hidden="true" />
              {TYPE_LABEL[type]}
            </span>
          ))}
        </div>
      </Section>

      <Section title="This Month, In Detail">
        {monthEvents.length > 0 ? (
          <div className="events-detail-list">
            {monthEvents.map((event) => {
              const eventDate = new Date(`${event.date}T00:00:00`)
              return (
                <div className="events-detail-row" key={event.id}>
                  <div className="events-detail-date">
                    <span className="events-detail-month">
                      {eventDate.toLocaleDateString(undefined, { month: 'short' }).toUpperCase()}
                    </span>
                    <span className="events-detail-day">{eventDate.getDate()}</span>
                  </div>
                  <div className="events-detail-info">
                    <h3 className="events-detail-title">{event.title}</h3>
                    <p className="events-detail-desc">{event.description}</p>
                    <div className="events-detail-meta">
                      <span className="badge badge--navy">{TYPE_LABEL[event.type] ?? event.type}</span>
                      <span className="events-detail-when">
                        {event.time && formatTime(event.time)}
                        {event.time && event.location && ' · '}
                        {event.location}
                      </span>
                    </div>
                  </div>
                  {event.rsvp ? (
                    <a
                      className="btn btn-secondary events-detail-rsvp"
                      href={event.rsvp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      RSVP
                    </a>
                  ) : (
                    <span className="events-detail-rsvp-soon">RSVP soon</span>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <p className="placeholder-box" style={{ minHeight: 96 }}>
            No events match this filter for {formatMonthLabel(viewDate)}.
          </p>
        )}
      </Section>

      <Section title="Past Events" tinted>
        {pastEvents.length > 0 ? (
          <div className="events-past-list">
            {pastEvents.map((event) => (
              <div className="events-past-row" key={event.id}>
                <span>
                  {event.title} · {TYPE_LABEL[event.type] ?? event.type}
                </span>
                <span className="events-past-date">{formatDayLabel(event.date)}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="placeholder-box" style={{ minHeight: 80 }}>
            No past events yet.
          </p>
        )}
      </Section>

      <Section title="Gallery">
        <div className="events-gallery">
          {Array.from({ length: 8 }, (_, i) => (
            <div className="events-gallery-photo placeholder-box" key={i}>
              Photo
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Events
