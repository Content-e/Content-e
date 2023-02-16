import { FC, useState } from "react";
import { BrandProfile } from "API";
import { TextArea } from "components/customTextArea";
import { createBrand } from "hooks/utils";
import Field from "./components/field";
import * as S from "./styles";
import { NameSuggestionModal } from "./modals";
import { StepBelt, SuggestedInput, ToneOfVoice } from "./components";

interface Props {
  data?: BrandProfile;
  onSubmit: () => void;
  goToStep: (step: number) => void;
}
export const StepOne: FC<Props> = ({ data, onSubmit, ...rest }) => {
  const [description, setDescription] = useState(data?.description || "");
  const [toneOfVoice, setToneOfVoice] = useState<Array<string | null>>(
    data?.toneVoice || []
  );
  const [brandName, updateBrandName] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const toggleSuggestionBox = (): void => setShowSuggestion(!showSuggestion);
  const insertBrandName = (text: string): void => {
    updateBrandName(text);
    toggleSuggestionBox();
  };

  return (
    <S.TopWrapper>
      <Field {...createBrand.description} />
      <TextArea value={description} updateValue={setDescription} />
      <Field {...createBrand.tonOfVoice} />
      <ToneOfVoice onSelect={setToneOfVoice} />
      <Field {...createBrand.brandName} />
      <SuggestedInput
        small
        placeholder="Enter Brand Name"
        disableSuggestions={!description || !toneOfVoice}
        value={brandName}
        setValue={updateBrandName}
        getSuggestions={toggleSuggestionBox}
      />
      {showSuggestion && (
        <NameSuggestionModal
          toneOfVoice={toneOfVoice}
          description={description}
          onCancel={toggleSuggestionBox}
          onInsertion={insertBrandName}
        />
      )}
      <StepBelt
        {...rest}
        step={0}
        onNext={onSubmit}
        disabled={!description || !toneOfVoice || !brandName}
      />
    </S.TopWrapper>
  );
};

export default StepOne;
