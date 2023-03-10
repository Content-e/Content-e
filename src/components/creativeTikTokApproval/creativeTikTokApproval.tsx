import "./creativeTikTokApproval.css";

export default function CreativeTikTokApproval() {
  return (
    <div className="creative-approval-container">
      <div className="creative-approval-box">
        <div className="creative-label">Creative</div>
        <div className="permission-container">
          <div className="permission-btn-container">
            <span className="permission-btn-label">Approve</span>
          </div>
          <div className="permission-btn-container">
            <span className="permission-btn-label">Reject</span>
          </div>
        </div>
        <img src="/images/tikTokCarousel2.svg" />
      </div>
    </div>
  );
}
