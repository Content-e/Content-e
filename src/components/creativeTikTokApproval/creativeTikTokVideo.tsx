import Modal from 'components/ui/modal';
import { FC, useState } from 'react';
import './creativeTikTokApproval.css';

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
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = (): void => setIsOpen(!isOpen);

  return (
    <div className="creative-video-canvas brand-dashboard__slider-item main-slider-item">
      <div
        style={{ background: previewUrl ? 'none' : '#999' }}
        className="creative-video-preview"
        onClick={toggleModal}
      >
        {previewUrl && <img src={previewUrl} alt="preview image" />}
        <div className="creative-video-preview-play-icon">
          <img src="/images/play.svg" alt="play icon" />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        title="Creative's TikTok Video"
        handleClose={() => setIsOpen(false)}
      >
        <div className="m-8 flex justify-center items-center">
          {awsURL ? (
            <video controls className="w-full">
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
      </Modal>
    </div>
  );
};

export default CreativeTikTokVideo;
