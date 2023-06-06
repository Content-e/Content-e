import { Spinner } from 'react-bootstrap';
import * as S from './styles';

export const FullPageLoader: React.FC = () => {
  return (
    <S.LoadingWrapper>
      <Spinner
        animation="border"
        className="spinner-border"
        variant="primary"
      />
    </S.LoadingWrapper>
  );
};
export default FullPageLoader;
