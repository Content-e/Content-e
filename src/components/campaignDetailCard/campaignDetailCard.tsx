import "./campaignDetailCard.css";

export default function CampaignDetailCard({ campaign, campaignHeader }) {
  return (
    <div className="creator-dashboard__item colored">
      <div className="creator-dashboard__bg"></div>
      <div className="creator-dashboard__item-block">
        <img
          className="brand-dashboard__item-block-icon"
          alt=""
          src="/images/doc_1_white.svg"
        />
        <div className="creator-dashboard__item-block-key">
          {campaignHeader}
        </div>
        <div className="creator-dashboard__item-block-value">{campaign}</div>
      </div>
    </div>
  );
}
