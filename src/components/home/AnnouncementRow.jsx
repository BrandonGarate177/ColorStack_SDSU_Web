import './AnnouncementRow.css'

const TAG_CLASS = {
  Pinned: 'badge--red',
  Notice: 'badge--navy',
}

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * @param {{ tag: string, title: string, body: string, date: string, href?: string | null }} props
 */
function AnnouncementRow({ tag, title, body, date, href }) {
  return (
    <article className="announcement-row">
      <span className={'badge ' + (TAG_CLASS[tag] ?? 'badge--navy')}>{tag}</span>
      <div className="announcement-content">
        <h3 className="announcement-title">{title}</h3>
        <p className="announcement-body">{body}</p>
        <p className="announcement-meta">
          Posted {formatDate(date)}
          {href && (
            <>
              {' · '}
              <a href={href} className="announcement-link">
                Learn more →
              </a>
            </>
          )}
        </p>
      </div>
    </article>
  )
}

export default AnnouncementRow
