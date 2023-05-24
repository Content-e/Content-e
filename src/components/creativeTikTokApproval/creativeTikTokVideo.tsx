// import { FC, Fragment, useState } from "react";
import { FC, useState } from "react";
import "./creativeTikTokApproval.css";
// import { isValidUrl } from "components/helpers";

interface Props {
  videoUrl?: string;
  previewUrl?: string;
  awsURL?: string;
}
export const CreativeTikTokVideo: FC<Props> = ({
  videoUrl,
  previewUrl,
  awsURL,
}) => {
  const [openVideoModal, handleVideoModal] = useState(false);
  const toggleModal = (): void => handleVideoModal(!openVideoModal);

  // if (!previewUrl || !isValidUrl(videoUrl || "") || !awsURL)
  //   return <Fragment key="no video" />;
  return (
    <div className="creative-video-canvas">
      <div
        style={{ background: previewUrl ? "none" : "#999" }}
        className="creative-video-preview"
        onClick={toggleModal}
      >
        <img src={previewUrl ? previewUrl : awsURL} alt="preview image" />
        <div className="creative-video-preview-play-icon">
          <img src="/images/play.svg" alt="play icon" />
        </div>
      </div>
      {openVideoModal && (
        <div className="creative-video-panel">
          <div className="creative-video-container">
            <div className="creative-inspiration-header">
              <div className="creative-inspiration-text">
                Creative's TikTok Video
              </div>
              <img
                src="/images/close-icon.svg"
                className="close-icon-inspiration"
                onClick={toggleModal}
              />
            </div>
            {awsURL ? (
              <video
                controls
                style={{
                  width: "100%",
                  margin: "5%",
                }}
              >
                <source src={awsURL} />
              </video>
            ) : (
              <iframe
                className="creative-video-iframe"
                src={videoUrl}
                name={`video-${videoUrl}`}
                // eslint-disable-next-line max-len
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeTikTokVideo;
