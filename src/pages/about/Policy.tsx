import { MANAGEMENT_POLICY } from '../../data/company'

function Policy() {
  return (
    <div className="content-card">
      <p className="content-slogan">{MANAGEMENT_POLICY.slogan}</p>
      <div className="policy-grid">
        {MANAGEMENT_POLICY.groups.map((group, i) => (
          <div className="policy-card" key={group.title}>
            <span className="policy-no">{String(i + 1).padStart(2, '0')}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Policy
