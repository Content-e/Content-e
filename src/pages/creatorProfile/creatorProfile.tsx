import "./creatorProfile.css";

export default function CreatorProfile() {
  return (
    <>
      <div className="creator-profile">Creator Profile</div>
      <div className="creator-profile-form-container">
        <div className="creator-profile-form">
          <div className="field-label-container">
            <div className="field-label">Full name</div>
            <input className="creator-profile-input" />
          </div>
          <div className="field-label-container">
            <div className="field-label">Email address</div>
            <input className="creator-profile-input" />
          </div>
          <div className="field-label-container">
            <div className="field-label">TikTok handle</div>
            <input className="creator-profile-input" />
          </div>
          <div className="field-label-container">
            <div className="field-label">Describe yourself</div>
            <textarea className="creator-profile-textarea" />
          </div>
        </div>

        <div className="save-profile-container">
          <div className="save-profile">
            <span>Save profile</span>
          </div>
        </div>
      </div>
    </>
  );
}
