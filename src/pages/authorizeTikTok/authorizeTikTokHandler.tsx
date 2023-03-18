import classNames from "classnames";
import TiktokHandlerAlertModal from "components/tiktokHandlerAlertModal";
import { handleCreativeRequest } from "hooks/query/useTikTokAuth";
import { FC, useEffect, useState } from "react";
import { withAuth } from "state/auth";
import { withProfile } from "state/profileSteps";
import { AuthProps, ProfileProps } from "utils";
import "./authorizeTikTok.css";
import AuthorizeTikTokStep1 from "./authorizeTikTokStep1";
import AuthorizeTikTokStep2 from "./authorizeTikTokStep2";
import AuthorizeTikTokStep3 from "./authorizeTikTokStep3";

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

  const { userId } = authState || {};
  const [step, setStep] = useState(0);
  const [showAlert, setAlertVisibility] = useState(false);

  const toggleAlert = (): void => setAlertVisibility(!showAlert);
  const submitSteps = (link: string): void => {
    if (!loading && userId && id) {
      if (profile?.tiktokHandler) {
        const input = {
          brandBriefId: id,
          creatorId: userId,
          status: "new",
          tiktokCreativeUrl: link,
          tiktokVideoCode: link,
          creativeTiktokHandle: profile?.tiktokHandler,
        };
        createTiktokRequest({ variables: { input } });
      } else toggleAlert();
    }
  };

  useEffect(() => {
    if (!loading && data) onCross();
  }, [loading, data]);

  return (
    <div
      className={classNames("tik-tok-wrapper", {
        "tik-tok-background": disableBackground,
      })}
    >
      <div className="tik-tok-container">
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
