# Doktor Bulić — website

Statički prezentacioni sajt stomatološke ordinacije Doktor Bulić iz Novog Pazara. Projekat koristi React, TypeScript i Vite, a production build prerenderuje svaku javnu rutu u zaseban HTML fajl.

## Lokalni razvoj

```bash
npm install
npm run dev
```

## Production build

Kopirajte `.env.example` u `.env` i upišite stvarni javni URL:

```text
SITE_URL=https://stvarni-domen.example
```

Zatim pokrenite:

```bash
npm run lint
npm run typecheck
npm run build
npm test
npm run preview
```

Build izlaz je u `dist/`. `SITE_URL` se koristi samo za apsolutne canonical, Open Graph i sitemap URL-ove; ako nije podešen, build ne izmišlja production domen.

## Render Static Site

Root `render.yaml` sadrži Blueprint konfiguraciju. Za ručno podešavanje u Dashboard-u koristite:

- Root Directory: `frontend`
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- Environment Variable: `SITE_URL` = stvarni Render ili custom production URL, bez završne kose crte

Nije potreban start command niti Node server u produkciji.
