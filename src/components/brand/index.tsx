import { FC, Fragment, useState } from "react";
import { CreateBrandProfileInput } from "API";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import { StepBelt } from "./components";

export const BrandSteps: FC<ProfileProps> = ({ profileState: { data } }) => {
  const [step, updateStep] = useState(0);
  const [brandData, setBrandData] = useState<CreateBrandProfileInput>(
    data?.brand?.[0] || {}
  );

  const goToNextStep = (): void => {
    if (step < 2) updateStep(step + 1);
  };
  const goToPrevStep = (): void => {
    if (step > 0) updateStep(step - 1);
  };
  const updateBrandData = (newBrandData: CreateBrandProfileInput): void => {
    setBrandData({ ...brandData, ...newBrandData });
  };

  return (
    <Fragment key="brand steps">
      {step === 0 && <StepOne data={brandData} onUpdate={updateBrandData} />}
      {step === 1 && <StepTwo data={brandData} onUpdate={updateBrandData} />}
      {step === 2 && <StepThree data={brandData} onUpdate={updateBrandData} />}

      <StepBelt
        step={step}
        onNext={goToNextStep}
        onPrev={goToPrevStep}
        disabled={false}
        goToStep={updateStep}
      />
    </Fragment>
  );
};

export default withProfile(BrandSteps);
