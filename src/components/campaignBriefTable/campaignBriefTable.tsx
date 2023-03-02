import "./campaignBriefTable.css";

export default function CampaignBriefTable() {
  return (
    <div className="campaign-table-container">
      <div className="campaign-table-header">
        <div className="campaign-table-label">Campaign briefs</div>
        <img src="/images/morevert.svg" />
      </div>

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
          <td className="table-description">Summer Campaign</td>
          <td className="table-description">SA Tourism</td>
          <td className="table-description">Travel</td>
          <td className="table-description">Awareness</td>
          <td className="table-description">SA Tourism</td>
          <td>
            <img src="/images/table-search.svg" />
          </td>
        </tr>
      </table>
    </div>
  );
}
