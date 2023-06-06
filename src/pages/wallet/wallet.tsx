import { UserProfile } from 'API';
import PaymentCard from 'components/paymentCard/paymentCard';
import PaymentDetails from 'components/paymentCard/paymentDetails';
import WalletCard from 'components/walletCard/walletCard';
import './wallet.css';

interface Props {
  data: UserProfile;
}

export default function Wallet({ data }: Props) {
  return (
    <>
      <div className="wallet-section">
        <WalletCard
          dueDateCheck={true}
          walletTitle="EDC Wallet"
          cost={`$${data.userWallet ? data.userWallet.currentBalance : '0'}`}
        />
        <WalletCard
          dueDateCheck={false}
          walletTitle="Total earned"
          cost={`$${data.userWallet ? data.userWallet.totalEarned : '0'}`}
        />
      </div>
      <div className="wallet-section">
        <PaymentCard />
        <PaymentDetails />
      </div>
    </>
  );
}
