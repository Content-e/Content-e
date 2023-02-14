import { ToneOptions } from "hooks/utils";
import { FC, useState } from "react";
import { Dropdown } from "react-bootstrap";
import * as S from "./styles";

interface Props {
  onSelect: (text: string) => void;
}

export const ToneOfVoice: FC<Props> = ({ onSelect }) => {
  const [currentTone, setCurrentTone] = useState("");

  const handleClick = (text: string): void => {
    setCurrentTone(text);
    onSelect(text);
  };

  return (
    <S.DropdownTag className={currentTone ? "option__selected" : ""}>
      <Dropdown.Toggle variant="success" id="dropdown-for-salary">
        <span>{currentTone || "Select brand tone of voice"}</span>
        <S.IconDown>
          <img src="/images/icon-chevron-down.svg" alt="chevron icon" />
        </S.IconDown>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {ToneOptions.map((text) => (
          <Dropdown.Item
            className={currentTone === text ? "active" : ""}
            onClick={(): void => handleClick(text)}
            key={`${text}toneOfVoice`}
          >
            {text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </S.DropdownTag>
  );
};

export default ToneOfVoice;
