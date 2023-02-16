import { FC, useState } from "react";
import { CreateBrandProfileInput, GPT_PROMPT } from "API";
import { createBrand } from "utils";
import { TextArea } from "components";
import {
  Field,
  SuggestionButton,
  isPillarSuggestionDisable,
} from "./components";
import Modal from "./modals";
import * as S from "./styles";

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
          disableSuggestions={isPillarSuggestionDisable(data)}
          getSuggestions={toggleSuggestionBox}
        />
      </S.SuggestionBoxPanel>

      <S.EmptySpace />

      {showSuggestion && (
        <Modal
          data={data}
          title="Brand pillar suggestions"
          prompType={GPT_PROMPT.BRAND_PILLARS}
          onCancel={toggleSuggestionBox}
          onInsertion={insertPillarDiscription}
        />
      )}
    </S.TopWrapper>
  );
};

export default StepTwo;
