/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import "./styles/login.css";

export const AuthFooter: FC = () => {
  return (
    <div className="mobile-footer">
      <div className="footer-social-links">
        <div className="footer-link">
          <img src="images/instagram.svg" alt="" />
        </div>
        <div className="footer-link">
          <img src="images/twitter.svg" alt="" />
        </div>
        <div className="footer-link">
          <img src="images/tiktok.svg" alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        © 2023 Copyright EDC Squared. All Rights Reserved.
      </div>
    </div>
  );
};

export default AuthFooter;
