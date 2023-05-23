import React from "react";
import "./navbar.css";
import { Link, useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

const Navbar = () => {
  const history = useHistory();

  const openContactUs = (): void => {
    window.location.href = "mailto:hello@edcsquared.io";
  };
  const onLogin = (): void => history.push(UnAuthRoutes.Login);
  return (
    <>
      <ul className="navbar">
        <li>
          <Link to={"#"}>HOME</Link>
        </li>
        <li>
          <Link to={"#"}>FOR CREATORS</Link>
        </li>
        <li>
          <Link to={"#"}>FOR BRANDS</Link>
        </li>
        <li>
          <Link onClick={openContactUs} to={"#"}>
            Say hello
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
    </>
  );
};

export default Navbar;
