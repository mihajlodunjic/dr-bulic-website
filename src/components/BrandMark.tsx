import { site } from '../data/site'

type BrandMarkProps = {
  compact?: boolean
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <a className={`brand-mark${compact ? ' brand-mark--compact' : ''}`} href="/" aria-label={`${site.name}, početna`}>
      <span className="brand-mark__image-wrap">
        <img className="brand-mark__image" src="/logo.png" width="525" height="537" alt="" />
      </span>
      <span className="brand-mark__copy">
        <strong>{site.name}</strong>
        {!compact && <small>{site.businessType}</small>}
      </span>
    </a>
  )
}
