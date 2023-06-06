import { FC, useState } from 'react';
import CreativeTikTokApproval from 'components/creativeTikTokApproval/creativeTikTokApproval';
import Button from 'components/ui/button';
import { default as ModalBase } from 'components/ui/modal';
import { withProfile } from 'state/profileSteps';
import { ProfileProps } from 'utils';
import GradientCard from 'components/gradientCard/gradientCard';
import { RequestWithBrief } from 'components/creativesTable/creativesTable';

interface Props {
  selectedRequest: RequestWithBrief;
  onBack: () => void;
}

export const CreativeDetails: FC<Props & ProfileProps> = ({
  selectedRequest,
  onBack,
  profileState,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <section>
        <div className="flex justify-end">
          <Button onClick={onBack} variant="secondary">
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
              {selectedRequest?.creativeTiktokHandle
                ? `@${selectedRequest?.creativeTiktokHandle}`
                : ''}
            </h3>
          </GradientCard>
          <GradientCard>
            Objective
            <h3 className="text-2xl font-bold">
              {selectedRequest.brief?.BriefName}
            </h3>
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
            id={selectedRequest?.id}
            onClose={onBack}
            request={selectedRequest}
            inspiration={selectedRequest.brief?.creativeInspirations}
            createAdPayload={{
              adgroupId: selectedRequest.brief?.adgroupId,
              authCode: 'TODO', // What should be here?
              creativeRequestId: selectedRequest.id,
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
              <b>Creator's TikTok handle:</b>{' '}
              {selectedRequest?.creativeTiktokHandle
                ? `@${selectedRequest?.creativeTiktokHandle}`
                : ''}
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
