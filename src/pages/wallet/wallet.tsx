import PaymentCard from "components/paymentCard/paymentCard";
import PaymentDetails from "components/paymentCard/paymentDetails";
import WalletCard from "components/walletCard/walletCard";
import "./wallet.css";

export default function Wallet({ data }) {
  console.log("data");
  console.log(data);
  return (
    <>
      <div className="wallet-section">
        <WalletCard
          dueDateCheck={true}
          walletTitle="EDC Wallet"
          cost={`$${data.userWallet ? data.userWallet.currentBalance : "0"}`}
        />
        <WalletCard
          dueDateCheck={false}
          walletTitle="Total earned"
          cost={`$${data.userWallet ? data.userWallet.totalEarned : "0"}`}
        />
      </div>
      <div className="wallet-section">
        <PaymentCard />
        <PaymentDetails />
      </div>
    </>
  );
}
