import './walletCard.css';

export default function WalletCard({ dueDateCheck, walletTitle, cost }) {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date();
  let monthName = '';
  let day = 1;
  if (d.getDate() < 15) {
    day = 15;
    monthName = month[d.getMonth()];
  } else {
    day = 1;
    monthName = month[(d.getMonth() + 1) % 13];
  }

  return (
    <div className="wallet-container">
      <div className="creator-dashboard__bg long-glass-bg"></div>
      <div className="wallet-card-block">
        <div className="wallet-header">{walletTitle}</div>
        {dueDateCheck && (
          <div className="wallet-due-date">
            Next payment processing date is {monthName}, {day}.
          </div>
        )}
        <div className="wallet-cost">{cost}</div>
      </div>
    </div>
  );
}
