import "./campaignDetailCard.css";

export default function CampaignDetailCard({ campaign, campaignHeader }) {
  return (
    <div className="campaign-detail-card">
      <div className="campaign-detail-title">{campaignHeader}</div>
      <div className="campaign-detail-description">{campaign}</div>
    </div>
  );
}
