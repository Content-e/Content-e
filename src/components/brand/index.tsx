import { FC, Fragment, useState } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

export const BrandSteps: FC<ProfileProps> = ({ profileState: { data } }) => {
  const { brand } = data || {};
  const [step, updateStep] = useState(0);

  const goToNextStep = (): void => {
    if (step < 2) updateStep(step + 1);
  };
  const goToPrevStep = (): void => {
    if (step > 0) updateStep(step - 1);
  };

  return (
    <Fragment key="brand steps">
      {step === 0 && (
        <StepOne
          data={brand?.[0]}
          onSubmit={goToNextStep}
          goToStep={updateStep}
        />
      )}
      {step === 1 && (
        <StepTwo
          data={brand?.[0]}
          onSubmit={goToNextStep}
          onPrev={goToPrevStep}
          goToStep={updateStep}
        />
      )}
      {step === 2 && (
        <StepThree
          data={brand?.[0]}
          onSubmit={goToNextStep}
          onPrev={goToPrevStep}
          goToStep={updateStep}
        />
      )}
    </Fragment>
  );
};

export default withProfile(BrandSteps);
