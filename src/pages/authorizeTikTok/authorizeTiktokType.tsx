import Button from 'components/ui/button';
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
        <Button onClick={goToNext}>Link TikTok via code</Button>
        <Button onClick={goToUpload}>Upload</Button>
      </div>
    </div>
  );
};

export default AuthorizeTiktokType;
