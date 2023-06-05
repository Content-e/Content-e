import { FC, useMemo, useState } from "react";
import { BrandBrief } from "API";
import { ISelectredRequest } from "state/brandBrief";
import CreativeTikTokApproval from "components/creativeTikTokApproval/creativeTikTokApproval";
import Button from "components/ui/button";
import { default as ModalBase } from "components/ui/modal";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import GradientCard from "components/gradientCard/gradientCard";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

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
      <section>
        <div className="flex justify-end">
          <Button onClick={history.goBack} variant="secondary">
            Back
          </Button>
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-1 gap-8 w-full my-8">
          <GradientCard>
            <div className="flex justify-between">
              Creator handle
              <img
                className="brand-dashboard__item-block-icon"
                alt=""
                src="/images/doc_1_white.svg"
                onClick={() => setShowDetails(true)}
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
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="paper w-full">
          <h1 className="text-lg text-primary font-bold">Creator profile</h1>
          <p>{profileState.data?.description}</p>
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
          <div className="flex flex-col gap-4 mt-6 text-neutral-400">
            <span>
              <b>Creator name:</b> {profileState.data?.name}
            </span>
            <span>
              <b>Creator's TikTok handle:</b>{" "}
              {request?.creativeTiktokHandle
                ? `@${request?.creativeTiktokHandle}`
                : ""}
            </span>
            <span>
              <b>Creator's description:</b> {profileState.data?.description}
            </span>
          </div>
          <div className="w-full flex justify-center text-white mt-5">
            <Button className="px-24" onClick={() => setShowDetails(false)}>
              DONE
            </Button>
          </div>
        </ModalBase>
      </section>
    </>
  );
};

export default withProfile(CreativeDetails);
