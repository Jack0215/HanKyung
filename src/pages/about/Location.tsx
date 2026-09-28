import Icon from '../../components/Icon'
import { COMPANY, LOCATION } from '../../data/company'

const NAVER_MAP_URL = `https://map.naver.com/p/search/${encodeURIComponent(COMPANY.addressFull)}`

function Location() {
  return (
    <div className="content-card">
      <div className="map-card">
        <span className="map-card-icon">
          <Icon name="map-pin" />
        </span>
        <p className="map-card-address">{LOCATION.address}</p>
        <a className="map-card-link" href={NAVER_MAP_URL} target="_blank" rel="noopener noreferrer">
          네이버 지도에서 길찾기 →
        </a>
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
