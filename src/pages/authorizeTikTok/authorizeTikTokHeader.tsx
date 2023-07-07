import { FC } from 'react';
import './authorizeTikTok.css';

interface Props {
  title: string;
  onCross: () => void;
}
export const AuthorizeTikTokHeader: FC<Props> = ({ title, onCross }) => {
  return (
    <div className="tik-tok-header">
      <div className="tik-tok-label-policy">{title}</div>
      <img
        src="/images/modal-cross.svg"
        className="close-icon"
        onClick={onCross}
      />
    </div>
  );
};

export default AuthorizeTikTokHeader;
