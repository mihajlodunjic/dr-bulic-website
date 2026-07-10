import { renderToString } from 'react-dom/server'
import { App } from './App'
import { site } from './data/site'
import { matchRoute } from './routes'

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function absoluteUrl(origin: string, pathname: string): string | undefined {
  return origin ? new URL(pathname, `${origin}/`).toString() : undefined
}

function schemaMarkup(pathname: string, origin: string) {
  const route = matchRoute(pathname)
  const pageUrl = absoluteUrl(origin, route.pathname)
  const dentistId = origin ? `${origin}/#dentist` : undefined
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Dentist',
      ...(dentistId ? { '@id': dentistId } : {}),
      name: site.name,
      description: site.businessType,
      telephone: site.phoneInternational,
      areaServed: { '@type': 'City', name: site.city },
      sameAs: [site.instagramUrl],
      ...(origin ? { url: origin } : {}),
    },
    {
      '@type': 'WebPage',
      name: route.title,
      description: route.description,
      inLanguage: 'sr-Latn',
      ...(pageUrl ? { url: pageUrl } : {}),
      ...(dentistId ? { about: { '@id': dentistId } } : {}),
    },
  ]

  if (route.kind === 'service') {
    const breadcrumbs = [
      { name: 'Početna', path: '/' },
      { name: 'Usluge', path: '/usluge/' },
      { name: route.service.name, path: route.pathname },
    ]
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(absoluteUrl(origin, item.path) ? { item: absoluteUrl(origin, item.path) } : {}),
      })),
    })
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c')
}

function renderHead(pathname: string, origin: string) {
  const route = matchRoute(pathname)
  const url = absoluteUrl(origin, route.pathname)
  const imageUrl = origin ? absoluteUrl(origin, '/logo.png') : undefined
  const tags = [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    '<meta name="robots" content="index, follow" />',
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="sr_RS" />',
    `<meta property="og:site_name" content="${escapeHtml(site.name)}" />`,
    '<meta name="twitter:card" content="summary" />',
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    url ? `<link rel="canonical" href="${escapeHtml(url)}" />` : '',
    url ? `<meta property="og:url" content="${escapeHtml(url)}" />` : '',
    imageUrl ? `<meta property="og:image" content="${escapeHtml(imageUrl)}" />` : '',
    imageUrl ? `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />` : '',
    `<script type="application/ld+json">${schemaMarkup(pathname, origin)}</script>`,
  ]

  if (route.kind === 'not-found') {
    tags[2] = '<meta name="robots" content="noindex, follow" />'
  }

  return tags.filter(Boolean).join('\n    ')
}

export function render(pathname: string, origin = '') {
  return {
    html: renderToString(<App pathname={pathname} />),
    head: renderHead(pathname, origin),
  }
}
