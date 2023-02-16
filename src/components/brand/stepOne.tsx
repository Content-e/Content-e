import { FC, useState } from "react";
import { CreateBrandProfileInput } from "API";
import { TextArea } from "components/customTextArea";
import { createBrand } from "hooks/utils";
import Field from "./components/field";
import * as S from "./styles";
import { NameSuggestionModal } from "./modals";
import { SuggestedInput, ToneOfVoice } from "./components";

interface Props {
  data: CreateBrandProfileInput;
  onUpdate: (data: CreateBrandProfileInput) => void;
}
export const StepOne: FC<Props> = ({ data, onUpdate }) => {
  const { description, toneVoice, name } = data;
  const [showSuggestion, setShowSuggestion] = useState(false);

  const setDescript = (text: string): void => onUpdate({ description: text });
  const setTonVoice = (text: string): void => onUpdate({ toneVoice: [text] });
  const setName = (text: string): void => onUpdate({ name: text });

  const toggleSuggestionBox = (): void => setShowSuggestion(!showSuggestion);
  const insertBrandName = (text: string): void => {
    setName(text);
    toggleSuggestionBox();
  };

  return (
    <S.TopWrapper>
      <Field {...createBrand.description} />
      <TextArea value={description || ""} updateValue={setDescript} />
      <Field {...createBrand.tonOfVoice} />
      <ToneOfVoice currentTone={toneVoice?.[0]} onSelect={setTonVoice} />
      <Field {...createBrand.brandName} />
      <SuggestedInput
        small
        placeholder="Enter Brand Name"
        disableSuggestions={!description || !toneVoice}
        value={name || ""}
        setValue={setName}
        getSuggestions={toggleSuggestionBox}
      />
      {showSuggestion && (
        <NameSuggestionModal
          toneOfVoice={toneVoice?.[0] || ""}
          description={description || ""}
          onCancel={toggleSuggestionBox}
          onInsertion={insertBrandName}
        />
      )}
    </S.TopWrapper>
  );
};

export default StepOne;
