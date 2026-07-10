import { PageShell } from './components/PageShell'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicePage } from './pages/ServicePage'
import { ServicesPage } from './pages/ServicesPage'
import { matchRoute } from './routes'

export function App({ pathname }: { pathname: string }) {
  const route = matchRoute(pathname)

  let page: React.ReactNode
  switch (route.kind) {
    case 'home':
      page = <HomePage />
      break
    case 'services':
      page = <ServicesPage />
      break
    case 'service':
      page = <ServicePage service={route.service} />
      break
    case 'contact':
      page = <ContactPage />
      break
    default:
      page = <NotFoundPage />
  }

  return <PageShell pathname={route.pathname}>{page}</PageShell>
}
