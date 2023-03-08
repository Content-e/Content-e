import { FC } from "react";
import BrandCard from "components/brandCard/brandCard";
import BrandDesciption from "components/brandDescription/brandDescription";
import CampaignDetailCard from "components/campaignDetailCard/campaignDetailCard";
import CampaignSlider from "components/campaignSlider/campaignSlider";
import "./campaignBriefDetails.css";
import { BrandBrief } from "API";

interface Props {
  data: BrandBrief;
  onBack: () => void;
}
const CampaignBriefDetails: FC<Props> = ({ onBack, data }) => {
  return (
    <>
      <div className="campaign-brief-header-container">
        <div className="campaign-brief-details-text">
          Campaign brief details
        </div>
        <div className="back-btn" onClick={onBack}>
          <span className="back-btn-text">Back</span>
        </div>
      </div>
      <div className="campaign-brief-container">
        <BrandCard briefName={data.BriefName} />
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
      <div className="brand-description">
        <BrandDesciption id={data.id} detail={data.brandBriefDetails} />
        <CampaignSlider videoUrls={data.creativeInspirations} />
      </div>
    </>
  );
};

export default CampaignBriefDetails;
