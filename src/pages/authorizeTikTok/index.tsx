import { getMainDomainFromSubdomain } from "components";
import { handleCreativeRequest } from "hooks/query/useTikTokAuth";
import CoBrandedMainPage from "pages/coBranded/main";
import { FC, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { withAuth } from "state/auth";
import { AuthProps } from "utils";
import "./authorizeTikTok.css";
import AuthorizeTikTokStep1 from "./authorizeTikTokStep1";
import AuthorizeTikTokStep2 from "./authorizeTikTokStep2";
import AuthorizeTikTokStep3 from "./authorizeTikTokStep3";

export const AuthorizeTikTokStep: FC<AuthProps> = ({ authState }) => {
  const { id } = useParams<{ id: string }>();
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
    if (!loading && data) window.location.href = getMainDomainFromSubdomain();
  }, [loading, data]);

  return (
    <Fragment key="tik tok handlers">
      <CoBrandedMainPage />
      {step === 0 && <AuthorizeTikTokStep1 goToNext={(): void => setStep(1)} />}
      {step === 1 && (
        <AuthorizeTikTokStep2
          goToNext={(): void => setStep(2)}
          goToPrev={(): void => setStep(0)}
        />
      )}
      {step === 2 && (
        <AuthorizeTikTokStep3
          loading={loading}
          goToNext={submitSteps}
          goToPrev={(): void => setStep(1)}
        />
      )}
    </Fragment>
  );
};

export default withAuth(AuthorizeTikTokStep);
