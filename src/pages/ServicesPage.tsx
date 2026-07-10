import { Breadcrumbs } from '../components/Breadcrumbs'
import { ContactPanel } from '../components/ContactPanel'
import { SectionLabel } from '../components/SectionLabel'
import { ServiceIndex } from '../components/ServiceIndex'

export function ServicesPage() {
  return (
    <>
      <header className="page-intro container">
        <Breadcrumbs items={[{ label: 'Početna', href: '/' }, { label: 'Usluge' }]} />
        <div className="page-intro__grid">
          <SectionLabel number="01—06">USLUGE</SectionLabel>
          <div>
            <h1>Stomatološke usluge, predstavljene jasno.</h1>
            <p className="lead">
              Svaka tema vodi do zasebnog dosijea sa praktičnim informacijama za pacijente. Konačna procena i plan uvek zavise od pregleda.
            </p>
          </div>
        </div>
      </header>

      <section className="container services-catalogue" aria-labelledby="catalogue-title">
        <div className="catalogue-note">
          <h2 id="catalogue-title">Klinički indeks</h2>
          <p>Izaberite uslugu prema pitanju koje želite da razjasnite.</p>
        </div>
        <ServiceIndex />
      </section>

      <section className="service-guidance">
        <div className="container service-guidance__grid">
          <SectionLabel number="NAPOMENA">PRE PREGLEDA</SectionLabel>
          <h2>Naziv usluge je početak razgovora, ne unapred određen tretman.</h2>
          <p>
            Isti simptom može imati više uzroka. Kada pozovete, recite šta primećujete i koliko dugo tegoba traje. Stomatolog na pregledu procenjuje stanje i objašnjava naredne korake.
          </p>
        </div>
      </section>

      <div className="container contact-section">
        <ContactPanel compact />
      </div>
    </>
  )
}
