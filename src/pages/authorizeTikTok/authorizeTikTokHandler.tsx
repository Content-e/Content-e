import classNames from 'classnames';
import TiktokHandlerAlertModal from 'components/tiktokHandlerAlertModal';
import {
  handleCreativeRequest,
  handleUpdateCreativeRequest,
} from 'hooks/query/useTikTokAuth';
import { FC, useEffect, useState } from 'react';
import { withAuth } from 'state/auth';
import { withProfile } from 'state/profileSteps';
import { AuthProps, ProfileProps } from 'utils';
import './authorizeTikTok.css';
import AuthorizeTikTokStep1 from './authorizeTikTokStep1';
import AuthorizeTikTokStep2 from './authorizeTikTokStep2';
import AuthorizeTikTokStep3 from './authorizeTikTokStep3';
import AuthorizeTiktokType from './authorizeTiktokType';
import AuthorizeTiktokUpload from './authorizeTikTokUpload';

interface Props {
  onCross: () => void;
  briefId: string;
  disableBackground?: boolean;
}
export const AuthorizeTikTokHandler: FC<Props & AuthProps & ProfileProps> = ({
  authState,
  disableBackground,
  briefId: id,
  onCross,
  profileState: { data: profile },
}) => {
  const { createTiktokRequest, loading, data } = handleCreativeRequest();
  const { updateTiktokRequest, loading: updateLoading } =
    handleUpdateCreativeRequest();

  const { userId } = authState || {};
  const [step, setStep] = useState<any | null>(null);
  const [showAlert, setAlertVisibility] = useState(false);
  const [uploading, setUploading] = useState(false);

  const toggleAlert = (): void => setAlertVisibility(!showAlert);
  const submitSteps = (link: string): void => {
    if (!loading && userId && id) {
      if (profile?.tiktokHandler) {
        const input = {
          brandBriefId: id,
          creatorId: userId,
          creatorName: profile.name,
          creatorDescription: profile.description,
          status: 'new',
          tiktokCreativeUrl: link,
          tiktokVideoCode: link,
          creativeTiktokHandle: profile?.tiktokHandler,
        };
        createTiktokRequest({ variables: { input } });
      } else toggleAlert();
    }
  };

  const uploadVideo = async () => {
    if (!loading && userId && id) {
      if (profile?.tiktokHandler) {
        const input = {
          brandBriefId: id,
          creatorId: userId,
          creatorName: profile.name,
          creatorDescription: profile.description,
          status: 'submitted',
          tiktokCreativeUrl: '',
          tiktokVideoCode: '',
          creativeTiktokHandle: profile?.tiktokHandler,
        };
        const res = await createTiktokRequest({ variables: { input } });
        return res;
      }
    }
  };

  const updatePath = async (path: string, vidID: string) => {
    if (!updateLoading && userId && id) {
      if (profile?.tiktokHandler) {
        const input = {
          id: vidID,
          tiktokCreativeUrl: path,
        };
        console.log(path);
        const res = await updateTiktokRequest({ variables: { input } });
        window.location.reload();
        console.log(res);
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    if (!loading && data && !uploading) onCross();
  }, [loading, data]);

  return (
    <div
      className={classNames('tik-tok-wrapper', {
        'tik-tok-background': disableBackground,
      })}
    >
      <div className="tik-tok-container">
        {step === null && (
          <AuthorizeTiktokType
            onCross={onCross}
            goToNext={(): void => setStep(0)}
            goToUpload={(): void => setStep('upload')}
          />
        )}
        {step === 'upload' && (
          <AuthorizeTiktokUpload
            onCross={onCross}
            updatePath={updatePath}
            goToNext={uploadVideo}
            setUploading={setUploading}
            goToPrev={(): void => setStep(null)}
          />
        )}
        {step === 0 && (
          <AuthorizeTikTokStep1
            onCross={onCross}
            goToNext={(): void => setStep(1)}
          />
        )}
        {step === 1 && (
          <AuthorizeTikTokStep2
            onCross={onCross}
            goToNext={(): void => setStep(2)}
            goToPrev={(): void => setStep(0)}
          />
        )}
        {step === 2 && (
          <AuthorizeTikTokStep3
            onCross={onCross}
            loading={loading}
            goToNext={submitSteps}
            goToPrev={(): void => setStep(1)}
          />
        )}
      </div>

      {showAlert && (
        <div className="tiktok-alert-message">
          <TiktokHandlerAlertModal onClick={toggleAlert} />
        </div>
      )}
    </div>
  );
};

export default withAuth(withProfile(AuthorizeTikTokHandler));
