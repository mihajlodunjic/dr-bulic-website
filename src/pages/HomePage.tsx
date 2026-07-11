import { ContactPanel } from '../components/ContactPanel'
import { ProcedureSteps } from '../components/ProcedureSteps'
import { SectionLabel } from '../components/SectionLabel'
import { ServiceIndex } from '../components/ServiceIndex'
import { serviceHref, services } from '../data/services'
import { site } from '../data/site'

export function HomePage() {
  return (
    <>
      <section className="hero container" aria-labelledby="home-title">
        <div className="hero__main">
          <p className="eyebrow">STOMATOLOŠKA ORDINACIJA / NOVI PAZAR</p>
          <h1 id="home-title">Jasan put od pregleda do narednog koraka.</h1>
          <p className="hero__intro">
            Stomatološka nega počinje razumevanjem problema. Pregled, razgovor i plan prilagođen utvrđenom stanju zuba.
          </p>
          <div className="hero__actions">
            <a className="button" href={site.phoneHref}>Zakažite pregled</a>
            <a className="phone-link" href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
        </div>
        <aside className="hero__atlas" aria-label="Indeks stomatoloških usluga">
          <div className="hero__atlas-intro">
            <span className="mono">STOMATOLOŠKI ATLAS / 01—06</span>
            <h2>Usluge ordinacije</h2>
            <p>Pregled oblasti u kojima možete zakazati pregled i dobiti informacije o narednim koracima.</p>
          </div>
          <ol>
            {services.map((service) => (
              <li key={service.slug}>
                <a href={serviceHref(service)}>
                  <span>{service.number} /</span>
                  <strong>{service.name}</strong>
                </a>
              </li>
            ))}
          </ol>
          <div className="hero__atlas-footer">
            <a className="text-link" href="/usluge/">Pogledajte sve usluge <span aria-hidden="true">→</span></a>
            <span className="mono">{site.city.toUpperCase()} / <a href={site.phoneHref}>{site.phoneDisplay}</a></span>
          </div>
        </aside>
      </section>

      <section className="practical-strip" aria-label="Praktične informacije">
        <div className="container practical-strip__grid">
          <div><span>Lokacija</span><strong>{site.city}</strong></div>
          <div><span>Telefon</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
          <div><span>Zakazivanje</span><strong>Telefonskim pozivom</strong></div>
          <div><span>Instagram</span><a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramLabel} ↗</a></div>
        </div>
      </section>

      <section className="services-section container" aria-labelledby="services-title">
        <div className="section-heading section-heading--split">
          <SectionLabel number="01">KLINIČKI INDEKS</SectionLabel>
          <div>
            <h2 id="services-title">Šest oblasti stomatološke nege.</h2>
            <p>Izaberite temu da biste pročitali kada se obratiti stomatologu i šta možete očekivati od prvog pregleda.</p>
          </div>
        </div>
        <ServiceIndex />
        <div className="section-tail">
          <a className="text-link" href="/usluge/">Pregled svih usluga i informacija <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="approach-section" id="pristup" aria-labelledby="approach-title">
        <div className="container approach-section__grid">
          <SectionLabel number="02">PRISTUP</SectionLabel>
          <div className="approach-section__statement">
            <h2 id="approach-title">Pregled pre pretpostavke. Razgovor pre odluke.</h2>
          </div>
          <div className="approach-section__body">
            <p>
              Simptom je početna informacija, ne gotova dijagnoza. Zato je prvi zadatak pregleda da se sagleda stanje zuba i jasno objasni šta je primećeno.
            </p>
            <p>
              Naredni koraci zavise od nalaza, potreba pacijenta i razgovora o mogućnostima. Zdravlje i funkcija zuba čine osnovu, dok se estetska pitanja razmatraju u odgovarajućem kontekstu.
            </p>
          </div>
          <aside className="margin-note">
            <span className="mono">NAPOMENA / 02</span>
            <p>Konkretan plan terapije moguće je odrediti tek nakon stomatološkog pregleda.</p>
          </aside>
        </div>
      </section>

      <section className="visit-section container" aria-labelledby="visit-title">
        <div className="section-heading section-heading--split">
          <SectionLabel number="03">TOK POSETE</SectionLabel>
          <div>
            <h2 id="visit-title">Četiri jasna koraka.</h2>
            <p>Od prvog telefonskog poziva do dogovora o tretmanu, bez nejasnih online formulara.</p>
          </div>
        </div>
        <ProcedureSteps />
      </section>

      <div className="container contact-section" id="kontakt">
        <ContactPanel />
      </div>
    </>
  )
}
