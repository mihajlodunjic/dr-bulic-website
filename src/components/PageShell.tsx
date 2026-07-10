import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

type PageShellProps = {
  pathname: string
  children: ReactNode
}

export function PageShell({ pathname, children }: PageShellProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">Pređite na glavni sadržaj</a>
      <SiteHeader pathname={pathname} />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  )
}
