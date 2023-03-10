import BrandCreativesTable from "components/brandCreativesTable/brandCreativesTable";
import DashboardCampaignBriefTable from "components/dashboardCampaignBriefTable/dashboardCampaignBriefTable";
import "./brandDashboard.css";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";

export default function BrandDashboard() {
  const history = useHistory();

  return (
    <>
      <div className="dashboard-label">Dashboard</div>
      <div className="creative-table-container">
        <div className="brand-table-container">
          <div className="brand-table-header">
            <div className="brand-table-label">Creatives</div>
            <img src="/images/morevert.svg" />
          </div>
          <BrandCreativesTable />
        </div>
      </div>

      <div className="dashboard-campaign-section">
        <div className="dashboard-campaign-brief-container">
          <div className="brand-table-header">
            <div className="brand-table-label">Campaign briefs</div>
            <img
              onClick={() => history.push(AuthRoutes.CampaignBrief)}
              src="/images/morevert.svg"
            />
          </div>
          <DashboardCampaignBriefTable />
        </div>

        <div className="dashboard-campaign-brief-container">
          <div className="brand-table-header">
            <div className="brand-table-label">Brand Profile</div>
            <img src="/images/morevert.svg" />
          </div>
          <div className="brand-profile-container">
            <div className="brand-name">Brand Name</div>
            <div className="brand-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
              viverra erat, nec imperdiet nisl. Praesent dapibus, tellus in
              egestas laoreet, metus tortor aliquet quam, eget luctus lorem orci
              nec magna.
            </div>
            <div className="brand-profile-btn-container">
              <div className="brand-profile-btn">
                <span className="brand-profile-text">Brand Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
