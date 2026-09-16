import './Section.css'

/**
 * @param {{
 *   kicker?: string,
 *   title: string,
 *   tinted?: boolean,
 *   headerAction?: import('react').ReactNode,
 *   children: import('react').ReactNode,
 * }} props
 */
function Section({ kicker, title, tinted = false, headerAction, children }) {
  return (
    <section className={'section' + (tinted ? ' section--tinted' : '')}>
      <div className="container">
        <div className="section-header">
          <div>
            {kicker && <p className="section-kicker">{kicker}</p>}
            <h2 className="section-title">{title}</h2>
          </div>
          {headerAction && <div className="section-header-action">{headerAction}</div>}
        </div>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}

export default Section
