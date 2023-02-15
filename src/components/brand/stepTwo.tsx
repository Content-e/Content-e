import { FC, useState } from "react";
import { TextArea } from "components/customTextArea";
import { createBrand, GetUserProfileType } from "hooks/utils";
import Field from "./field";
import * as S from "./styles";
import { StepBelt } from "./stepBelt";
import SuggestionButton from "./suggestionButton";
import PillarSuggestionModal from "./pillarSuggestionModal";

interface Props {
  data?: GetUserProfileType | null;
  onSubmit: () => void;
  onPrev: () => void;
  goToStep: (step: number) => void;
}
export const StepTwo: FC<Props> = ({ data, onSubmit, ...rest }) => {
  const [pillarDescription, setPillarDescription] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const toggleSuggestionBox = (): void => setShowSuggestion(!showSuggestion);
  const insertPillarDiscription = (text: string): void => {
    setPillarDescription(text);
    toggleSuggestionBox();
  };

  console.log(data);
  return (
    <S.TopWrapper>
      <Field {...createBrand.pillars} />
      <S.SubHeading>Brand communication pillar</S.SubHeading>
      <TextArea
        small
        value={pillarDescription}
        updateValue={setPillarDescription}
        placeholder="Brand pillar / value  short description"
      />

      <S.SuggestionBoxPanel>
        <SuggestionButton
          disableSuggestions={false}
          getSuggestions={toggleSuggestionBox}
        />
      </S.SuggestionBoxPanel>

      <S.EmptySpace />

      {showSuggestion && (
        <PillarSuggestionModal
          onCancel={toggleSuggestionBox}
          onInsertion={insertPillarDiscription}
        />
      )}

      <StepBelt
        {...rest}
        step={1}
        onNext={onSubmit}
        disabled={!pillarDescription}
      />
    </S.TopWrapper>
  );
};

export default StepTwo;
