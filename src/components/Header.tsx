import { NavLink, Link } from 'react-router-dom'
import { COMPANY } from '../data/company'

const NAV_LINKS = [
  { to: '/about', label: '회사소개' },
  { to: '/products', label: '제품카테고리' },
  { to: '/contact', label: '문의하기' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link to="/" className="brand">
          <span className="brand-mark">H</span>
          <span className="brand-name">
            {COMPANY.nameShort}
            <em>(주)</em>
          </span>
        </Link>
        <nav className="site-nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a className="header-tel" href={COMPANY.telHref}>
          <span className="dot" aria-hidden="true" />
          {COMPANY.tel}
        </a>
      </div>
    </header>
  )
}

export default Header
