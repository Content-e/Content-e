import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import BrandCard from "components/brandCard/brandCard";
import BrandDesciption from "components/brandDescription/brandDescription";
import CampaignDetailCard from "components/campaignDetailCard/campaignDetailCard";
import "./campaignBriefDetails.css";
import { BrandBrief } from "API";
import DetailCard from "components/brandCard/detailCard";
import Modal from "components/authentication/modal";
import { AuthRoutes } from "utils";
import Button from "components/ui/button";

interface Props {
  data: BrandBrief;
  onBack: () => void;
  status?: string;
}
const CampaignBriefDetails: FC<Props> = ({ onBack, data, status }) => {
  const history = useHistory();
  const [showDetails, handleDetailVisibility] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      <div className="creator-dashboard__items creatives-items">
        <div className="creator-dashboard__creative-back">
          <Button onClick={onBack} variant="secondary">
            Back
          </Button>
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
        {data.brandProfile && showDetails && (
          <DetailCard
            data={data.brandProfile}
            onCross={(): void => handleDetailVisibility(false)}
          />
        )}
        <Modal
          isOpen={showSuccessModal}
          content="Your creative has been successfully linked!"
          handleClose={() => setShowSuccessModal(false)}
          actionLabel="BACK TO DASHBOARD"
          actionHandler={() => history.push(AuthRoutes.Dashboard)}
          type="creator"
        />
      </div>
      <BrandDesciption
        id={data.id}
        detail={data.brandBriefDetails}
        videoUrls={data.creativeInspirations}
        isVideoLinked={!!data.creativeRequests?.items.length}
        showSuccessModal={() => setShowSuccessModal(true)}
        status={status}
      />
    </>
  );
};

export default CampaignBriefDetails;
