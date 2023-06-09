import { CreateAdsMutationVariables } from 'API';
import { RequestWithBrief } from 'components/creativesTable/creativesTable';
import CreativeTikTokApproval from 'components/creativeTikTokApproval/creativeTikTokApproval';
import GradientCard from 'components/gradientCard/gradientCard';
import Button from 'components/ui/button';
import Modal from 'components/ui/modal';
import _ from 'lodash';
import { FC, useState } from 'react';
import { withProfile } from 'state/profileSteps';
import { ProfileProps } from 'utils';

interface Props {
  creativeRequest: RequestWithBrief;
  onBack: () => void;
}

export const CreativeDetails: FC<Props & ProfileProps> = ({
  creativeRequest,
  onBack,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const adPayload: CreateAdsMutationVariables = {
    adgroupId: creativeRequest.brief?.adgroupId,
    authCode: creativeRequest.tiktokVideoCode, // this is correct, property name is misleading
    // AWS url, property name is misleading
    // Only use AWS upload if no tiktok code is provided
    landingPageUrl:
      !creativeRequest.tiktokVideoCode && creativeRequest.tiktokCreativeUrl
        ? `public/${creativeRequest.tiktokCreativeUrl}`
        : '',
    creativeRequestId: creativeRequest.id,
  };

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
              {creativeRequest?.creativeTiktokHandle &&
                `@${_.trimStart(creativeRequest?.creativeTiktokHandle, '@')}`}
            </h3>
          </GradientCard>
          <GradientCard>
            Objective
            <h3 className="text-2xl font-bold">
              {creativeRequest.brief?.BriefName}
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
      <section className="grid 2xl:grid-cols-4 xl:grid-cols-2 grid-cols-1 gap-8">
        <div className="paper w-full 2xl:col-span-3">
          <h1 className="text-lg text-primary font-bold">Creator profile</h1>
          <p>{creativeRequest.creatorDescription}</p>
        </div>
        <CreativeTikTokApproval
          id={creativeRequest?.id}
          onClose={onBack}
          request={creativeRequest}
          inspiration={creativeRequest.brief?.creativeInspirations}
          createAdPayload={adPayload}
        />
        <Modal
          title="Creator details"
          isOpen={showDetails}
          handleClose={() => setShowDetails(false)}
        >
          <div className="flex flex-col gap-4 mt-6 text-neutral-400">
            <span>
              {/*TODO: propagate name here somehow*/}
              <b>Creator name:</b> {creativeRequest.creativeTiktokHandle}
            </span>
            <span>
              <b>Creator's TikTok handle:</b>{' '}
              {creativeRequest?.creativeTiktokHandle &&
                `@${_.trimStart(creativeRequest?.creativeTiktokHandle, '@')}`}
            </span>
            <span>
              <b>Creator's description:</b> {creativeRequest.creatorDescription}
            </span>
          </div>
          <div className="w-full flex justify-center text-white mt-5">
            <Button className="px-24" onClick={() => setShowDetails(false)}>
              DONE
            </Button>
          </div>
        </Modal>
      </section>
    </>
  );
};

export default withProfile(CreativeDetails);
