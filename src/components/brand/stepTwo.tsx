import { FC, useState } from "react";
import { CreateBrandProfileInput, GPT_PROMPT } from "API";
import { createBrand } from "utils";
import { TextArea, isPillarSuggestionDisable } from "components";
import { Field } from "./components";
import Modal from "./modals";
import * as S from "./styles";

interface Props {
  data: CreateBrandProfileInput;
  onUpdate: (data: CreateBrandProfileInput) => void;
}
export const StepTwo: FC<Props> = ({ data, onUpdate }) => {
  const { pillars } = data;
  const [showSuggestion, setShowSuggestion] = useState(false);

  const setPillars = (text: string): void =>
    onUpdate({ pillars: [text, text, text, text] });
  const toggleSuggestionBox = (): void => setShowSuggestion(!showSuggestion);
  const insertPillarDiscription = (text: string): void => {
    setPillars(text);
    toggleSuggestionBox();
  };

  return (
    <S.TopWrapper>
      <Field {...createBrand.pillars} />
      <TextArea
        value={pillars?.[0] || ""}
        updateValue={setPillars}
        label="Brand communication pillar 1"
        suggestionBtn={{
          disabled: isPillarSuggestionDisable(data),
          className: "insertMargin",
          onClick: toggleSuggestionBox,
        }}
      />

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
