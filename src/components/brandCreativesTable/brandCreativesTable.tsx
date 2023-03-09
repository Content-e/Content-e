import "./brandCreativesTable.css";

export default function BrandCreativesTable() {
  return (
    <table>
      <tr className="table-header-bottom-border">
        <th className="table-header-label">Creative link</th>
        <th className="table-header-label">Creator handle</th>
        <th className="table-header-label">Brief name</th>
        <th className="table-header-label">Status</th>
        <th className="table-header-label">View</th>
      </tr>
      <tr>
        <td className="table-description">TikTok link to video content</td>
        <td className="table-description">@creatorhandle</td>
        <td className="table-description">Summer campaign</td>
        <td className="table-description">Requested</td>
        <td>
          <img src="/images/table-search.svg" />
        </td>
      </tr>
    </table>
  );
}
