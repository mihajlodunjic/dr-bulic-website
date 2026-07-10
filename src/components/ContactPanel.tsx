import { site } from '../data/site'

type ContactPanelProps = {
  compact?: boolean
}

export function ContactPanel({ compact = false }: ContactPanelProps) {
  return (
    <section className={`contact-panel${compact ? ' contact-panel--compact' : ''}`} aria-labelledby="contact-panel-title">
      <div className="contact-panel__meta">
        <span className="mono">KONTAKT / NOVI PAZAR</span>
        <p>Za termin i dodatne informacije pozovite ordinaciju.</p>
      </div>
      <div className="contact-panel__main">
        <h2 id="contact-panel-title">Razgovor počinje pozivom.</h2>
        <a className="contact-panel__phone" href={site.phoneHref} aria-label={`Pozovite ordinaciju na ${site.phoneDisplay}`}>
          {site.phoneDisplay}
        </a>
      </div>
      <div className="contact-panel__actions">
        <a className="button button--light" href={site.phoneHref}>Pozovite ordinaciju</a>
        <a className="text-link text-link--light" href={site.instagramUrl} target="_blank" rel="noreferrer">
          Instagram {site.instagramLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
