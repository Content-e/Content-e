import { useHistory } from "react-router-dom";
import "./paymentCard.css";
import { CreatorRoutes } from "utils";

export default function PaymentCard() {
  const history = useHistory();
  return (
    <div className="payment-card-container">
      <div className="payment-header">
        <div className="payment-title">Payment / Bank details</div>
        <img
          onClick={() => history.push(CreatorRoutes.Wallet)}
          src="/images/morevert.svg"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
