import * as S from "./styles/auth.styled";

interface Props {
  handleClose: () => void;
  isOpen: boolean;
}

export default function Modal({ handleClose, isOpen }: Props) {
  if (!isOpen) return <></>;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalTopBar>
          <img src="/images/cross.svg" alt="cross icon" onClick={handleClose} />
        </S.ModalTopBar>
        <img src="/images/checkmark.svg" alt="checkmark icon" />
        <span>
          Thank you for registering, we <br /> will contact you shortly
        </span>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
