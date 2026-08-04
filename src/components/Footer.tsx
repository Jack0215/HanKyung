import { COMPANY } from "../data/company";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-brand">
          <img
            src={logo}
            className="brand-mark"
            alt="(주)한경방재 로고"
          />
          <span>
            {COMPANY.nameKo} · 대표 {COMPANY.ceo}
          </span>
        </div>
        <p>{COMPANY.addressShort}</p>
        <p>
          TEL {COMPANY.tel} · FAX {COMPANY.fax} · 사업자등록번호{" "}
          {COMPANY.bizRegNo}
        </p>
        <p className="copyright">
          © 2026 {COMPANY.nameEn} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
