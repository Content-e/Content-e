import classNames from "classnames";
import { handleCreativeRequest } from "hooks/query/useTikTokAuth";
import { FC, useEffect, useState } from "react";
import { withAuth } from "state/auth";
import { AuthProps } from "utils";
import "./authorizeTikTok.css";
import AuthorizeTikTokStep1 from "./authorizeTikTokStep1";
import AuthorizeTikTokStep2 from "./authorizeTikTokStep2";
import AuthorizeTikTokStep3 from "./authorizeTikTokStep3";

interface Props {
  onCross: () => void;
  briefId: string;
  disableBackground?: boolean;
}
export const AuthorizeTikTokHandler: FC<Props & AuthProps> = ({
  authState,
  disableBackground,
  briefId: id,
  onCross,
}) => {
  const { createTiktokRequest, loading, data } = handleCreativeRequest();

  const { userId } = authState || {};
  const [step, setStep] = useState(0);

  const submitSteps = (link: string): void => {
    if (!loading && userId && id) {
      const input = {
        brandBriefId: id,
        creatorId: userId,
        status: "submit",
        tiktokCreativeUrl: link,
        tiktokVideoCode: link,
      };
      createTiktokRequest({ variables: { input } });
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
    </div>
  );
};

export default withAuth(AuthorizeTikTokHandler);
