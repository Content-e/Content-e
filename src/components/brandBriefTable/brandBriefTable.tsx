import "./brandBriefTable.css";

export default function BrandBriefTable() {
  return (
    <table className="brand-table">
      <tr className="brand-table-header-bottom-border">
        <th className="brand-table-header-label">Brief Name</th>
        <th className="brand-table-header-label">Brief details</th>
        <th className="brand-table-header-label">Linked TikTok campaign</th>
        <th className="brand-table-header-label">Objective</th>
        <th className="brand-table-header-label">Status</th>
        <th className="brand-table-header-label">Details</th>
      </tr>
      <tr>
        <td className="brand-table-description">Summer Campaign</td>
        <td className="brand-table-description">SA tourism wants to promote</td>
        <td className="brand-table-description">UGC summer campaign</td>
        <td className="brand-table-description">Awareness</td>
        <td className="brand-table-description">Active</td>
        <td>
          <img src="/images/table-search.svg" />
        </td>
      </tr>
    </table>
  );
}
