import './creativeDetailsCard.css';

export default function CreativeDetailsCard({
  campaign,
  campaignHeader,
  iconCheck,
}) {
  return (
    <div className="creative-detail-card">
      <div className="creative-title-container">
        <div className="creative-detail-title">{campaignHeader}</div>
        {iconCheck && <img src="/images/table-search.svg" />}
      </div>
      <div className="creative-detail-description">{campaign}</div>
    </div>
  );
}
