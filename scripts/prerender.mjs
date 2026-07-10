import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(projectRoot, 'dist')
if (!process.env.SITE_URL && typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile(path.join(projectRoot, '.env'))
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error
  }
}
const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(path.join(projectRoot, '.ssr', 'entry-server.js')).href)

const rawOrigin = process.env.SITE_URL?.trim() ?? ''
let origin = ''
if (rawOrigin) {
  const parsed = new URL(rawOrigin)
  if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('SITE_URL mora koristiti http ili https protokol.')
  origin = parsed.origin
}

const routes = [
  '/',
  '/usluge/',
  '/usluge/lecenje-zuba/',
  '/usluge/vadjenje-zuba/',
  '/usluge/protetika/',
  '/usluge/ispravljanje-zuba/',
  '/usluge/beljenje-zuba/',
  '/usluge/poliranje-zuba/',
  '/kontakt/',
]

async function writeRoute(pathname, outputFile) {
  const { html, head } = render(pathname, origin)
  const output = template
    .replace('<!--head-html-->', head)
    .replace('<!--app-html-->', html)
  await mkdir(path.dirname(outputFile), { recursive: true })
  await writeFile(outputFile, output, 'utf8')
}

for (const route of routes) {
  const outputFile = route === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, route.slice(1), 'index.html')
  await writeRoute(route, outputFile)
}

await writeRoute('/404.html', path.join(distDir, '404.html'))

const sitemapUrls = origin
  ? routes.map((route) => `  <url><loc>${new URL(route, `${origin}/`).toString()}</loc></url>`).join('\n')
  : '  <!-- SITE_URL nije podešen. Render build će ovde upisati apsolutne URL-ove. -->'
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8')

const robots = [
  'User-agent: *',
  'Allow: /',
  origin ? `Sitemap: ${origin}/sitemap.xml` : '',
  '',
].filter((line, index, lines) => line || index === lines.length - 1).join('\n')
await writeFile(path.join(distDir, 'robots.txt'), robots, 'utf8')
await rm(path.join(projectRoot, '.ssr'), { recursive: true, force: true })

if (!origin) {
  console.warn('SITE_URL nije podešen: canonical i apsolutni sitemap URL-ovi biće dodati kada se promenljiva podesi.')
}
console.log(`Prerenderovano ${routes.length} javnih ruta i 404.html.`)
