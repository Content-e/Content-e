import { FC } from 'react';
import AuthorizeTikTokHeader from './authorizeTikTokHeader';

interface Props {
  goToNext: () => void;
  onCross: () => void;
  goToUpload: () => void;
}

export const AuthorizeTiktokType: FC<Props> = ({
  goToNext,
  goToUpload,
  ...props
}) => {
  return (
    <div className="tik-tok-modal">
      <AuthorizeTikTokHeader {...props} title="Select the method" />
      <div className="tik-tok-method">
        <button onClick={goToNext}>Link TikTok via code</button>
        <button onClick={goToUpload}>Upload</button>
      </div>
    </div>
  );
};

export default AuthorizeTiktokType;
