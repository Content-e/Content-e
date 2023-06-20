import { isValidUrl } from 'components/helpers';
import Button from 'components/ui/button';
import { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import './campaignSlider.css';

interface Props {
  videoUrls: Array<string>;
  onClose: () => void;
}
export const CampaignSlider: FC<Props> = ({ videoUrls, onClose }) => {
  const getEmbeddedUrl = (e: string): string => {
    try {
      const { hostname, pathname } = new URL(e);
      if (hostname.includes('tiktok.com')) {
        const videoId = pathname.split('/').at(-1);
        const isValidId = /^\d+$/.test(videoId || '');
        if (videoId?.length && isValidId)
          return `https://www.tiktok.com/embed/v2/${videoId}`;
      }
      return e;
    } catch (err) {
      return e;
    }
  };

  console.log(videoUrls);

  return (
    <div className="campaign-slider-container">
      <div className="creative-inspiration-header">
        <div className="text-2xl text-primary font-bold">
          Creative inspiration
        </div>
        <img
          src="/images/modal-cross.svg"
          className="close-icon-inspiration"
          onClick={onClose}
        />
      </div>

      <Carousel
        variant="dark"
        indicators={false}
        className="carousel-wrapper my-4"
        interval={null}
        slide={false}
      >
        {videoUrls.map((video, index) => (
          <Carousel.Item key={index}>
            {isValidUrl(video) ? (
              <div className="inspiration-video-iframe-wrap">
                <iframe
                  className="inspiration-video-iframe"
                  src={getEmbeddedUrl(video)}
                  width="100%"
                  name={`video-${video}-${index}`}
                  // eslint-disable-next-line max-len
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
                />
              </div>
            ) : (
              <div className="invalid-inspiration-video">No Video Exists</div>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      <Button onClick={onClose}>Done</Button>
    </div>
  );
};

export default CampaignSlider;
