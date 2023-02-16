import { FC, useState } from "react";
import { CreateBrandProfileInput } from "API";
import { TextArea } from "components/customTextArea";
import { createBrand } from "hooks/utils";
import Field from "./components/field";
import * as S from "./styles";
import { SuggestionButton } from "./components";
import { PillarSuggestionModal } from "./modals";

interface Props {
  data: CreateBrandProfileInput;
  onUpdate: (data: CreateBrandProfileInput) => void;
}
export const StepTwo: FC<Props> = ({ data, onUpdate }) => {
  const { pillars } = data;
  const [showSuggestion, setShowSuggestion] = useState(false);

  const setPillars = (text: string): void => onUpdate({ pillars: [text] });
  const toggleSuggestionBox = (): void => setShowSuggestion(!showSuggestion);
  const insertPillarDiscription = (text: string): void => {
    setPillars(text);
    toggleSuggestionBox();
  };

  return (
    <S.TopWrapper>
      <Field {...createBrand.pillars} />
      <S.SubHeading>Brand communication pillar</S.SubHeading>
      <TextArea
        small
        value={pillars?.[0] || ""}
        updateValue={setPillars}
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
    </S.TopWrapper>
  );
};

export default StepTwo;
