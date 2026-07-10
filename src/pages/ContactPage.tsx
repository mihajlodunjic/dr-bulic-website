import { Breadcrumbs } from '../components/Breadcrumbs'
import { SectionLabel } from '../components/SectionLabel'
import { site } from '../data/site'

export function ContactPage() {
  return (
    <>
      <header className="contact-hero container">
        <Breadcrumbs items={[{ label: 'Početna', href: '/' }, { label: 'Kontakt' }]} />
        <div className="contact-hero__grid">
          <SectionLabel number="K">KONTAKT</SectionLabel>
          <div>
            <h1>Za termin, pozovite ordinaciju.</h1>
            <p className="lead">Direktan telefonski razgovor je najpouzdaniji način da zakažete pregled i dobijete aktuelne informacije.</p>
          </div>
        </div>
      </header>

      <section className="contact-directory" aria-labelledby="directory-title">
        <div className="container">
          <h2 id="directory-title" className="visually-hidden">Kontakt imenik</h2>
          <div className="contact-directory__primary">
            <span className="mono">TELEFON / ZAKAZIVANJE</span>
            <a href={site.phoneHref} aria-label={`Pozovite ordinaciju na ${site.phoneDisplay}`}>{site.phoneDisplay}</a>
          </div>
          <dl>
            <div><dt>Ordinacija</dt><dd>{site.name}</dd></div>
            <div><dt>Delatnost</dt><dd>{site.businessType}</dd></div>
            <div><dt>Grad</dt><dd>{site.city}</dd></div>
            <div>
              <dt>Instagram</dt>
              <dd><a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramLabel} ↗</a></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="contact-note container" aria-labelledby="contact-note-title">
        <SectionLabel number="01">PRE POZIVA</SectionLabel>
        <div>
          <h2 id="contact-note-title">Pripremite kratku informaciju o razlogu dolaska.</h2>
          <p>
            Recite koju tegobu ili pitanje imate i koliko dugo ga primećujete. Za medicinsku procenu i konkretan plan potreban je pregled.
          </p>
          <a className="button" href={site.phoneHref}>Pozovite {site.phoneDisplay}</a>
        </div>
        <aside className="margin-note">
          <span className="mono">DOSTUPNI PODACI</span>
          <p>Puna adresa i radno vreme nisu objavljeni jer nisu potvrđeni. Aktuelne informacije zatražite telefonom.</p>
        </aside>
      </section>
    </>
  )
}
