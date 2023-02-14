import { FC, Fragment, useState } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import StepOne from "./stepOne";

export const BrandSteps: FC<ProfileProps> = ({ profileState: { data } }) => {
  const [step, updateStep] = useState(0);

  console.log(data);
  const goToNextStep = (): void => {
    if (step < 2) updateStep(step + 1);
  };

  return (
    <Fragment key="brand steps">
      {step === 0 && (
        <StepOne data={data} onSubmit={goToNextStep} goToStep={updateStep} />
      )}
    </Fragment>
  );
};

export default withProfile(BrandSteps);
