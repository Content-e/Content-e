import "./createBrief.css";

export default function CreateBrief() {
  return (
    <>
      <div className="create-brief-input-box">
        <div className="create-brief-input-container">
          <div className="create-brief-input-title">Brief name</div>
          <input className="create-brief-input" />
        </div>
        <div className="create-brief-input-container">
          <div className="create-brief-input-title ">
            Select TikTok campaign to link to
          </div>
          <input className="create-brief-input" />
        </div>
        <div className="create-brief-input-container">
          <div className="create-brief-input-title">Objective</div>
          <input className="create-brief-input" />
        </div>
        <div className="create-brief-input-container">
          <div className="create-brief-input-title">Brief name</div>
          <input className="create-brief-input" />
        </div>
        <div className="create-brief-input-container">
          <div className="create-brief-input-title">Brief status</div>
          <input className="create-brief-input" />
        </div>
      </div>

      <div className="creative-inspiration-box">
        <div className="create-brief-input-title">Creative Inspiration</div>
        <div className="creative-inspiration-input-container">
          <input
            className="create-brief-input"
            placeholder="Paste creative URL"
          />
          <input
            className="create-brief-input"
            placeholder="Paste creative URL"
          />
          <input
            className="create-brief-input"
            placeholder="Paste creative URL"
          />
          <input
            className="create-brief-input"
            placeholder="Paste creative URL"
          />
        </div>
      </div>
    </>
  );
}
