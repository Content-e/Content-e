import { FC } from 'react';
import './authorizeTikTok.css';
import AuthorizeTikTokHeader from './authorizeTikTokHeader';

interface Props {
  goToNext: () => void;
  onCross: () => void;
}
export const AuthorizeTikTokStep1: FC<Props> = ({ goToNext, ...props }) => {
  return (
    <div className="tik-tok-modal">
      <AuthorizeTikTokHeader
        {...props}
        title="Ensure that Authorised Posts are allowed"
      />
      <div className="policy-content">
        <div className="content-1">
          <div>
            Note: Due to the difference in TikTok versions, to find Ad settings
            in the app, some users may need to tap:
          </div>
          <div>&#x2022; {'Me > Settings and privacy > Privacy.'}</div>
          <div>&#x2022; {'or Me > Creator tools.'}</div>
        </div>

        <div className="content-1">
          <div>
            To authorize a post, from the TikTok app (version 22.6 and above):
          </div>
          <div>
            &#x2022;{' '}
            {
              'Tap on Me to go to your personal profile page, then tap the 3 dots on the top-right corner.'
            }
          </div>
          <div>
            &#x2022; {'From the Settings and privacy page, tap Creator tools.'}
          </div>
          <div>&#x2022; {'Turn on the Ad settings toggle.'}</div>
        </div>
      </div>

      <div className="creator-img">
        <img src="/images/creator-step1-ads.png" />
      </div>

      <div className="next-btn-container" onClick={goToNext}>
        <div className="next-btn">
          <span>Next</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorizeTikTokStep1;
