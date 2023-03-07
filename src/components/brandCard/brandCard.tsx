import "./brandCard.css";

export default function BrandCard() {
  return (
    <div className="brand-card-container">
      <div className="brand-card-header">
        <div className="brand-title">Brand</div>
        <img src="/images/table-search.svg" />
      </div>
      <div>
        <b className="campaign-title f-600">SA Tourism</b>
        <div className="campaign-title f-300">@SA Tourism</div>
      </div>
    </div>
  );
}
