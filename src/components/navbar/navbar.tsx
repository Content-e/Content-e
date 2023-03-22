import React, { useState } from "react";
import "./navbar.css";
import { Link, useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

const Navbar = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openContactUs = (): void => {
    window.location.href = "mailto:hello@edcsquared.io";
  };
  const onLogin = (): void => history.push(UnAuthRoutes.Login);
  const toggleMenu = (): void => setShowMenu(!showMenu);

  return (
    <>
      <ul className="navbar">
        <li>
          <Link to={"#"}>FOR CREATORS</Link>
        </li>
        <li>
          <Link to={"#"}>FOR BRANDS</Link>
        </li>
        <li>
          <Link onClick={openContactUs} to={"#"}>
            CONTACT US
          </Link>
        </li>
        <li>
          <Link className="button" onClick={onLogin} to={"#"}>
            LOGIN / SIGN UP
          </Link>
        </li>
        <div className="social-links">
          <li>
            <img src="images/tiktok.svg" alt="" />
          </li>
          <li>
            <img src="images/linkedin.svg" alt="" />
          </li>
          <li>
            <img src="images/instagram.svg" alt="" />
          </li>
        </div>
      </ul>
      <div className="mobile-header">
        <div className="mobile-header-top">
          <img src="/images/edc-logo.svg" alt="edc-squared" />
          <img
            src="/images/hamburger.svg"
            alt="edc-squared"
            onClick={toggleMenu}
          />
        </div>
        {showMenu && (
          <div className="mobile-header-menu">
            <Link to={"#"}>HOME</Link>
            <Link to={"#"}>FOR CREATORS</Link>
            <Link to={"#"}>FOR BRANDS</Link>
            <Link to={"#"}>SAY HELLO</Link>
            <Link className="button" onClick={onLogin} to={"#"}>
              LOGIN / SIGN UP
            </Link>

            <div className="footer-social-links mobile-navbar-links">
              <div className="footer-link">
                <img src="images/instagram-grey.svg" alt="" />
              </div>
              <div className="footer-link">
                <img src="images/twitter-grey.svg" alt="" />
              </div>
              <div className="footer-link">
                <img src="images/tiktok-grey.svg" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
