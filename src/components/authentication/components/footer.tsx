import { useHistory } from 'react-router-dom';
import { UnAuthRoutes } from 'utils';

import '../styles/login.scss';

interface Props {
  isDark?: boolean;
}

export function Footer({ isDark }: Props) {
  const history = useHistory();

  return (
    <div className="landing-footer">
      <div className="landing-footer-text-container">
        <div
          className="landing-footer-text"
          onClick={() => history.push(UnAuthRoutes.Login)}
        >
          Login / Sign up
        </div>
        <div
          className="landing-footer-text"
          onClick={() => history.push(UnAuthRoutes.PrivacyPolicy)}
        >
          Privacy Policy
        </div>
      </div>

      <div className="landing-footer-img-container">
        {!isDark ? (
          <>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/edcsquared/"
              rel="noreferrer"
            >
              <img src="/images/landing-linkedin.svg" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/edcsq/"
              rel="noreferrer"
            >
              <img src="/images/landing-insta.svg" />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@edcsquared"
              rel="noreferrer"
            >
              <img src="/images/landing-tiktok.svg" />
            </a>
          </>
        ) : (
          <>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/edcsquared/"
              rel="noreferrer"
            >
              <img src="/images/landing-linkedin-dark.svg" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/edcsq/"
              rel="noreferrer"
            >
              <img src="/images/landing-insta-dark.svg" />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@edcsquared"
              rel="noreferrer"
            >
              <img src="/images/landing-tiktok-dark.svg" />
            </a>
          </>
        )}
      </div>

      <div className="landing-footer-text">
        © 2023 Copyright EDC Squared. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
