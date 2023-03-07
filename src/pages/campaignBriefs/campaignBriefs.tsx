import "./campaignBriefs.css";

export default function CampaignBriefs() {
  return (
    <div>
      <div className="campaign-table-label">Campaign briefs</div>
      <div className="campaign-table-container">
        <input className="campaign-search" placeholder="Search..." />
        <table>
          <tr className="table-header-bottom-border">
            <th className="table-header-label">Brief Name</th>
            <th className="table-header-label">Brand</th>
            <th className="table-header-label">Vertical</th>
            <th className="table-header-label">Objective</th>
            <th className="table-header-label">Status</th>
            <th className="table-header-label">Details</th>
          </tr>
          <tr>
            <td className="table-description">briefName</td>
            <td className="table-description">brandName</td>
            <td className="table-description">vertical</td>
            <td className="table-description">objective</td>
            <td className="table-description">status</td>
            <td>
              <img src="/images/table-search.svg" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
