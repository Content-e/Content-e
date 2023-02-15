import { FC, Fragment, useState } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";

export const BrandSteps: FC<ProfileProps> = ({ profileState: { data } }) => {
  const [step, updateStep] = useState(1);

  console.log(data);
  const goToNextStep = (): void => {
    if (step < 2) updateStep(step + 1);
  };
  const goToPrevStep = (): void => {
    if (step > 0) updateStep(step - 1);
  };

  return (
    <Fragment key="brand steps">
      {step === 0 && (
        <StepOne data={data} onSubmit={goToNextStep} goToStep={updateStep} />
      )}
      {step === 1 && (
        <StepTwo
          data={data}
          onSubmit={goToNextStep}
          onPrev={goToPrevStep}
          goToStep={updateStep}
        />
      )}
    </Fragment>
  );
};

export default withProfile(BrandSteps);
