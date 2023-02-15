import { FC, useState } from "react";
import { TextArea } from "components/customTextArea";
import { createBrand, BrandType } from "hooks/utils";
import Field from "./components/field";
import * as S from "./styles";
import { StepBelt, SuggestionButton } from "./components";
import { PillarSuggestionModal } from "./modals";

interface Props {
  data?: BrandType | null;
  onSubmit: () => void;
  onPrev: () => void;
  goToStep: (step: number) => void;
}
export const StepTwo: FC<Props> = ({ data, onSubmit, ...rest }) => {
  const { items } = data || {};
  const [pillarDescription, setPillarDescription] = useState(
    items?.pillars || ""
  );
  const [showSuggestion, setShowSuggestion] = useState(false);

  const toggleSuggestionBox = (): void => setShowSuggestion(!showSuggestion);
  const insertPillarDiscription = (text: string): void => {
    setPillarDescription(text);
    toggleSuggestionBox();
  };

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
