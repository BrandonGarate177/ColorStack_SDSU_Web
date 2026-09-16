import './EventCard.css'

const TYPE_LABEL = {
  workshop: 'Workshop',
  social: 'Social',
  hackathon: 'Hackathon',
  speaker: 'Speaker',
}

function formatDate(dateStr) {
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

/**
 * @param {{ type: string, date: string, time?: string, title: string, description: string, location?: string }} props
 */
function EventCard({ type, date, time, title, description, location }) {
  return (
    <article className="event-card">
      <div className="event-card-meta">
        <span className="badge badge--navy">{TYPE_LABEL[type] ?? type}</span>
        <span className="event-card-date">{formatDate(date)}</span>
      </div>
      <h3 className="event-card-title">{title}</h3>
      <p className="event-card-desc">{description}</p>
      <p className="event-card-footer">
        {time && formatTime(time)}
        {time && location && ' · '}
        {location}
      </p>
    </article>
  )
}

export default EventCard
