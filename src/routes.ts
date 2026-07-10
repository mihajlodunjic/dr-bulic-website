import { serviceBySlug, services, type Service } from './data/services'

export type RouteMatch =
  | { kind: 'home'; pathname: '/'; title: string; description: string }
  | { kind: 'services'; pathname: '/usluge/'; title: string; description: string }
  | { kind: 'service'; pathname: string; title: string; description: string; service: Service }
  | { kind: 'contact'; pathname: '/kontakt/'; title: string; description: string }
  | { kind: 'not-found'; pathname: string; title: string; description: string }

export const publicRoutes = [
  '/',
  '/usluge/',
  ...services.map((service) => `/usluge/${service.slug}/`),
  '/kontakt/',
] as const

export function normalizePathname(input: string): string {
  const pathname = input.split(/[?#]/)[0] || '/'
  if (pathname === '/404.html') return pathname
  return pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`
}

export function matchRoute(input: string): RouteMatch {
  const pathname = normalizePathname(input)

  if (pathname === '/') {
    return {
      kind: 'home',
      pathname,
      title: 'Doktor Bulić | Stomatološka ordinacija Novi Pazar',
      description: 'Stomatološka ordinacija Doktor Bulić u Novom Pazaru. Pregledajte šest oblasti stomatološke nege i pozovite za termin.',
    }
  }

  if (pathname === '/usluge/') {
    return {
      kind: 'services',
      pathname,
      title: 'Stomatološke usluge | Doktor Bulić Novi Pazar',
      description: 'Pregled usluga ordinacije Doktor Bulić: lečenje i vađenje zuba, protetika, ispravljanje, beljenje i poliranje zuba.',
    }
  }

  if (pathname === '/kontakt/') {
    return {
      kind: 'contact',
      pathname,
      title: 'Kontakt i zakazivanje | Doktor Bulić Novi Pazar',
      description: 'Pozovite stomatološku ordinaciju Doktor Bulić u Novom Pazaru na 064 0 222 292 za termin i dodatne informacije.',
    }
  }

  const serviceMatch = pathname.match(/^\/usluge\/([^/]+)\/$/)
  if (serviceMatch) {
    const service = serviceBySlug.get(serviceMatch[1])
    if (service) {
      return {
        kind: 'service',
        pathname,
        title: `${service.name} | Doktor Bulić Novi Pazar`,
        description: service.metaDescription,
        service,
      }
    }
  }

  return {
    kind: 'not-found',
    pathname,
    title: 'Stranica nije pronađena | Doktor Bulić',
    description: 'Tražena stranica nije pronađena. Vratite se na početnu stranicu ordinacije Doktor Bulić ili pregledajte stomatološke usluge.',
  }
}
