import { FC, useEffect, useMemo } from "react";
import { BrandBrief, CreativeRequest } from "API";
import { ISelectredRequest } from "state/brandBrief";
import CreativeDetailsCard from "components/creativeDetailsCard/creativeDetailsCard";
import CreatorProfileDescription from "components/creatorProfileDescription/creatorProfileDescription";
import CreativeTikTokApproval from "components/creativeTikTokApproval/creativeTikTokApproval";
import "./creativeDetails.css";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import { useCreateAd } from "hooks";

interface Props {
  data?: Array<BrandBrief | null>;
  selectedRequest: ISelectredRequest;
  onBack: () => void;
}

export const CreativeDetails: FC<Props & ProfileProps> = ({
  data,
  selectedRequest,
  onBack,
  profileState: { data: profile },
}) => {
  const {
    createAd,
    loading: createAdLoading,
    data: createAdResponse,
  } = useCreateAd();

  const brief = useMemo(
    () => data?.find((e) => e?.id === selectedRequest.briefId),
    [data, selectedRequest]
  );
  const request = useMemo(() => {
    const req = brief?.creativeRequests?.items;
    return req?.find((e) => e?.id === selectedRequest.requestId);
  }, [brief]);

  const createNewAd = (response?: CreativeRequest): void => {
    if (
      response &&
      profile?.tiktokAccountAccess &&
      brief?.adgroupId &&
      selectedRequest.authCode
    ) {
      try {
        const { access_token: token, advertiser_id: advId } = JSON.parse(
          profile.tiktokAccountAccess
        );
        const input = {
          token,
          advId,
          adgroupId: brief.adgroupId,
          authCode: selectedRequest.authCode,
          creativeRequestId: selectedRequest.requestId,
        };
        createAd({ variables: { ...input } });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (createAdResponse && !createAdLoading) onBack();
  }, [createAdLoading, createAdResponse]);

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
          // TODO: icon click don't take it to anywhere
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
            onClose={createNewAd}
            requestId={selectedRequest.requestId}
            inspiration={brief?.creativeInspirations}
          />
        )}
      </div>
    </>
  );
};

export default withProfile(CreativeDetails);
