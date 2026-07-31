import { COMPANY, LOCATION } from '../../data/company'

function Location() {
  return (
    <div className="content-card">
      <div className="map-illustration" aria-hidden="true">
        <svg viewBox="0 0 400 220" role="presentation">
          <rect width="400" height="220" fill="var(--bg-alt)" />
          <path d="M0 150 H400" stroke="var(--border)" strokeWidth="14" />
          <path d="M180 0 V220" stroke="var(--border)" strokeWidth="10" />
          <circle cx="180" cy="150" r="9" fill="var(--accent)" />
          <path
            d="M180 150 c0 -22 -22 -20 -22 -40 a22 22 0 1 1 44 0 c0 20 -22 18 -22 40Z"
            fill="var(--navy-900)"
            transform="translate(0 -46)"
          />
        </svg>
      </div>
      <dl className="location-info">
        <div>
          <dt>주소</dt>
          <dd>{LOCATION.address}</dd>
        </div>
        <div>
          <dt>전화</dt>
          <dd>
            <a href={COMPANY.telHref}>{COMPANY.tel}</a>
          </dd>
        </div>
        <div>
          <dt>팩스</dt>
          <dd>{COMPANY.fax}</dd>
        </div>
      </dl>
      <h3 className="facility-heading">오시는 길</h3>
      <ul className="direction-list">
        {LOCATION.directions.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

export default Location
