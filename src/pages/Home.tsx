import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import Icon, { type IconName } from '../components/Icon'
import { CEO_GREETING, COMPANY, LOCATION } from '../data/company'

const QUICK_LINKS: {
  to: string
  tone: string
  icon: IconName
  label: string
  en: string
  desc: string
}[] = [
  {
    to: '/about',
    tone: 'navy',
    icon: 'building',
    label: '회사소개',
    en: 'COMPANY',
    desc: '연혁 · 조직도 · 설비현황 · 품질인증',
  },
  {
    to: '/products',
    tone: 'maroon',
    icon: 'box',
    label: '제품카테고리',
    en: 'PRODUCTS',
    desc: '분기배관 7종 · 이음방식 · 설비유닛',
  },
  {
    to: '/contact',
    tone: 'slate',
    icon: 'phone',
    label: '문의하기',
    en: 'CONTACT',
    desc: '견적문의 · 제품문의 · 기술상담',
  },
]

function Home() {
  return (
    <>
      <HeroSlider />

      <section className="quick-links">
        {QUICK_LINKS.map((link) => (
          <Link to={link.to} key={link.to} className={`quick-link tone-${link.tone}`}>
            <Icon name={link.icon} />
            <p className="quick-link-en">{link.en}</p>
            <h3>{link.label}</h3>
            <p className="quick-link-desc">{link.desc}</p>
            <span className="quick-link-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </section>

      <section className="home-info">
        <div className="wrap home-info-grid">
          <div className="info-box">
            <p className="info-box-tag">CEO MESSAGE</p>
            <h3>대표인사말</h3>
            <p className="info-box-body">{CEO_GREETING.headline}</p>
            <Link to="/about" className="info-box-more">
              더 보기 →
            </Link>
          </div>
          <div className="info-box">
            <p className="info-box-tag">LOCATION</p>
            <h3>찾아오시는 길</h3>
            <p className="info-box-body">{LOCATION.address}</p>
            <p className="info-box-tel">TEL {COMPANY.tel}</p>
            <Link to="/about/location" className="info-box-more">
              자세히 보기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
