import "./dashboardCampaignBriefTable.css";

export default function DashboardCampaignBriefTable() {
  return (
    <table>
      <tr className="table-header-bottom-border">
        <th className="dashboard-campaign-table-header-label">Brief Name</th>
        <th className="dashboard-campaign-table-header-label">Brand</th>
        <th className="dashboard-campaign-table-header-label">Vertical</th>
      </tr>
      <tr>
        <td className="dashboard-campaign-table-description ">
          TikTok link to video content
        </td>
        <td className="dashboard-campaign-table-description ">Awareness</td>
        <td>
          <img src="/images/table-search.svg" />
        </td>
      </tr>
    </table>
  );
}
