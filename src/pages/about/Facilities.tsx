import { FACILITIES, MAIN_EQUIPMENT } from '../../data/company'

function Facilities() {
  return (
    <div className="content-card">
      <p className="content-slogan">{FACILITIES.lead}</p>
      <p className="content-body">{FACILITIES.body}</p>

      <div className="equipment-card">
        <img
          className="equipment-photo"
          src={MAIN_EQUIPMENT.image}
          alt={`${MAIN_EQUIPMENT.name} - ${MAIN_EQUIPMENT.en}`}
        />
        <div className="equipment-body">
          <p className="equipment-tag">{MAIN_EQUIPMENT.tag}</p>
          <h3>{MAIN_EQUIPMENT.name}</h3>
          <p className="equipment-en">{MAIN_EQUIPMENT.en}</p>
          <p className="content-body">{MAIN_EQUIPMENT.desc}</p>
          <dl className="equipment-specs">
            {MAIN_EQUIPMENT.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
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
