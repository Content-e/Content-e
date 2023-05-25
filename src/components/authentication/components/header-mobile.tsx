/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

import "../styles/login.scss";
import "./style.css";

const backgroundColors = {
  "/landing": "#001219",
  "/forCreators": "#ab3a05",
  "/forBrands": "#276f6f",
  "/homePageLogin": "#001219",
  "/sayHello": "#001219",
};

export const HeaderMobile = () => {
  const history = useHistory();

  const path = window.location.pathname;

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (): void => setShowMenu(!showMenu);

  const burgerIcon = "/images/hamburger.svg";
  const crossIcon = "/images/cross.svg";

  return (
    <div className="mobile-header">
      <div className="mobile-header-top">
        <div className="header-logo">
          <img src="/images/edc-squared-landing-logo.svg" alt="edc-squared" />
        </div>
        <img
          src="/images/responsive-menu.svg"
          alt="responsive-menu"
          className="responsive-menu"
          onClick={toggleMenu}
        />
      </div>
      {showMenu && (
        <div
          className="header-menu"
          style={{ background: backgroundColors[path] }}
        >
          <div className="header-menu-option-container">
            <div
              className="header-menu-option"
              style={path === "/landing" ? { color: "white" } : {}}
              onClick={() => history.push(UnAuthRoutes.Landing)}
            >
              Home
            </div>
            <div
              className="header-menu-option"
              style={path === "/forCreators" ? { color: "white" } : {}}
              onClick={() => history.push(UnAuthRoutes.Creators)}
            >
              For Creators
            </div>
            <div
              className="header-menu-option"
              style={path === "/forBrands" ? { color: "white" } : {}}
              onClick={() => history.push(UnAuthRoutes.Brands)}
            >
              For Brands
            </div>
            <div
              className="header-menu-option"
              style={path === "/sayHello" ? { color: "white" } : {}}
              onClick={() => history.push(UnAuthRoutes.SayHello)}
            >
              Say Hello
            </div>
            <div
              className="login-signup"
              style={path === "/homePageLogin" ? { color: "white" } : {}}
              onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
            >
              Login / Sign UP
            </div>
            <div className="header-menu-img-container">
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/edcsquared/"
                >
                  <img
                    src="/images/linkedin.png"
                    alt="linkedin-icon"
                    className="header-menu-img"
                  />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.instagram.com/edcsq/">
                  <img
                    src="/images/instagram.png"
                    alt="instagram-icon"
                    className="header-menu-img"
                  />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.tiktok.com/@edcsquared">
                  <img
                    src="/images/tiktok.png"
                    alt="tiktok-icon"
                    className="header-menu-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
