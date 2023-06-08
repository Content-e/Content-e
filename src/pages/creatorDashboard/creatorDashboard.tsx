import _ from 'lodash';
import BestPractices from 'components/bestPractices/bestPractices';
import CreatorNotifications from 'components/creatorNotifications/creatorNotifications';
import CreatorStatsCard from 'components/creatorStatsCard/creatorStatsCard';
import './creatorDashboard.css';
import { CreatorDashboardBoxes } from 'utils';
import { BrandBrief, UserProfile } from 'API';
import CampaignBriefDetails from 'pages/campaignBriefDetails/campaignBriefDetails';
import { useMemo, useState } from 'react';
import { ICreatorBriefListProps, withCreatorBriefList } from 'state/dashboard';
import Table from 'components/ui/table';
import { columns } from 'pages/campaignBriefs/campaignBriefs';

function CreatorDashboard({
  data: profileData,
  loading,
  briefList,
}: ICreatorBriefListProps & { data: UserProfile }) {
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  const [selectedBriefStatus, setSelectedBriefStatus] = useState('');

  const data = useMemo(
    () =>
      _.sortBy(
        _.compact(briefList).map((brief) => ({
          ...brief,
          status: _.first(brief.creativeRequests?.items)?.status || 'new',
        })),
        'updatedAt'
      ).reverse(),
    [briefList]
  );

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
        status={selectedBriefStatus}
      />
    );

  return (
    <div className="flex flex-col gap-8">
      <div className="creator-dashboard__item statistics-item">
        <div className="statistics-cards-container">
          <CreatorStatsCard
            type={CreatorDashboardBoxes.Wallet}
            value={`$${
              profileData.userWallet
                ? profileData.userWallet.currentBalance
                : '0'
            }`}
          />
          <CreatorStatsCard type={CreatorDashboardBoxes.Approval} value={'0'} />
          <CreatorStatsCard
            type={CreatorDashboardBoxes.Conversion}
            value={'0'}
          />
          <CreatorStatsCard
            type={CreatorDashboardBoxes.ClickThrough}
            value={'0'}
          />
        </div>
      </div>
      <div className="paper w-full">
        <Table
          title="Campaign Briefs"
          primaryField="BriefName"
          isLoading={loading}
          data={data}
          columns={_.at(columns, [0, 1, 3, 4, 5, 6])}
          onRowClick={(brief) => {
            setSelectedBriefStatus(brief.status || '');
            setSelectedBrief(brief);
          }}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <CreatorNotifications />
        <BestPractices />
      </div>
    </div>
  );
}

export default withCreatorBriefList(CreatorDashboard);
