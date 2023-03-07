import BrandCard from "components/brandCard/brandCard";
import BrandDesciption from "components/brandDescription/brandDescription";
import CampaignDetailCard from "components/campaignDetailCard/campaignDetailCard";
import CampaignSlider from "components/campaignSlider/campaignSlider";

import "./campaignBriefDetails.css";

export default function CampaignBriefDetails() {
  return (
    <>
      <div className="campaign-brief-header-container">
        <div className="campaign-brief-details-text">
          Campaign brief details
        </div>
        <div className="back-btn">
          <span className="back-btn-text">Back</span>
        </div>
      </div>
      <div className="campaign-brief-container">
        <BrandCard />
        <CampaignDetailCard
          campaign="Summer Campaign"
          campaignHeader="Brand Name"
        />
        <CampaignDetailCard campaign="Travel" campaignHeader="Vertical" />
        <CampaignDetailCard campaign="Awareness" campaignHeader="Objective" />
      </div>
      <div className="brand-description">
        <BrandDesciption />
        <CampaignSlider />
      </div>
    </>
  );
}
