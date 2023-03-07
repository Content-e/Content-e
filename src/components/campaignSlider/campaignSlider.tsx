import { Carousel } from "react-bootstrap";
import "./campaignSlider.css";

export default function CampaignSlider() {
  const dummyVideo = [
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
  ];

  return (
    <div className="campaign-slider-container">
      <div className="creative-inspiration-text">Creative Inspiration</div>
      <Carousel
        variant="dark"
        indicators={false}
        className="carousel-wrapper"
        interval={null}
      >
        {dummyVideo.map((video, index) => (
          <Carousel.Item key={index}>
            <video controls key={index} className="carousel-video">
              <source src={video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
