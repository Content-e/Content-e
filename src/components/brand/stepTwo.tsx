import { FC, useState } from "react";
import { BrandProfile } from "API";
import { TextArea } from "components/customTextArea";
import { createBrand } from "hooks/utils";
import Field from "./components/field";
import * as S from "./styles";
import { StepBelt, SuggestionButton } from "./components";
import { PillarSuggestionModal } from "./modals";

interface Props {
  data?: BrandProfile;
  onSubmit: () => void;
  onPrev: () => void;
  goToStep: (step: number) => void;
}
export const StepTwo: FC<Props> = ({ data, onSubmit, ...rest }) => {
  const [pillarDescription, setPillarDescription] = useState<
    Array<string | null>
  >(data?.pillars || []);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const toggleSuggestionBox = (): void => setShowSuggestion(!showSuggestion);
  const insertPillarDiscription = (text: string): void => {
    setPillarDescription([text]);
    toggleSuggestionBox();
  };

  return (
    <S.TopWrapper>
      <Field {...createBrand.pillars} />
      <S.SubHeading>Brand communication pillar</S.SubHeading>
      <TextArea
        small
        value={pillarDescription[0] || ""}
        updateValue={(text: string): void => setPillarDescription([text])}
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
