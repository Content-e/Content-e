import _ from 'lodash';
import { FC, useMemo, useState, useEffect } from 'react';
import { BrandBrief } from 'API';
import CampaignBriefDetails from 'pages/campaignBriefDetails/campaignBriefDetails';
import { ICreatorBriefListProps, withCreatorBriefList } from 'state/dashboard';
import Table from 'components/ui/table';
import { createColumnHelper } from '@tanstack/react-table';
import { CheckIcon } from '@heroicons/react/24/solid';
import Search from 'components/search';
import Status from 'components/ui/status';
import { z } from 'zod';

interface BriefWithStatus extends BrandBrief {
  status: string;
}

const columnHelper = createColumnHelper<BriefWithStatus>();

export const columns = [
  columnHelper.accessor('BriefName', {
    header: 'Name',
  }),
  columnHelper.accessor('brandProfile.name', {
    header: 'Brand',
  }),
  columnHelper.accessor('brandProfile.tiktokHandle', {
    header: 'Brand Handle',
    cell: (info) => {
      try {
        const parsed = JSON.parse(
          info.cell.row.original.brandProfile?.metaData || ''
        );
        const { tiktok } = z
          .object({
            tiktok: z.string(),
          })
          .parse(parsed);
        return tiktok;
      } catch {
        return '';
      }
    },
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
    maxSize: 150,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <Status value={info.getValue()} />,
  }),
  columnHelper.display({
    header: 'View',
    cell: () => <img src="/images/doc_red.svg" className="ml-3" />,
    size: 70,
  }),
];

export const mapBriefDataForCreator = (
  data?: (BrandBrief | null)[] | null
): BriefWithStatus[] => {
  const overrideStatus = (status: string) => {
    if (status === 'new') return 'submitted';
    if (status === 'approved') return 'accepted';
    return status;
  };

  return _.sortBy(
    _.compact(data).map((brief) => ({
      ...brief,
      status: brief.creativeRequests?.items.length
        ? overrideStatus(
            _.first(_.compact(brief.creativeRequests?.items))?.status || ''
          )
        : 'new',
      updatedAt:
        _.first(_.compact(brief.creativeRequests?.items))?.updatedAt ||
        brief.updatedAt,
    })),
    'updatedAt'
  ).reverse();
};

export const CreatorBriefs: FC<ICreatorBriefListProps> = ({
  briefList,
  loading,
}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  const data = useMemo(() => mapBriefDataForCreator(briefList), [briefList]);

  const filteredData = useMemo(
    () =>
      data?.filter((e) =>
        e?.BriefName?.toLowerCase().includes(searchText.toLowerCase())
      ) || [],
    [data, searchText]
  );

  useEffect(() => {
    if (data) setSearchText('');
  }, [data]);

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );

  return (
    <div className="flex flex-col gap-4">
      <section className="flex gap-4">
        <Search searchText={searchText} setSearchText={setSearchText} />
      </section>
      <section className="paper">
        <Table
          title="Campaign Briefs"
          primaryField="briefName"
          isLoading={loading}
          data={filteredData}
          columns={columns}
          onRowClick={(brief) => setSelectedBrief(brief)}
        />
      </section>
    </div>
  );
};

export default withCreatorBriefList(CreatorBriefs);
