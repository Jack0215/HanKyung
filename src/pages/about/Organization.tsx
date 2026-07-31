import { ORG_CHART } from '../../data/company'

function Organization() {
  return (
    <div className="content-card">
      <p className="content-slogan">전문 조직체계를 통해 고객의 요구에 신속하게 대응합니다.</p>
      <div className="org-chart">
        <div className="org-row org-top">
          <div className="org-box org-primary">{ORG_CHART.top}</div>
          <div className="org-box org-secondary">{ORG_CHART.side}</div>
        </div>
        <div className="org-connector" aria-hidden="true" />
        <div className="org-row org-mid">
          <div className="org-box org-primary">{ORG_CHART.mid}</div>
        </div>
        <div className="org-connector" aria-hidden="true" />
        <div className="org-row org-departments">
          {ORG_CHART.departments.map((dept) => (
            <div className="org-box" key={dept}>
              {dept}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Organization
