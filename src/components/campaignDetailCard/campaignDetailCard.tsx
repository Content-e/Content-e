import GradientCard from "components/gradientCard/gradientCard";
import "./campaignDetailCard.css";

export default function CampaignDetailCard({ campaign, campaignHeader }) {
  return (
    <GradientCard>
      <div className="creator-dashboard__item-block-key">{campaignHeader}</div>
      <div className="creator-dashboard__item-block-value">{campaign}</div>
    </GradientCard>
  );
}
