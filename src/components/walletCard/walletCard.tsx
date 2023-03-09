import "./walletCard.css";

export default function WalletCard({ dueDateCheck, walletTitle, cost }) {
  return (
    <div className="wallet-container">
      <div className="wallet-header">{walletTitle}</div>
      <div className="wallet-cost">{cost}</div>
      {dueDateCheck && (
        <div className="wallet-due-date">
          Next payment processing date 15th March.
        </div>
      )}
    </div>
  );
}
