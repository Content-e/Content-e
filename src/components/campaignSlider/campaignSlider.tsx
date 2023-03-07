import "./campaignSlider.css";

export default function CampaignSlider() {
  return (
    <div className="campaign-slider-container">
      <div className="creative-inspiration-text">Creative Inspiration</div>
      <div className="slider-content">
        <img src="/images/swipeLeft.svg" className="cursor-pointer" />
        <img src="/images/tikTokCarousel1.svg" />
        <img src="/images/swipeRight.svg" className="cursor-pointer" />
      </div>
    </div>
  );
}
