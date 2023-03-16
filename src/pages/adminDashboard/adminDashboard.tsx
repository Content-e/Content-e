import "./adminDashboard.css";
import CreativeDetailsCard from "components/creativeDetailsCard/creativeDetailsCard";
import AdminDashboardTable from "components/adminDashboardTable/adminDashboardTable";

export default function AdminDashboard() {
  return (
    <div className="admin-panel">
      <div className="admin-dashboard-card-container">
        <div className="admin-dashboard-title">Admin Dashboard</div>
        <div className="admin-dashboard-cards">
          <CreativeDetailsCard
            campaign="Dev"
            campaignHeader="Campaign brief name"
            iconCheck={false}
          />
          <CreativeDetailsCard
            campaign="Dev"
            campaignHeader="Campaign brief name"
            iconCheck={false}
          />
          <CreativeDetailsCard
            campaign="Dev"
            campaignHeader="Campaign brief name"
            iconCheck={false}
          />
          <CreativeDetailsCard
            campaign="Dev"
            campaignHeader="Campaign brief name"
            iconCheck={false}
          />
        </div>
      </div>
      <div className="admin-table-container">
        <div className="creator-payments-container">
          <div className="creator-payments">Creator Payments</div>
          <AdminDashboardTable />
        </div>
      </div>
    </div>
  );
}
