import _ from 'lodash';
import { FC, useEffect, useState } from 'react';
import { BrandBrief } from 'API';
import CampaignBriefDetails from 'pages/campaignBriefDetails/campaignBriefDetails';
import './campaignBriefs.css';
import {
  IBriefListElems,
  ICreatorBriefListProps,
  withCreatorBriefList,
} from 'state/dashboard';
import moment from 'moment';
import Table from 'components/ui/table';
import { createColumnHelper } from '@tanstack/react-table';
import { CheckIcon } from '@heroicons/react/24/solid';

const columnHelper = createColumnHelper<IBriefListElems | null | undefined>();

export const columns = [
  columnHelper.accessor('briefName', {
    header: 'Campaign Brief Name',
  }),
  columnHelper.accessor('brandName', {
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
    cell: (info) => (
      <span
        className={`uppercase font-bold ${
          info.getValue() === 'new' ? 'text-success' : 'text-danger'
        }`}
      >
        • {info.getValue()}
      </span>
    ),
  }),
];

export const CampaignBriefs: FC<ICreatorBriefListProps> = ({
  briefList,
  requestList,
  loading,
  error,
}) => {
  const [data, setData] = useState<Array<IBriefListElems>>([]);
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  const [selectedBriefStatus, setSelectedBriefStatus] = useState('');

  useEffect(() => {
    if (!loading && !error && requestList && briefList) {
      const output = [] as Array<IBriefListElems>;
      briefList.forEach((brief) => {
        if (brief) {
          const { BriefName, brandProfile, vertical, objective, id } = brief;
          const status =
            requestList.find((e) => e?.brandBriefId === id)?.status || 'new';
          output.push({
            id,
            briefName: BriefName,
            brandName: brandProfile?.name,
            vertical,
            objective,
            status,
            date: brief.createdAt,
          });
        }
      });
      output.sort(
        (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf()
      );

      setData(output);
    }
  }, [briefList, requestList, loading, error]);

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
          onRowClick={(request) => {
            if (request) {
              const brief = _.find(briefList, { BriefName: request.briefName });
              if (brief) {
                setSelectedBriefStatus(request.status || '');
                setSelectedBrief(brief);
              }
            }
          }}
        />
      </section>
    </div>
  );
};

export default withCreatorBriefList(CampaignBriefs);
