import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const routes = [
  ['/', 'Jasan put od pregleda', 'Doktor Bulić |'],
  ['/usluge/', 'Stomatološke usluge', 'Stomatološke usluge |'],
  ['/usluge/lecenje-zuba/', 'Lečenje zuba', 'Lečenje zuba |'],
  ['/usluge/vadjenje-zuba/', 'Vađenje zuba', 'Vađenje zuba |'],
  ['/usluge/protetika/', 'Protetika', 'Protetika |'],
  ['/usluge/ispravljanje-zuba/', 'Ispravljanje zuba', 'Ispravljanje zuba |'],
  ['/usluge/beljenje-zuba/', 'Beljenje zuba', 'Beljenje zuba |'],
  ['/usluge/poliranje-zuba/', 'Poliranje zuba', 'Poliranje zuba |'],
  ['/kontakt/', 'Za termin, pozovite ordinaciju', 'Kontakt i zakazivanje |'],
]

test('svaka javna ruta ima prerenderovan HTML sa sadržajem i metapodacima', () => {
  for (const [route, heading, title] of routes) {
    const file = route === '/' ? path.join(root, 'dist', 'index.html') : path.join(root, 'dist', route, 'index.html')
    assert.ok(existsSync(file), `Nedostaje ${file}`)
    const html = readFileSync(file, 'utf8')
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
    assert.ok(html.includes('<h1'), `${route} nema h1`)
    assert.ok(html.includes(heading), `${route} nema glavni sadržaj`)
    assert.ok(html.includes('application/ld+json'), `${route} nema JSON-LD`)
  }
})

test('statički SEO fajlovi i 404 postoje', () => {
  for (const file of ['robots.txt', 'sitemap.xml', '404.html', 'site.webmanifest', 'logo.png']) {
    assert.ok(existsSync(path.join(root, 'dist', file)), `Nedostaje ${file}`)
  }
})

test('JSON-LD na servisnim stranicama je validan JSON', () => {
  const html = readFileSync(path.join(root, 'dist', 'usluge', 'lecenje-zuba', 'index.html'), 'utf8')
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
  assert.ok(match)
  const schema = JSON.parse(match[1])
  assert.equal(schema['@context'], 'https://schema.org')
  assert.ok(schema['@graph'].some((item) => item['@type'] === 'BreadcrumbList'))
})

test('naslovi i opisi javnih ruta su jedinstveni, a JSON-LD je validan', () => {
  const titles = new Set()
  const descriptions = new Set()
  for (const [route] of routes) {
    const file = route === '/' ? path.join(root, 'dist', 'index.html') : path.join(root, 'dist', route, 'index.html')
    const html = readFileSync(file, 'utf8')
    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    const description = html.match(/<meta name="description" content="(.*?)" \/>/)?.[1]
    const schemaText = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]
    assert.ok(title)
    assert.ok(description)
    assert.ok(schemaText)
    assert.ok(!titles.has(title), `Dupliran title: ${title}`)
    assert.ok(!descriptions.has(description), `Dupliran description: ${description}`)
    titles.add(title)
    descriptions.add(description)
    JSON.parse(schemaText)
  }
})

test('svi interni HTML linkovi vode do generisanog izlaza', () => {
  for (const [route] of routes) {
    const file = route === '/' ? path.join(root, 'dist', 'index.html') : path.join(root, 'dist', route, 'index.html')
    const html = readFileSync(file, 'utf8')
    const links = [...html.matchAll(/href="(\/[^"]*)"/g)].map((match) => match[1])
    for (const href of links) {
      if (href.startsWith('/assets/') || href === '/logo.png' || href === '/site.webmanifest' || href.includes('#')) continue
      const cleanPath = href.split(/[?#]/)[0]
      const target = cleanPath === '/'
        ? path.join(root, 'dist', 'index.html')
        : path.join(root, 'dist', cleanPath, 'index.html')
      assert.ok(existsSync(target), `${route} vodi do nepostojećeg izlaza ${href}`)
    }
  }
})
