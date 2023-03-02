import CoBrandedMainPage from "pages/coBranded/main";
import { FC, Fragment, useState } from "react";
import "./authorizeTikTok.css";
import AuthorizeTikTokStep1 from "./authorizeTikTokStep1";
import AuthorizeTikTokStep2 from "./authorizeTikTokStep2";
import AuthorizeTikTokStep3 from "./authorizeTikTokStep3";

export const AuthorizeTikTokStep: FC = () => {
  const [step, setStep] = useState(0);

  const submitSteps = (): void => {};

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
          goToNext={submitSteps}
          goToPrev={(): void => setStep(1)}
        />
      )}
    </Fragment>
  );
};

export default AuthorizeTikTokStep;
