import _ from 'lodash';
import { FC, useMemo, useState } from 'react';
import { BrandBrief } from 'API';
import CampaignBriefDetails from 'pages/campaignBriefDetails/campaignBriefDetails';
import './campaignBriefs.css';
import { ICreatorBriefListProps, withCreatorBriefList } from 'state/dashboard';
import Table from 'components/ui/table';
import { createColumnHelper } from '@tanstack/react-table';
import { CheckIcon } from '@heroicons/react/24/solid';
import Status from 'components/ui/status';

export interface BriefWithStatus extends BrandBrief {
  status: string;
}

const columnHelper = createColumnHelper<BriefWithStatus>();

export const columns = [
  columnHelper.accessor('BriefName', {
    header: 'Campaign Brief Name',
  }),
  columnHelper.accessor('brandProfile.name', {
    header: 'Brand',
  }),
  columnHelper.accessor('vertical', {
    header: 'Vertical',
  }),
  columnHelper.accessor('objective', {
    header: 'Objective',
    cell: (info) => (
      <div
        className={`uppercase font-bold flex items-center ${
          // WTF which color should be here?
          info.getValue() === 'unawareness' ? 'text-danger' : 'text-success'
        }`}
      >
        <CheckIcon className="w-4 h-4 mr-1" />
        <span className="overflow-hidden text-ellipsis">{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <Status value={info.getValue()} />,
  }),
];

export const CampaignBriefs: FC<ICreatorBriefListProps> = ({
  briefList,
  loading,
}) => {
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
    <div className="flex flex-col gap-4">
      <section className="flex gap-4">
        {/*TODO: working search bar*/}
        <div className="brand-dashboard__item search-item">
          <img
            className="brand-dashboard__item-search"
            alt=""
            src="/images/search.svg"
          />
          <input className="creatives-search" placeholder="Search..." />
        </div>
      </section>
      <section className="paper">
        <Table
          title="Campaign Briefs"
          primaryField="briefName"
          isLoading={loading}
          data={data}
          columns={columns}
          onRowClick={(brief) => {
            setSelectedBriefStatus(brief.status || '');
            setSelectedBrief(brief);
          }}
        />
      </section>
    </div>
  );
};

export default withCreatorBriefList(CampaignBriefs);
