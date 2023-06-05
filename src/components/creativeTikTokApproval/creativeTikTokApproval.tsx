import CampaignConfirmationModal from "components/campaignConfirmationModal/campaignConfirmationModal";
import { FC, useEffect, useState } from "react";
import "./creativeTikTokApproval.css";
import { CreativeRequestStatus, UnknownType } from "utils";
import { CreativeRequest } from "API";
import { ViewRequestProps, withRequestView } from "state/requests";
import CreativeTikTokVideo from "./creativeTikTokVideo";
import { Storage } from "aws-amplify";

interface Props {
  request?: CreativeRequest | null;
  createAdPayload: UnknownType;
  inspiration?: Array<string | null> | null;
  onClose: () => void;
}
export const CreativeTikTokApproval: FC<Props & ViewRequestProps> = ({
  request,
  onClose,
  createAdPayload,
  approveRequest,
  rejectRequest,
  getVideoLink,
  errorMsg,
  loading,
  isSuccess,
  tiktokVideo,
}) => {
  const openedSidebar = false;
  const [showConfirm, setShowConfirm] = useState(false);

  const [awsURL, setAwsURL] = useState<any>(null);

  const onOkay = (): void => {
    if (showConfirm) approveRequest(createAdPayload);
  };
  const onApprove = (): void => {
    if (!showConfirm) setShowConfirm(true);
  };
  const onReject = (): void => {
    if (!showConfirm) rejectRequest();
  };

  useEffect(() => {
    if (request?.id && request?.tiktokVideoCode)
      getVideoLink(request.tiktokVideoCode);
    else {
      Storage.get(`${request?.tiktokCreativeUrl}`)
        .then((data) => {
          console.log(data);
          setAwsURL(data);
        })
        .catch((err) => console.log(err));
    }
  }, [request]);
  useEffect(() => {
    if (!loading && isSuccess) onClose();
  }, [loading, isSuccess]);

  return (
    <>
      {showConfirm && (
        <CampaignConfirmationModal
          isLoading={loading}
          onOkay={onOkay}
          errorMsg={errorMsg}
        />
      )}
      <div className="brand-dashboard__item">
        <div className="brand-dashboard__top">
          <div className="brand-dashboard__top-title">Creative</div>
          <img
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots.svg/"
          />
        </div>
        <div
          className={`brand-dashboard__slider
            ${openedSidebar ? "short-slider" : ""}
          `}
        >
          <div className="brand-dashboard__slider-left">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.1568 5.69757C16.4894 6.00267 16.4894 6.49733 16.1568 6.80243L10.5469 11.9476C10.2142
                12.2527 10.2142 12.7473 10.5469 13.0524L16.1568 18.1976C16.4894 18.5027 16.4894 18.9973
                16.1568 19.3024C15.8241 19.6075 15.2848 19.6075 14.9521 19.3024L9.34222 14.1573C8.34426
                13.242 8.34426 11.758 9.34222 10.8427L14.9521 5.69757C15.2848 5.39248 15.8241 5.39248
                16.1568 5.69757Z"
                fill="#005F73"
              />
            </svg>
          </div>
          <div className="brand-dashboard__slider-right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.84324 19.3024C8.51059 18.9973 8.51059 18.5027 8.84324 18.1976L14.4531 13.0524C14.7858
                12.7473 14.7858 12.2527 14.4531 11.9476L8.84324 6.80243C8.51059 6.49733 8.51059 6.00267
                8.84324 5.69757C9.1759 5.39248 9.71524 5.39248 10.0479 5.69757L15.6578 10.8427C16.6557 11.758
                16.6557 13.242 15.6578 14.1573L10.0479 19.3024C9.71524 19.6075 9.1759 19.6075 8.84324
                19.3024Z"
                fill="#005F73"
              />
            </svg>
          </div>
          <div className="brand-dashboard__slider-items">
            <div className="brand-dashboard__slider-item left-slider-item"></div>
            <CreativeTikTokVideo awsURL={awsURL} {...tiktokVideo} />
            <div className="brand-dashboard__slider-item right-slider-item"></div>
          </div>
          {request?.status === CreativeRequestStatus.New && (
            <div className="brand-dashboard__slider-buttons">
              <button onClick={onApprove}>approve</button>
              <button onClick={onReject}>reject</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withRequestView(CreativeTikTokApproval);
