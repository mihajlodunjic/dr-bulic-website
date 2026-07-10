import '@fontsource-variable/instrument-sans'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-ext-400.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { App } from './App'
import './styles/global.css'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App pathname={window.location.pathname} />
  </StrictMode>,
)
