import { useHistory } from "react-router-dom";
import "./bestPractices.css";
import { AuthRoutes } from "utils";

export default function BestPractices() {
  const history = useHistory();
  return (
    <div className="best-practices-container">
      <div className="best-practices-header">
        <div className="best-practices-label">Best Practices</div>
        <img
          onClick={() => history.push(AuthRoutes.BestPractices)}
          src="/images/morevert.svg"
        />
      </div>
    </div>
  );
}
