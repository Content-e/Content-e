import { FC, useState } from "react";
import { CreateBrandProfileInput } from "API";
import { TextArea } from "components/customTextArea";
import { createBrand } from "hooks/utils";
import Field from "./components/field";
import * as S from "./styles";
import { SuggestedInput, SuggestionButton } from "./components";
import { StrapLineSuggestionModal, MissionSuggestionModal } from "./modals";

interface Props {
  data: CreateBrandProfileInput;
  onUpdate: (data: CreateBrandProfileInput) => void;
}
export const StepThree: FC<Props> = ({ data, onUpdate }) => {
  const { internalMission, strapLine } = data;
  const [showMissionSuggestion, setShowMissionSuggestion] = useState(false);
  const [showStrapSuggestion, setShowStrapSuggestion] = useState(false);

  const setMission = (text: string): void =>
    onUpdate({ internalMission: text });
  const setStrapLine = (text: string): void => onUpdate({ strapLine: text });

  const toggleMissionSuggestionBox = (): void =>
    setShowMissionSuggestion(!showMissionSuggestion);
  const toggleStrapSuggestionBox = (): void =>
    setShowStrapSuggestion(!showStrapSuggestion);

  const insertMissionStatement = (text: string): void => {
    setMission(text);
    toggleMissionSuggestionBox();
  };

  const insertStrapLine = (text: string): void => {
    setStrapLine(text);
    toggleStrapSuggestionBox();
  };

  return (
    <S.TopWrapper>
      <Field {...createBrand.missionStatement} />
      <TextArea value={internalMission || ""} updateValue={setMission} />

      <S.SuggestionBoxPanel>
        <SuggestionButton
          disableSuggestions={false}
          getSuggestions={toggleMissionSuggestionBox}
        />
      </S.SuggestionBoxPanel>

      <Field {...createBrand.strapLine} />
      <SuggestedInput
        value={strapLine || ""}
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
    </S.TopWrapper>
  );
};

export default StepThree;
