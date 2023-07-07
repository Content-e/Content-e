import './paymentCard.css';

export default function PaymentDetails() {
  return (
    <div className="brand-dashboard__item creator-dashboard-full">
      <div className="brand-dashboard__top">
        <div className="brand-dashboard__top-title">Payment / Bank details</div>
      </div>
      <div className="brand-dashboard__profile-inputs">
        <div className="brand-dashboard__profile-group">
          <div className="brand-dashboard__profile-label">
            Bank account Number
          </div>
          <input className="brand-dashboard__profile-input" type="text" />
        </div>
        <div className="brand-dashboard__profile-group">
          <div className="brand-dashboard__profile-label">Full Address</div>
          <input className="brand-dashboard__profile-input" type="text" />
        </div>
        <button className="brand-dashboard__profile-button">
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}
