import './walletCard.css';

interface Props {
  dueDateCheck: boolean;
  walletTitle: string;
  cost: string;
}

export default function WalletCard({ dueDateCheck, walletTitle, cost }: Props) {
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
  ] as const;
  const d = new Date();
  let monthName = '';
  let day = 1;
  if (d.getDate() < 15) {
    day = 15;
    monthName = month[d.getMonth()] || 'Invalid month';
  } else {
    day = 1;
    monthName = month[(d.getMonth() + 1) % 13] || 'Invalid month';
  }

  return (
    <>
      <div className="wallet-header">{walletTitle}</div>
      {dueDateCheck && (
        <div className="wallet-due-date">
          Next payment processing date is {monthName}, {day}.
        </div>
      )}
      <div className="wallet-cost">{cost}</div>
    </>
  );
}
