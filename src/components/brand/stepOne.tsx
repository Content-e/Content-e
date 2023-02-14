import { FC, useState } from "react";
import { TextArea } from "components/customTextArea";
import { createBrand, GetUserProfileType } from "hooks/utils";
import BrandName from "./brandName";
import Field from "./field";
import * as S from "./styles";
import ToneOfVoice from "./toneOfVoice";
import NameSuggestionModal from "./nameSuggestionModal";

interface Props {
  data?: GetUserProfileType | null;
  onSubmit: () => void;
  goToStep: (step: number) => void;
}
export const StepOne: FC<Props> = ({ data }) => {
  const [description, setDescription] = useState("");
  const [toneOfVoice, setToneOfVoice] = useState("");
  const [brandName, updateBrandName] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const toggleSuggestionBox = (): void => setShowSuggestion(!showSuggestion);
  const insertBrandName = (text: string): void => {
    updateBrandName(text);
    toggleSuggestionBox();
  };

  console.log(data);
  return (
    <S.TopWrapper>
      <Field {...createBrand.description} />
      <TextArea
        value={description}
        updateValue={setDescription}
        placeholder="Brand pillar / value  short description"
      />
      <Field {...createBrand.tonOfVoice} />
      <ToneOfVoice onSelect={setToneOfVoice} />
      <Field {...createBrand.brandName} />
      <BrandName
        disableSuggestions={!description || !toneOfVoice}
        brandName={brandName}
        updateBrandName={updateBrandName}
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
    </S.TopWrapper>
  );
};

export default StepOne;
