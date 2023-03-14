import "./creativesTable.css";

export default function CreativesTable() {
  return (
    <>
      <div className="creatives-table-label">Creatives</div>
      <div className="creatives-table-container">
        <input className="creatives-search" placeholder="Search..." />
        <table className="creatives-table">
          <tr className="creatives-table-header-bottom-border">
            <th className="creatives-table-header-label">Brief Name</th>
            <th className="creatives-table-header-label">Creator handle</th>
            <th className="creatives-table-header-label">Creative link</th>
            <th className="creatives-table-header-label">View count</th>
            <th className="creatives-table-header-label">Engagement</th>
            <th className="creatives-table-header-label">Status</th>
            <th className="creatives-table-header-label">Details</th>
          </tr>
          <tr>
            <td className="creatives-table-description">Summer Campaign</td>
            <td className="creatives-table-description">SA tourism</td>
            <td className="creatives-table-description">Video link</td>
            <td className="creatives-table-description">1284</td>
            <td className="creatives-table-description">4.8%</td>
            <td className="creatives-table-description">Requested</td>
            <td>
              <img src="/images/table-search.svg" />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
