import "./campaignDetailCard.css";

export default function CampaignDetailCard({ campaign, campaignHeader }) {
  return (
    <div className="creator-dashboard__item colored">
      <div className="creator-dashboard__bg"></div>
      <div className="creator-dashboard__item-block">
        <div className="creator-dashboard__item-block-key">
          {campaignHeader}
        </div>
        <div className="creator-dashboard__item-block-value">{campaign}</div>
      </div>
    </div>
  );
}
