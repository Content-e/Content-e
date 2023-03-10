import { useHistory } from "react-router-dom";
import "./paymentCard.css";
import { AuthRoutes } from "utils";

export default function PaymentCard() {
  const history = useHistory();
  return (
    <div className="payment-card-container">
      <div className="payment-header">
        <div className="payment-title">Payment / Bank details</div>
        <img
          onClick={() => history.push(AuthRoutes.Wallet)}
          src="/images/morevert.svg"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
