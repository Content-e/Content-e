import { UserProfile } from 'API';
import PaymentCard from 'components/paymentCard/paymentCard';
import PaymentDetails from 'components/paymentCard/paymentDetails';
import WalletCard from 'components/walletCard/walletCard';
import GradientCard from 'components/gradientCard/gradientCard';
import './wallet.css';

interface Props {
  data: UserProfile;
}

export default function Wallet({ data }: Props) {
  return (
    <>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 w-full mb-8">
        <GradientCard>
          <WalletCard
            dueDateCheck={true}
            walletTitle="EDC Wallet"
            cost={`$${data.userWallet ? data.userWallet.currentBalance : '0'}`}
          />
        </GradientCard>
        <GradientCard>
          <WalletCard
            dueDateCheck={false}
            walletTitle="Total earned"
            cost={`$${data.userWallet ? data.userWallet.totalEarned : '0'}`}
          />
        </GradientCard>
      </div>
      <div className="wallet-section">
        <PaymentCard />
        <PaymentDetails />
      </div>
    </>
  );
}
