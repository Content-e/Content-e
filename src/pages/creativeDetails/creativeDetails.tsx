import CreativeDetailsCard from "components/creativeDetailsCard/creativeDetailsCard";
import CreatorProfileDescription from "components/creatorProfileDescription/creatorProfileDescription";
import CreativeTikTokApproval from "components/creativeTikTokApproval/creativeTikTokApproval";

import "./creativeDetails.css";

export default function CreativeDetails() {
  return (
    <>
      <div className="campaign-brief-header-container">
        <div className="campaign-brief-details-text">Creative details</div>
        <div className="back-btn">
          <span className="back-btn-text">Back</span>
        </div>
      </div>
      <div className="campaign-brief-container">
        <CreativeDetailsCard
          campaign="@creatorhandle"
          campaignHeader="Creator handle"
          iconCheck={true}
        />
        <CreativeDetailsCard
          campaign="Summer Campaign"
          campaignHeader="Campaign brief name"
          iconCheck={false}
        />
        <CreativeDetailsCard
          campaign="1,284"
          campaignHeader="View count"
          iconCheck={false}
        />
        <CreativeDetailsCard
          campaign="4.8%"
          campaignHeader="Engagement rate"
          iconCheck={false}
        />
      </div>
      <div className="creative-profile-approval-section">
        <CreatorProfileDescription />
        <CreativeTikTokApproval />
      </div>
    </>
  );
}
