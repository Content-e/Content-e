import * as S from './styles/auth.styled';
import { ReactNode, useState } from 'react';

interface Props {
  handleClose: () => void;
  isOpen: boolean;
  content: string;
  type?: string;
  actionHandler?: () => void;
  actionLabel?: string;
  withOutLabel?: boolean;
  withCheckbox?: boolean;
  checkBoxText?: ReactNode | ReactNode[];
  title?: string;
}

export default function Modal({
  title,
  handleClose,
  isOpen,
  content,
  type,
  actionHandler,
  actionLabel,
  withOutLabel,
  withCheckbox,
  checkBoxText,
}: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  if (!isOpen) return <></>;

  return (
    <S.ModalOverlay>
      <S.ModalContent $type={type || ''} $withCheckBox={!!withCheckbox}>
        <S.ModalTopBar>
          <img src="/images/cross.svg" alt="cross icon" onClick={handleClose} />
        </S.ModalTopBar>
        {!withOutLabel ? (
          <img
            src={`/images/checkmark${type ? `-${type}` : ''}.svg`}
            alt="checkmark icon"
          />
        ) : null}
        {title ? <h1>{title}</h1> : null}
        <span>{content}</span>
        {withCheckbox ? (
          <S.ModalCheckBox>
            <input
              type="checkbox"
              onChange={(item) => setIsChecked(item.target.checked)}
            />
            {checkBoxText}
          </S.ModalCheckBox>
        ) : null}
        {actionLabel && (
          <S.ModalActionButton
            disabled={withCheckbox ? !isChecked : false}
            $type={type || ''}
            onClick={actionHandler}
          >
            {actionLabel}
          </S.ModalActionButton>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
