import { FC } from "react";
import "./style.css";

export const MobileFooter: FC = () => {
  return (
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
  );
};

export default MobileFooter;
