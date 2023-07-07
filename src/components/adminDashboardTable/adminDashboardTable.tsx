import './adminDashboardTable.css';

export default function AdminDashboardTable() {
  return (
    <div>
      <table>
        <tr className="admin-dashboard-table">
          <th className="admin-dashboard-table-header-label">Date</th>
          <th className="admin-dashboard-table-header-label">Total payouts</th>
          <th className="admin-dashboard-table-header-label">Export CSV</th>
        </tr>
        <tr>
          <td className="admin-dashboard-table-description">1/3/2023</td>
          <td className="admin-dashboard-table-description">$1,389.84</td>
          <td>
            <img src="/images/download-csv.svg" />
          </td>
        </tr>
      </table>
    </div>
  );
}
