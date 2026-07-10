import { navigation, site } from '../data/site'
import { BrandMark } from './BrandMark'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <BrandMark compact />
          <span className="mono">STOMATOLOŠKA ORDINACIJA / NOVI PAZAR</span>
        </div>
        <p className="site-footer__wordmark">Doktor Bulić</p>
        <div className="site-footer__grid">
          <div>
            <span className="footer-label">Telefon</span>
            <a className="site-footer__phone" href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
          <div>
            <span className="footer-label">Lokacija</span>
            <p>{site.city}</p>
          </div>
          <nav aria-label="Navigacija u podnožju">
            <span className="footer-label">Sadržaj</span>
            {navigation.filter((item) => !item.href.includes('#')).map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div>
            <span className="footer-label">Društvena mreža</span>
            <a href={site.instagramUrl} target="_blank" rel="noreferrer">Instagram {site.instagramLabel}</a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Informacije na sajtu ne zamenjuju stomatološki pregled.</span>
        </div>
      </div>
    </footer>
  )
}
