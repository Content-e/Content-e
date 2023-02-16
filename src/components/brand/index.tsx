import { FC, Fragment, useEffect, useMemo, useState } from "react";
import { CreateBrandProfileInput } from "API";
import { withProfile } from "state/profileSteps";
import { AuthRoutes, ProfileProps } from "utils";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import {
  isMissionSuggestionDisable,
  isPillarSuggestionDisable,
  isTaglineSuggestionDisable,
  StepBelt,
} from "./components";
import { BrandProps, withBrand } from "state/brand";
import { useHistory } from "react-router-dom";

export const BrandSteps: FC<ProfileProps & BrandProps> = ({
  profileState: { data, isLoading },
  brandState,
  refetchProfile,
  updateData,
  loading,
  data: updatedDataRes,
}) => {
  const history = useHistory();
  const [step, updateStep] = useState(0);
  const [brandData, setBrandData] = useState<CreateBrandProfileInput>(
    brandState || {}
  );

  const goToNextStep = (): void => {
    if (step < 2) updateStep(step + 1);
    else updateData(brandData);
  };

  const goToPrevStep = (): void => {
    if (step > 0) updateStep(step - 1);
  };
  const updateBrandData = (newBrandData: CreateBrandProfileInput): void => {
    setBrandData({ ...brandData, ...newBrandData });
  };
  const updateStepNumber = (stp: number): void => {
    let newStep = step;
    if (stp > step) {
      if (
        (stp === 1 && !isPillarSuggestionDisable(brandData)) ||
        (stp === 2 && !isMissionSuggestionDisable(brandData))
      )
        newStep = stp;
    } else newStep = stp;
    updateStep(newStep);
  };

  useEffect(() => {
    if (!loading && updatedDataRes) refetchProfile();
  }, [loading, updatedDataRes]);

  useEffect(() => {
    if (!isLoading && data && updatedDataRes) history.push(AuthRoutes.Home);
  }, [isLoading, data, updatedDataRes]);

  const nextStepDisabled = useMemo(() => {
    if (step === 0) return isPillarSuggestionDisable(brandData);
    if (step === 1) return isMissionSuggestionDisable(brandData);
    if (step === 2) return isTaglineSuggestionDisable(brandData);
    return false;
  }, [brandData, step]);

  return (
    <Fragment key="brand steps">
      {step === 0 && <StepOne data={brandData} onUpdate={updateBrandData} />}
      {step === 1 && <StepTwo data={brandData} onUpdate={updateBrandData} />}
      {step === 2 && <StepThree data={brandData} onUpdate={updateBrandData} />}

      <StepBelt
        step={step}
        onNext={goToNextStep}
        onPrev={step > 0 ? goToPrevStep : undefined}
        disabled={nextStepDisabled}
        goToStep={updateStepNumber}
      />
    </Fragment>
  );
};

export default withProfile(withBrand(BrandSteps));
