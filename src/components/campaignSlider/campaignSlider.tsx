import { FC, Fragment, useMemo } from "react";
import { Carousel } from "react-bootstrap";
import "./campaignSlider.css";

interface Props {
  videoUrls?: Array<string | null> | null;
}
export const CampaignSlider: FC<Props> = ({ videoUrls }) => {
  const authenticatedUrls = useMemo(() => {
    if (!videoUrls) return [];
    return videoUrls.filter((e) => e !== null) as Array<string>;
  }, [videoUrls]);
  return (
    <div className="campaign-slider-container">
      <div className="creative-inspiration-text">Creative Inspiration</div>
      {authenticatedUrls.length ? (
        <Carousel
          variant="dark"
          indicators={false}
          className="carousel-wrapper"
          interval={null}
        >
          {authenticatedUrls.map((video, index) => (
            <Carousel.Item key={index}>
              <video controls key={index} className="carousel-video">
                <source src={video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Fragment key="no video" />
      )}
    </div>
  );
};

export default CampaignSlider;
