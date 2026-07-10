import { ServiceIndex } from '../components/ServiceIndex'
import { site } from '../data/site'

export function NotFoundPage() {
  return (
    <section className="not-found container">
      <div className="not-found__code" aria-hidden="true">404</div>
      <div className="not-found__copy">
        <p className="eyebrow">STRANICA NIJE PRONAĐENA</p>
        <h1>Ovaj dosije ne postoji.</h1>
        <p>Adresa je možda promenjena ili link nije potpun. Vratite se na početnu stranicu ili izaberite jednu od usluga.</p>
        <div className="not-found__actions">
          <a className="button" href="/">Početna stranica</a>
          <a className="phone-link" href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>
      </div>
      <div className="not-found__services">
        <ServiceIndex limit={3} />
      </div>
    </section>
  )
}
