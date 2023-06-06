import './adminDashboard.css';
import CreativeDetailsCard from 'components/creativeDetailsCard/creativeDetailsCard';
import AdminDashboardTable from 'components/adminDashboardTable/adminDashboardTable';
import { listAllRequests, listRequestsByStatus } from 'hooks';
import { useEffect, useState } from 'react';
import { CreativeRequestStatus } from 'utils';

export default function AdminDashboard() {
  const [totalRequests, setTotalRequests] = useState(0);
  const [acceptedRequests, setAcceptedRequests] = useState(0);

  const {
    getAllRequests,
    data: allRequestsData,
    loading: allRequestsLoading,
  } = listAllRequests();
  const {
    getRequestsByStatus,
    data: statusRequestData,
    loading: statusReqeuestLoading,
  } = listRequestsByStatus();

  useEffect(() => {
    getRequestsByStatus({
      variables: { limit: 500, status: CreativeRequestStatus.Accept },
    });
    getAllRequests({ variables: { limit: 500 } });
  }, []);

  useEffect(() => {
    if (!statusReqeuestLoading && allRequestsData)
      setTotalRequests(allRequestsData.length);
  }, [allRequestsData, statusReqeuestLoading]);

  useEffect(() => {
    if (!allRequestsLoading && statusRequestData)
      setAcceptedRequests(statusRequestData.length);
  }, [allRequestsLoading, statusRequestData]);

  return (
    <div className="admin-panel">
      <div className="admin-dashboard-card-container">
        <div className="admin-dashboard-title">Admin dashboard</div>
        <div className="admin-dashboard-cards">
          <CreativeDetailsCard
            campaign="0"
            campaignHeader="Last 24 hour spend"
          />
          <CreativeDetailsCard
            campaign={totalRequests}
            campaignHeader="Number of creatives linked"
          />
          <CreativeDetailsCard
            campaign={((acceptedRequests / (totalRequests || 1)) * 100).toFixed(
              2
            )}
            campaignHeader="Creative approval rate"
          />
          <CreativeDetailsCard
            campaign="0"
            campaignHeader="Average ad spend per creative"
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
