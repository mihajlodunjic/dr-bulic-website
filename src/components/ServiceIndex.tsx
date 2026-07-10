import { serviceHref, services } from '../data/services'

type ServiceIndexProps = {
  limit?: number
}

export function ServiceIndex({ limit }: ServiceIndexProps) {
  const visibleServices = typeof limit === 'number' ? services.slice(0, limit) : services

  return (
    <div className="service-index">
      {visibleServices.map((service) => (
        <article className="service-row" key={service.slug}>
          <span className="service-row__number" aria-hidden="true">{service.number}</span>
          <h3><a href={serviceHref(service)}>{service.name}</a></h3>
          <p>{service.shortDescription}</p>
          <a className="text-link service-row__link" href={serviceHref(service)}>
            Otvorite dosije usluge <span aria-hidden="true">→</span>
          </a>
        </article>
      ))}
    </div>
  )
}
