import { useEffect, useState } from 'react'
import { navigation, site } from '../data/site'
import { BrandMark } from './BrandMark'

type SiteHeaderProps = {
  pathname: string
}

function isCurrent(pathname: string, href: string) {
  if (href.includes('#')) return false
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href.replace(/\/$/, ''))
}

export function SiteHeader({ pathname }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <BrandMark />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span>{open ? 'Zatvori' : 'Meni'}</span>
          <span className="menu-toggle__lines" aria-hidden="true"><i /><i /></span>
        </button>
        <div className={`site-header__navigation${open ? ' is-open' : ''}`}>
          <nav id="primary-navigation" aria-label="Glavna navigacija">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button--header" href={site.phoneHref}>Zakažite pregled</a>
        </div>
      </div>
    </header>
  )
}
