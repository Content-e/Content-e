import { FC, useMemo } from "react";
import { BrandBrief } from "API";
import { ISelectredRequest } from "state/brandBrief";
import { getUserProfile } from "hooks";
import CreativeTikTokApproval from "components/creativeTikTokApproval/creativeTikTokApproval";
import "./creativeDetails.css";
import GradientCard from "components/gradientCard/gradientCard";

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
  const { loading, profileData } = getUserProfile();

  const brief = useMemo(
    () => data?.find((e) => e?.id === selectedRequest.briefId),
    [data, selectedRequest]
  );
  const request = useMemo(() => {
    const req = brief?.creativeRequests?.items;
    return req?.find((e) => e?.id === selectedRequest.requestId);
  }, [brief]);
  const description = useMemo(() => {
    if (!loading && profileData) return profileData.description;
    return "";
  }, [loading, profileData]);

  return (
    <div className="brand-dashboard__items creatives-items">
      <div className="brand-dashboard__item statistics-item">
        <div className="statistics-elements">
          <GradientCard>
            <div className="flex justify-between">
              Creator handle
              <img
                className="brand-dashboard__item-block-icon"
                alt=""
                src="/images/doc_1_white.svg"
                onClick={() => console.log("TODO: toggle some modal here")}
              />
            </div>
            <h3 className="text-2xl font-bold">
              {request?.creativeTiktokHandle
                ? `@${request?.creativeTiktokHandle}`
                : ""}
            </h3>
          </GradientCard>
          <GradientCard>
            Objective
            <h3 className="text-2xl font-bold">{brief?.BriefName}</h3>
          </GradientCard>
          <GradientCard>
            View count
            <h3 className="text-2xl font-bold">0</h3>
          </GradientCard>
          <GradientCard>
            Engagement rate
            <h3 className="text-2xl font-bold">0%</h3>
          </GradientCard>
        </div>
      </div>
      <div className="brand-dashboard__item half_1">
        <div className="brand-dashboard__top">
          <div className="brand-dashboard__top-title">Creator profile</div>
          <img
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots.svg"
          />
        </div>
        <div className="brand-dashboard__text dark short-gap">
          {description}
        </div>
      </div>
      {selectedRequest && (
        <CreativeTikTokApproval
          id={request?.id}
          onClose={onBack}
          request={request}
          inspiration={brief?.creativeInspirations}
          createAdPayload={{
            adgroupId: brief?.adgroupId,
            authCode: selectedRequest.authCode,
            creativeRequestId: selectedRequest.requestId,
          }}
        />
      )}
    </div>
  );
};

export default CreativeDetails;
