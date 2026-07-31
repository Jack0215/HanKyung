import { HISTORY } from '../../data/company'

function History() {
  return (
    <div className="content-card">
      <p className="content-slogan">끊임없는 변화를 통해 (주)한경방재의 기술력을 창조해 나가고 있습니다.</p>
      <ol className="timeline">
        {HISTORY.map((item) => (
          <li key={item.date}>
            <span className="timeline-date">{item.date}</span>
            <span className="timeline-label">{item.label}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default History
