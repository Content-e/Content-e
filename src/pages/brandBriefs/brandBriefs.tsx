import BrandBriefTable from "components/brandBriefTable/brandBriefTable";
import "./brandBriefs.css";

export default function BrandBriefs() {
  return (
    <div>
      <div className="brand-table-label">Brand briefs</div>
      <div className="brand-table-container">
        <div className="brand-brief-label-container">
          <input className="brand-search" placeholder="Search..." />
          <img src="/images/add-brief.svg" />
        </div>
        <BrandBriefTable />
      </div>
    </div>
  );
}
