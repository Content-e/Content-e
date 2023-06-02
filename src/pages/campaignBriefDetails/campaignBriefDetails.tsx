import { FC, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import BrandDesciption from "components/brandDescription/brandDescription";
import { BrandBrief } from "API";
import Modal from "components/authentication/modal";
import { default as ModalBase } from "components/ui/modal";
import { AuthRoutes } from "utils";
import Button from "components/ui/button";
import GradientCard from "components/gradientCard/gradientCard";

interface Props {
  data: BrandBrief;
  onBack: () => void;
  status?: string;
}
const CampaignBriefDetails: FC<Props> = ({ onBack, data, status }) => {
  const history = useHistory();
  const [showDetails, handleDetailVisibility] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const tag = useMemo(() => {
    if (!data.BriefName) return "";
    return data.BriefName.trim().replaceAll(" ", "_").replaceAll("-", "_");
  }, [data.BriefName]);

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
              Brand
              <img
                className="brand-dashboard__item-block-icon"
                alt=""
                src="/images/doc_1_white.svg"
                onClick={() => handleDetailVisibility(true)}
              />
            </div>
            <h3 className="text-2xl font-bold">{data.BriefName}</h3>
            <span>@{tag}</span>
          </GradientCard>
          <GradientCard>
            Brand name
            <h3 className="text-2xl font-bold">{data.brandProfile?.name}</h3>
          </GradientCard>
          <GradientCard>
            Vertical
            <h3 className="text-2xl font-bold">{data.vertical}</h3>
          </GradientCard>
          <GradientCard>
            Objective
            <h3 className="text-2xl font-bold">{data.objective}</h3>
          </GradientCard>
        </div>
        <Modal
          isOpen={showSuccessModal}
          content="Your creative has been successfully linked!"
          handleClose={() => setShowSuccessModal(false)}
          actionLabel="BACK TO DASHBOARD"
          actionHandler={() => history.push(AuthRoutes.Dashboard)}
          type="creator"
        />
        <ModalBase
          title={`Brand details - ${data.brandProfile?.name}`}
          isOpen={showDetails}
          handleClose={() => handleDetailVisibility(false)}
        >
          <div className="flex flex-col gap-3 my-6">
            <span>
              <b className="text-gray-500">Strap line:</b>{" "}
              {data.brandProfile?.strapLine}
            </span>
            <span>
              <b className="text-gray-500">Mission statement:</b>{" "}
              {data.brandProfile?.internalMission}
            </span>
            <div>
              <b className="text-gray-500">Brand pillars:</b>
              <ul>
                {data.brandProfile?.pillars?.map((e) => {
                  if (!e) return "";
                  const [title, detail] = e.split(":");
                  if (detail?.length)
                    return (
                      <li>
                        <b>{title}</b>: {detail}
                      </li>
                    );
                  return <li>{title}</li>;
                })}
              </ul>
            </div>
            <span>
              <b className="text-gray-500">Tone of voice:</b>{" "}
              {data.brandProfile?.toneVoice}
            </span>
          </div>
        </ModalBase>
      </section>
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
