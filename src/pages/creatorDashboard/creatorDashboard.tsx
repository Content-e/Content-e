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
import {
  columns,
  mapBriefDataForCreator,
} from 'pages/creatorBriefs/creatorBriefs';
import GradientCard from 'components/gradientCard/gradientCard';

function CreatorDashboard({
  data: profileData,
  loading,
  briefList,
}: ICreatorBriefListProps & { data: UserProfile }) {
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  const data = useMemo(() => mapBriefDataForCreator(briefList), [briefList]);

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );

  return (
    <div className="flex flex-col gap-8">
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-8 w-full">
        <GradientCard>
          <CreatorStatsCard
            type={CreatorDashboardBoxes.Wallet}
            value={`$${
              profileData.userWallet
                ? profileData.userWallet.currentBalance
                : '0'
            }`}
          />
        </GradientCard>
        <GradientCard>
          <CreatorStatsCard type={CreatorDashboardBoxes.Approval} value={'0'} />
        </GradientCard>
        <GradientCard>
          <CreatorStatsCard
            type={CreatorDashboardBoxes.Conversion}
            value={'0'}
          />
        </GradientCard>
        <GradientCard>
          <CreatorStatsCard
            type={CreatorDashboardBoxes.ClickThrough}
            value={'0'}
          />
        </GradientCard>
      </div>
      <div className="paper w-full">
        <Table
          title="Campaign Briefs"
          primaryField="BriefName"
          isLoading={loading}
          data={data}
          columns={_.at(columns, [0, 1, 3, 4, 5, 6])}
          onRowClick={(brief) => setSelectedBrief(brief)}
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
