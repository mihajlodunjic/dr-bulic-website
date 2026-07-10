import { visitSteps } from '../data/site'

export function ProcedureSteps() {
  return (
    <ol className="procedure-steps">
      {visitSteps.map((step, index) => (
        <li key={step.title}>
          <span className="procedure-steps__number">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
