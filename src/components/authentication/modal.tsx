import * as S from './styles/auth.styled';

interface Props {
  handleClose: () => void;
  isOpen: boolean;
  content: string;
  type?: string;
  actionHandler?: () => void;
  actionLabel?: string;
}

export default function Modal({
  handleClose,
  isOpen,
  content,
  type,
  actionHandler,
  actionLabel,
}: Props) {
  if (!isOpen) return <></>;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalTopBar>
          <img src="/images/cross.svg" alt="cross icon" onClick={handleClose} />
        </S.ModalTopBar>
        <img
          src={`/images/checkmark${type ? `-${type}` : ''}.svg`}
          alt="checkmark icon"
        />
        <span>{content}</span>
        {actionLabel && (
          <S.ModalActionButton $type={type || ''} onClick={actionHandler}>
            {actionLabel}
          </S.ModalActionButton>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
