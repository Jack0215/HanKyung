import { CEO_GREETING } from '../../data/company'

function CeoGreeting() {
  return (
    <div className="content-card ceo-greeting">
      <p className="ceo-quote">“ {CEO_GREETING.headline} ”</p>

      <div className="ceo-message-box">
        {CEO_GREETING.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <p className="ceo-signoff">{CEO_GREETING.signOff}</p>
    </div>
  )
}

export default CeoGreeting
