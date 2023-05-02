import { FC, useMemo } from "react";
import { BrandBrief } from "API";
import { ISelectredRequest } from "state/brandBrief";
import CreativeDetailsCard from "components/creativeDetailsCard/creativeDetailsCard";
import CreatorProfileDescription from "components/creatorProfileDescription/creatorProfileDescription";
import CreativeTikTokApproval from "components/creativeTikTokApproval/creativeTikTokApproval";
import "./creativeDetails.css";

interface Props {
  data?: Array<BrandBrief | null>;
  selectedRequest: ISelectredRequest;
  onBack: () => void;
}

export const CreativeDetails: FC<Props> = ({
  data,
  selectedRequest,
  onBack,
}) => {
  const brief = useMemo(
    () => data?.find((e) => e?.id === selectedRequest.briefId),
    [data, selectedRequest]
  );
  const request = useMemo(() => {
    const req = brief?.creativeRequests?.items;
    return req?.find((e) => e?.id === selectedRequest.requestId);
  }, [brief]);

  return (
    <>
      <div className="campaign-brief-header-container">
        <div className="campaign-brief-details-text">Creative details</div>
        <div className="back-btn" onClick={onBack}>
          <span className="back-btn-text">Back</span>
        </div>
      </div>
      <div className="campaign-brief-container">
        <CreativeDetailsCard
          campaign={
            request?.creativeTiktokHandle
              ? `@${request?.creativeTiktokHandle}`
              : ""
          }
          campaignHeader="Creator handle"
          iconCheck={false}
        />
        <CreativeDetailsCard
          campaign={brief?.BriefName}
          campaignHeader="Campaign brief name"
          iconCheck={false}
        />
        <CreativeDetailsCard
          campaign="0"
          campaignHeader="View count"
          iconCheck={false}
        />
        <CreativeDetailsCard
          campaign="0%"
          campaignHeader="Engagement rate"
          iconCheck={false}
        />
      </div>
      <div className="creative-profile-approval-section">
        {request?.creatorId && (
          <CreatorProfileDescription creatorId={request.creatorId} />
        )}
        {selectedRequest && (
          <CreativeTikTokApproval
            onClose={onBack}
            requestId={selectedRequest.requestId}
            inspiration={brief?.creativeInspirations}
            createAdPayload={{
              adgroupId: brief?.adgroupId,
              authCode: selectedRequest.authCode,
              creativeRequestId: selectedRequest.requestId,
            }}
          />
        )}
      </div>
    </>
  );
};

export default CreativeDetails;
