import { USER_TYPES } from "API";
import CampaignSlider from "components/campaignSlider/campaignSlider";
import AuthorizeTikTokHandler from "pages/authorizeTikTok/authorizeTikTokHandler";
import { FC, useMemo, useState, useEffect } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import "./brandDescription.css";

interface Props {
  detail?: string | null;
  id: string;
  videoUrls?: Array<string | null> | null;
  isVideoLinked?: boolean;
  showSuccessModal: () => void;
}
export const BrandDesciption: FC<Props & ProfileProps> = ({
  detail,
  id,
  isVideoLinked,
  profileState: { data },
  videoUrls,
  showSuccessModal,
}) => {
  const [showPopup, setPopupVisibility] = useState(false);
  const [showInspiration, setShowInspiration] = useState(false);

  const authenticatedUrls = useMemo(() => {
    if (!videoUrls) return [];
    return videoUrls.filter((e) => e?.length) as Array<string>;
  }, [videoUrls]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [mobileDetailsOpened, setMobileDetailsOpened] = useState(false);
  //const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="creator-dashboard__item brief-details">
      <div className="creator-dashboard__top">
        <div className="creator-dashboard__top-title">
          Campaign brief details
        </div>
      </div>
      <div className="creator-dashboard__text-wrapper">
        <div className="creator-dashboard__text dark short-gap">
          <p>{detail}</p>
          {windowSize <= 991 && mobileDetailsOpened ? (
            <>
              <p>
                One of the most important aspects of a campaign brief is a
                clearly defined target audience. It's essential that a creative
                team or third-party agency understand who they're trying to
                reach to encourage them to take action. Depending on the amount
                of data you hold about your audience, you may have detailed
                personas or primary and secondary audiences. Provide as much
                detail as possible, enabling your team to gain an in-depth
                understanding of your target audience.
              </p>
              <p>
                While your creative team may be familiar with the product or
                products that are the campaign focus, the campaign brief
                provides an opportunity to outline aspects you wish to
                highlight. Explain what problem your product solves for
                consumers. If your product is the best, most efficient or the
                first of its kind, mention this, and ensure that you can
                substantiate any claims that you make.
              </p>
              <p>
                Include relevant context about competitors and the problem in
                the market that your product solves. Commercial context helps
                marketing teams and agencies suggest.
              </p>
            </>
          ) : null}
        </div>
        <div className="creator-dashboard__creative-learn">
          <button
            className={`${mobileDetailsOpened ? "opened" : ""}learn-more`}
            onClick={() => setMobileDetailsOpened((prev) => !prev)}
          >
            Learn more
          </button>
        </div>
        {windowSize <= 991 && mobileDetailsOpened ? (
          <div className="creator-dashboard__text dark short-gap">
            <p>
              The budget is crucial information as it lets creative teams assess
              the scale that the project can reach and ensures that they pitch
              ideas within the company's financial resources. It's inadvisable
              to allow marketing teams to use the budget as they wish because
              projects always have a specific fiscal limit. Teams can use their
              time and resources efficiently if they understand the budgetary
              constraints of the campaign.
            </p>
            <p>
              If the company already has an established brand, share information
              about its tone and image to ensure that the campaign is consistent
              with it. You may have a brand guideline or style guide that you
              can share. Describe the tone of voice for previous marketing
              campaigns and communications to ensure that the team's work aligns
              with the established company image.
            </p>
            <p>
              If you have regular marketing channels that you use consistently,
              you can mention them in the brief. For example, if you always
              align social media content with current campaigns, you may specify
              this so the creative team can provide content that also works for
              social media. The creative team's ideas might be more suitable for
              other channels, so being transparent about your usual channels can
              help to guide the project.
            </p>
            <p>
              Companies with extensive marketing experience may have information
              about the success of previous campaigns. Provide creative teams
              with this information, including the campaign objectives and
              performance. Understanding the success or failure of historic
              marketing projects can help creative teams identify effective
              marketing methods for the target audience.
            </p>
          </div>
        ) : null}
      </div>
      <div className="creator-dashboard__creative-btns">
        {authenticatedUrls.length > 0 && (
          <button
            className="creator-dashboard__creative-btn inspiration"
            onClick={(): void => setShowInspiration(true)}
          >
            Creative inspiration
          </button>
        )}
        {data?.userType === USER_TYPES.CREATIVE_USER && isVideoLinked && (
          <div
            className="creator-dashboard__creative-btn link"
            onClick={(): void => setPopupVisibility(true)}
          >
            Link Creative
          </div>
        )}
      </div>
      {showPopup && (
        <AuthorizeTikTokHandler
          briefId={id}
          onCross={(): void => setPopupVisibility(false)}
          disableBackground
        />
      )}
      {showInspiration && (
        <div className="inspiration-panel">
          <CampaignSlider
            videoUrls={authenticatedUrls}
            onClose={(): void => setShowInspiration(false)}
          />
        </div>
      )}
    </div>
  );
};

export default withProfile(BrandDesciption);
