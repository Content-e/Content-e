import { Spinner } from "react-bootstrap";

export const FullPageLoader: React.FC = () => {
  return (
    <Spinner
      animation="border"
      className="d-flex ml-auto mr-auto mt-5 spinner-border"
      variant="primary"
    />
  );
};
export default FullPageLoader;
