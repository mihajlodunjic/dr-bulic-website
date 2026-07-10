import { ContactPanel } from '../components/ContactPanel'
import { ProcedureSteps } from '../components/ProcedureSteps'
import { SectionLabel } from '../components/SectionLabel'
import { ServiceIndex } from '../components/ServiceIndex'
import { services } from '../data/services'
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
          <div className="hero__logo-field">
            <span className="mono">ATLAS / 01—06</span>
            <img src="/logo.png" width="525" height="537" alt="Znak Doktor Bulić, slovo B sa zubom" fetchPriority="high" />
          </div>
          <ol>
            {services.map((service) => (
              <li key={service.slug}>
                <span>{service.number}</span>
                <a href={`/usluge/${service.slug}/`}>{service.name}</a>
              </li>
            ))}
          </ol>
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
