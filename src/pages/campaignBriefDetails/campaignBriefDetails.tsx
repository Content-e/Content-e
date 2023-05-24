import { FC, useState } from "react";
import BrandCard from "components/brandCard/brandCard";
import BrandDesciption from "components/brandDescription/brandDescription";
import CampaignDetailCard from "components/campaignDetailCard/campaignDetailCard";
import "./campaignBriefDetails.css";
import { BrandBrief } from "API";
import DetailCard from "components/brandCard/detailCard";

interface Props {
  data: BrandBrief;
  onBack: () => void;
}
const CampaignBriefDetails: FC<Props> = ({ onBack, data }) => {
  const [showDetails, handleDetailVisibility] = useState(false);

  return (
    <div className="creator-dashboard__items creatives-items">
      <div className="creator-dashboard__creative-back">
        <button
          onClick={onBack}
          className="creator-dashboard__creative-back-btn"
        >
          Back
        </button>
      </div>
      <div className="brand-dashboard__item statistics-item">
        <div className="statistics-elements">
          <BrandCard
            briefName={data.BriefName}
            onShowDetails={(): void => handleDetailVisibility(true)}
          />
          <CampaignDetailCard
            campaign={data.brandProfile?.name}
            campaignHeader="Brand Name"
          />
          <CampaignDetailCard
            campaign={data.vertical}
            campaignHeader="Vertical"
          />
          <CampaignDetailCard
            campaign={data.objective}
            campaignHeader="Objective"
          />
        </div>
      </div>
      <BrandDesciption
        id={data.id}
        detail={data.brandBriefDetails}
        videoUrls={data.creativeInspirations}
        isVideoLinked={!!data.creativeRequests?.items.length}
      />
      {data.brandProfile && showDetails && (
        <DetailCard
          data={data.brandProfile}
          onCross={(): void => handleDetailVisibility(false)}
        />
      )}
    </div>
  );
};

export default CampaignBriefDetails;
