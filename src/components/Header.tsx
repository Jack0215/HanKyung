import { NavLink, Link } from "react-router-dom";
import { COMPANY } from "../data/company";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { to: "/about", label: "회사소개" },
  { to: "/products", label: "제품카테고리" },
  // { to: "/contact", label: "문의하기" }, // 문의하기 페이지 임시 비활성화 (추후 사용 예정)
];

function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link
          to="/"
          className="brand"
        >
          <img
            src={logo}
            className="brand-mark"
            alt="(주)한경방재 로고"
          />
          <span className="brand-name">{COMPANY.nameShort}</span>
        </Link>
        <nav className="site-nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a
          className="header-tel"
          href={COMPANY.telHref}
        >
          <span
            className="header-tel-icon"
            aria-hidden="true"
          >
            📞
          </span>
          {COMPANY.tel}
        </a>
      </div>
    </header>
  );
}

export default Header;
