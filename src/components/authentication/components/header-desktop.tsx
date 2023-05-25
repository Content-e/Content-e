import { Link } from "react-router-dom";

import "../styles/login.scss";

export const HeaderDesktop = () => {
  const path = window.location.pathname;

  return (
    <div className="login__top">
      <div className="header-logo">
        <img src="/images/edc-squared-landing-logo.svg" alt="edc-squared" />
      </div>
      <ul className="header-list">
        <li>
          <Link
            className={`${path === "/landing" ? "active" : ""} default-link`}
            to={"/landing"}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className={`${
              path === "/forCreators" ? "active" : ""
            } default-link`}
            to={"/forCreators"}
          >
            FOR CREATORS
          </Link>
        </li>
        <li>
          <Link
            className={`${path === "/forBrands" ? "active" : ""} default-link`}
            to={"/forBrands"}
          >
            FOR BRANDS
          </Link>
        </li>
        <li>
          <Link
            className={`${path === "/sayHello" ? "active" : ""} default-link`}
            to={"/sayHello"}
          >
            Say hello
          </Link>
        </li>
        <li className="login-signup">
          <Link
            className={`${
              path === "/homePageLogin" ? "active" : ""
            } login-signup-link`}
            to={"/homePageLogin"}
          >
            LOGIN / SIGN UP
          </Link>
        </li>
        <div className="social-links">
          <li>
            <a href="https://www.tiktok.com/@edcsquared">
              <img width={28} height={28} src="images/tiktok.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/edcsquared/">
              <img width={28} height={28} src="images/linkedin.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/edcsq/">
              <img width={28} height={28} src="images/instagram.png" alt="" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default HeaderDesktop;
