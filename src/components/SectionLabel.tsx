type SectionLabelProps = {
  number: string
  children: React.ReactNode
  inverted?: boolean
}

export function SectionLabel({ number, children, inverted = false }: SectionLabelProps) {
  return (
    <div className={`section-label${inverted ? ' section-label--inverted' : ''}`}>
      <span>{number}</span>
      <span>{children}</span>
    </div>
  )
}
