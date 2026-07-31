import { FACILITIES } from '../../data/company'
import craneImg from '../../assets/photos/facility-crane.jpg'
import cncImg from '../../assets/photos/facility-cnc.jpg'

function Facilities() {
  return (
    <div className="content-card">
      <p className="content-slogan">{FACILITIES.lead}</p>
      <p className="content-body">{FACILITIES.body}</p>

      <div className="facility-photos">
        <img src={craneImg} alt="당진 공장 내부 천장 크레인 설비" />
        <img src={cncImg} alt="파이프 가공 설비" />
      </div>

      <h3 className="facility-heading">제조설비</h3>
      <ul className="facility-grid">
        {FACILITIES.manufacturing.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <strong>{item.qty}대</strong>
          </li>
        ))}
      </ul>

      <h3 className="facility-heading">시험설비</h3>
      <ul className="facility-grid">
        {FACILITIES.testing.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <strong>{item.qty}대</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Facilities
