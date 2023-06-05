import { FC, useMemo, useState } from "react";
import { BrandBrief } from "API";
import { ISelectredRequest } from "state/brandBrief";
import CreativeTikTokApproval from "components/creativeTikTokApproval/creativeTikTokApproval";
import Button from "components/ui/button";
import { default as ModalBase } from "components/ui/modal";
import { withProfile } from "state/profileSteps";
import "./creativeDetails.css";
import { ProfileProps } from "utils";

interface Props {
  data?: Array<BrandBrief | null>;
  selectedRequest: ISelectredRequest;
  onBack: () => void;
}

export const CreativeDetails: FC<Props & ProfileProps> = ({
  data,
  selectedRequest,
  onBack,
  profileState,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const brief = useMemo(
    () => data?.find((e) => e?.id === selectedRequest.briefId),
    [data, selectedRequest]
  );
  const request = useMemo(() => {
    const req = brief?.creativeRequests?.items;
    return req?.find((e) => e?.id === selectedRequest.requestId);
  }, [brief]);

  return (
    <div className="brand-dashboard__items creatives-items">
      <div className="brand-dashboard__item statistics-item">
        <div className="statistics-elements">
          <div className="brand-dashboard__item colored">
            <div className="brand-dashboard__bg"></div>
            <div className="brand-dashboard__item-block">
              <img
                className="brand-dashboard__item-block-icon"
                alt=""
                src="/images/doc_1_white.svg"
                onClick={() => setShowDetails(true)}
              />
              <div className="brand-dashboard__item-block-key">
                Creator handle
              </div>
              <div className="brand-dashboard__item-block-value">
                {request?.creativeTiktokHandle
                  ? `@${request?.creativeTiktokHandle}`
                  : ""}
              </div>
            </div>
          </div>
          <div className="brand-dashboard__item colored">
            <div className="brand-dashboard__bg"></div>
            <div className="brand-dashboard__item-block">
              <img alt="" src="" />
              <div className="brand-dashboard__item-block-key">
                Campaign brief name
              </div>
              <div className="brand-dashboard__item-block-value">
                {brief?.BriefName}
              </div>
            </div>
          </div>
          <div className="brand-dashboard__item colored">
            <div className="brand-dashboard__bg"></div>
            <div className="brand-dashboard__item-block">
              <img alt="" src="" />
              <div className="brand-dashboard__item-block-key">View count</div>
              <div className="brand-dashboard__item-block-value">0</div>
            </div>
          </div>
          <div className="brand-dashboard__item colored">
            <div className="brand-dashboard__bg"></div>
            <div className="brand-dashboard__item-block">
              <img alt="" src="" />
              <div className="brand-dashboard__item-block-key">
                Engagement rate
              </div>
              <div className="brand-dashboard__item-block-value">0%</div>
            </div>
          </div>
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
          {profileState.data?.description}
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
      <ModalBase
        title="Creator details"
        isOpen={showDetails}
        handleClose={() => setShowDetails(false)}
      >
        <div className="flex flex-col gap-4 my-6 text-neutral-400">
          <span>
            <b>Creator name:</b> {profileState.data?.name}
          </span>
          <span>
            <b>Creator's TikTok handle:</b>{" "}
            {`@${request?.creativeTiktokHandle}`}
          </span>
          <span>
            <b>Creator's description:</b> {profileState.data?.description}
          </span>
        </div>
        <div className="w-full flex justify-center text-white mt-5">
          <Button onClick={() => setShowDetails(false)}>DONE</Button>
        </div>
      </ModalBase>
    </div>
  );
};

export default withProfile(CreativeDetails);
