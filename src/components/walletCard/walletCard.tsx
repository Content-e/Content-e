import "./walletCard.css";

export default function WalletCard({ dueDateCheck, walletTitle, cost }) {
  return (
    <div className="wallet-container">
      <div className="creator-dashboard__bg long-glass-bg"></div>
      <div className="wallet-card-block">
        <div className="wallet-header">{walletTitle}</div>
        {dueDateCheck && (
          <div className="wallet-due-date">
            Next payment processing date 15th March.
          </div>
        )}
        <div className="wallet-cost">{cost}</div>
      </div>
    </div>
  );
}
