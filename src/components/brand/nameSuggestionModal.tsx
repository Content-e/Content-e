import { FullPageLoader } from "components/loader";
import { FC, useEffect, useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import * as S from "./styles";

interface Props {
  toneOfVoice: string;
  description: string;
  onCancel: () => void;
  onInsertion: (text: string) => void;
}
export const NameSuggestionModal: FC<Props> = ({
  toneOfVoice,
  description,
  onCancel,
  onInsertion,
}) => {
  const [selectedName, setSelectedName] = useState("");
  const [responseNames, setResponseNames] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);

  const refreshResponse = (): void => {
    setLoading(true);
    setTimeout(() => {
      setResponseNames(["first name", "second name", "third name"]);
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    refreshResponse();
  }, []);

  const suggestionResponse = useMemo(() => {
    if (!responseNames.length)
      return <S.NoSuggestion>No Suggestions</S.NoSuggestion>;

    return (
      <S.SuggestionCanvas>
        {responseNames.map((name, index) => (
          <S.SuggestionBox
            key={index}
            className={name === selectedName ? "active" : ""}
            onClick={(): void => setSelectedName(name)}
          >
            {name}
          </S.SuggestionBox>
        ))}
      </S.SuggestionCanvas>
    );
  }, [responseNames, loading, selectedName]);

  console.log(toneOfVoice, description);
  return (
    <S.ModalWrapper
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show
      onHide={onCancel}
    >
      <Modal.Body>
        <S.ModalTitle>Brand name suggestions</S.ModalTitle>
        <S.CrossIcon onClick={onCancel}>
          <img src={"/images/circle-cross.svg"} alt="cross-icon" />
        </S.CrossIcon>
        <S.ModalInputWrapper>
          {loading ? (
            <S.LoaderCanvas>
              <FullPageLoader />
            </S.LoaderCanvas>
          ) : (
            suggestionResponse
          )}
        </S.ModalInputWrapper>
        <S.ModalBtnWrapper>
          <S.OutlineBtn onClick={refreshResponse}>Refresh</S.OutlineBtn>
          <S.PrimaryBtn onClick={(): void => onInsertion(selectedName)}>
            Done
          </S.PrimaryBtn>
        </S.ModalBtnWrapper>
      </Modal.Body>
    </S.ModalWrapper>
  );
};

export default NameSuggestionModal;
