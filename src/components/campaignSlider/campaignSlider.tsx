import { isValidUrl } from "components/helpers";
import { FC } from "react";
import { Carousel } from "react-bootstrap";
import "./campaignSlider.css";

interface Props {
  videoUrls: Array<string>;
  onClose: () => void;
}
export const CampaignSlider: FC<Props> = ({ videoUrls, onClose }) => {
  const getEmbeddedUrl = (e: string): string => {
    try {
      const { hostname, pathname } = new URL(e);
      if (hostname.includes("tiktok.com")) {
        const videoId = pathname.split("/").at(-1);
        const isValidId = /^\d+$/.test(videoId || "");
        if (videoId?.length && isValidId)
          return `https://www.tiktok.com/embed/v2/${videoId}`;
      }
      return e;
    } catch (err) {
      return e;
    }
  };

  return (
    <div className="campaign-slider-container">
      <div className="creative-inspiration-header">
        <div className="creative-inspiration-text">Creative Inspiration</div>
        <img
          src="/images/close-icon.svg"
          className="close-icon"
          onClick={onClose}
        />
      </div>

      <Carousel
        variant="dark"
        indicators={false}
        className="carousel-wrapper"
        interval={null}
      >
        {videoUrls.map((video, index) => (
          <Carousel.Item key={index}>
            {isValidUrl(video) ? (
              <iframe
                src={getEmbeddedUrl(video)}
                height={528}
                width="90%"
                name={`video-${video}-${index}`}
                // eslint-disable-next-line max-len
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
              />
            ) : (
              <div className="invalid-inspiration-video">No Video Exists</div>
            )}
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="inspiration-clear-button" onClick={onClose}>
        Done
      </div>
    </div>
  );
};

export default CampaignSlider;
