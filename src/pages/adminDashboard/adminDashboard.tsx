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
            campaign="0"
            campaignHeader="Last 24 hour spend"
            iconCheck={false}
          />
          <CreativeDetailsCard
            campaign="0"
            campaignHeader="Number of creatives linked"
            iconCheck={false}
          />
          <CreativeDetailsCard
            campaign="0"
            campaignHeader="Creative approval rate"
            iconCheck={false}
          />
          <CreativeDetailsCard
            campaign="0"
            campaignHeader="Average ad spend per creative"
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
