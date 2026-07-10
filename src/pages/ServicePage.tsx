import { Breadcrumbs } from '../components/Breadcrumbs'
import { ContactPanel } from '../components/ContactPanel'
import { SectionLabel } from '../components/SectionLabel'
import { serviceBySlug, serviceHref, type Service } from '../data/services'

export function ServicePage({ service }: { service: Service }) {
  const relatedServices = service.related
    .map((slug) => serviceBySlug.get(slug))
    .filter((item): item is Service => Boolean(item))

  return (
    <article className="service-page">
      <header className="service-hero container">
        <Breadcrumbs items={[
          { label: 'Početna', href: '/' },
          { label: 'Usluge', href: '/usluge/' },
          { label: service.name },
        ]} />
        <div className="service-hero__grid">
          <div className="service-hero__index">
            <span className="service-hero__number">{service.number}</span>
            <span className="mono">DOSJE USLUGE / 06</span>
          </div>
          <div>
            <h1>{service.name}</h1>
            <p className="lead">{service.intro}</p>
          </div>
        </div>
      </header>

      <section className="service-section container" aria-labelledby="purpose-title">
        <SectionLabel number="A">ČEMU SLUŽI</SectionLabel>
        <div className="service-section__content">
          <h2 id="purpose-title">{service.purposeTitle}</h2>
          {service.purpose.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="service-signals" aria-labelledby="when-title">
        <div className="container service-signals__grid">
          <SectionLabel number="B" inverted>KADA SE JAVITI</SectionLabel>
          <div>
            <h2 id="when-title">{service.whenTitle}</h2>
            <ul>
              {service.when.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-section service-section--expect container" aria-labelledby="expect-title">
        <SectionLabel number="C">PREGLED I RAZGOVOR</SectionLabel>
        <div className="service-section__content">
          <h2 id="expect-title">Šta možete da očekujete</h2>
          {service.expectation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="clinical-note">
            <span className="mono">VAŽNO</span>
            <p>Konkretan plan određuje se nakon pregleda i ne može se pouzdano zameniti opštim informacijama sa sajta.</p>
          </div>
        </div>
      </section>

      <section className="faq-section container" aria-labelledby="faq-title">
        <div className="faq-section__heading">
          <SectionLabel number="D">PITANJA</SectionLabel>
          <h2 id="faq-title">Kratki odgovori pre posete</h2>
        </div>
        <div className="faq-list">
          {service.faqs.map((item, index) => (
            <details key={item.question}>
              <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <aside className="related-services container" aria-labelledby="related-title">
        <div>
          <span className="mono">POVEZANE TEME</span>
          <h2 id="related-title">Nastavite kroz atlas usluga.</h2>
        </div>
        <ul>
          {relatedServices.map((related) => (
            <li key={related.slug}>
              <span>{related.number}</span>
              <a href={serviceHref(related)}>{related.name} <span aria-hidden="true">→</span></a>
            </li>
          ))}
          <li>
            <span>01—06</span>
            <a href="/usluge/">Sve usluge <span aria-hidden="true">→</span></a>
          </li>
        </ul>
      </aside>

      <div className="container contact-section">
        <ContactPanel compact />
      </div>
    </article>
  )
}
