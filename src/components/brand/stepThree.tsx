import { FC, useState } from "react";
import { BrandProfile } from "API";
import { TextArea } from "components/customTextArea";
import { createBrand } from "hooks/utils";
import Field from "./components/field";
import * as S from "./styles";
import { StepBelt, SuggestedInput, SuggestionButton } from "./components";
import { StrapLineSuggestionModal, MissionSuggestionModal } from "./modals";

interface Props {
  data?: BrandProfile;
  onSubmit: () => void;
  onPrev: () => void;
  goToStep: (step: number) => void;
}
export const StepThree: FC<Props> = ({ data, onSubmit, ...rest }) => {
  const [missionStatement, setMissionStatement] = useState(
    data?.internalMission || ""
  );
  const [showMissionSuggestion, setShowMissionSuggestion] = useState(false);
  const [strapLine, setStrapLine] = useState(data?.strapLine || "");
  const [showStrapSuggestion, setShowStrapSuggestion] = useState(false);

  const toggleMissionSuggestionBox = (): void =>
    setShowMissionSuggestion(!showMissionSuggestion);
  const toggleStrapSuggestionBox = (): void =>
    setShowStrapSuggestion(!showStrapSuggestion);

  const insertMissionStatement = (text: string): void => {
    setMissionStatement(text);
    toggleMissionSuggestionBox();
  };

  const insertStrapLine = (text: string): void => {
    setStrapLine(text);
    toggleStrapSuggestionBox();
  };

  return (
    <S.TopWrapper>
      <Field {...createBrand.missionStatement} />
      <TextArea value={missionStatement} updateValue={setMissionStatement} />

      <S.SuggestionBoxPanel>
        <SuggestionButton
          disableSuggestions={false}
          getSuggestions={toggleMissionSuggestionBox}
        />
      </S.SuggestionBoxPanel>

      <Field {...createBrand.strapLine} />
      <SuggestedInput
        value={strapLine}
        setValue={setStrapLine}
        getSuggestions={toggleStrapSuggestionBox}
      />

      {showMissionSuggestion && (
        <MissionSuggestionModal
          onCancel={toggleMissionSuggestionBox}
          onInsertion={insertMissionStatement}
        />
      )}
      {showStrapSuggestion && (
        <StrapLineSuggestionModal
          onCancel={toggleStrapSuggestionBox}
          onInsertion={insertStrapLine}
        />
      )}

      <StepBelt
        {...rest}
        step={2}
        onNext={onSubmit}
        disabled={!missionStatement || !strapLine}
      />
    </S.TopWrapper>
  );
};

export default StepThree;
