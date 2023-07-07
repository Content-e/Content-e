import './creativeDetailsCard.css';

interface Props {
  campaign: number | string;
  campaignHeader: string;
}

export default function CreativeDetailsCard({
  campaign,
  campaignHeader,
}: Props) {
  return (
    <div className="creative-detail-card">
      <div className="creative-title-container">
        <div className="creative-detail-title">{campaignHeader}</div>
      </div>
      <div className="creative-detail-description">{campaign}</div>
    </div>
  );
}
