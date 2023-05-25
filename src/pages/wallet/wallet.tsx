import PaymentCard from "components/paymentCard/paymentCard";
import PaymentDetails from "components/paymentCard/paymentDetails";
import WalletCard from "components/walletCard/walletCard";

import "./wallet.css";

export default function Wallet() {
  return (
    <>
      <div className="wallet-section">
        <WalletCard
          dueDateCheck={true}
          walletTitle="EDC Wallet"
          cost="$12.34"
        />
        <WalletCard
          dueDateCheck={false}
          walletTitle="Total earned"
          cost="$124.68"
        />
      </div>
      <div className="wallet-section">
        <PaymentCard />
        <PaymentDetails />
      </div>
    </>
  );
}
