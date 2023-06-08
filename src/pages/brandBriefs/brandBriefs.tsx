import { BrandBrief } from 'API';
import CampaignBriefDetails from 'pages/campaignBriefDetails/campaignBriefDetails';
import { FC, useMemo, useState, useEffect } from 'react';
import { BrandBriefProps, withBrandBriefs } from 'state/brandBrief';
import { Link } from 'react-router-dom';
import { BrandRoutes } from 'utils';
import { createColumnHelper } from '@tanstack/react-table';
import Search from 'components/search';
import Table from 'components/ui/table';
import Button from 'components/ui/button';
import { BriefWithStatus } from 'pages/campaignBriefs/campaignBriefs';
import _ from 'lodash';
import Status from 'components/ui/status';

const columnHelper = createColumnHelper<BriefWithStatus | null | undefined>();

export const columns = [
  columnHelper.accessor('BriefName', {
    header: 'Name',
  }),
  columnHelper.accessor('brandBriefDetails', {
    header: 'Details',
  }),
  columnHelper.accessor('creativeInspirations', {
    header: 'Linked TikTok Campaign',
    cell: (info) =>
      info.getValue()?.[0] && (
        <div className="flex">
          <img alt="" src="/images/link-icon.svg" className="mr-2" />
          <span className="text-ellipsis overflow-hidden">
            {info.getValue()?.[0]}
          </span>
        </div>
      ),
    maxSize: 200,
  }),
  columnHelper.accessor('objective', {
    header: 'Objective',
    cell: (info) => <span className="uppercase">{info.getValue()}</span>,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <Status value={info.getValue()} />,
  }),
  columnHelper.display({
    header: 'View',
    cell: () => <img src="/images/doc_1.svg" className="ml-3" />,
    size: 70,
  }),
  columnHelper.display({
    header: 'Edit',
    cell: (info) => (
      <Link
        to={{
          pathname: BrandRoutes.EditBrief,
          state: {
            brief: info.row.original,
          },
        }}
        className="block"
      >
        <img alt="Edit" src="/images/list-edit.svg" className="ml-2" />
      </Link>
    ),
    size: 90,
  }),
];

export const BrandBriefs: FC<BrandBriefProps> = ({ data, loading }) => {
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  const [searchText, setSearchText] = useState('');

  const dataWithStatus = useMemo(
    () =>
      _.sortBy(
        _.compact(data).map((brief) => ({
          ...brief,
          status:
            _.first(_.compact(brief.creativeRequests?.items))?.status || 'new',
        })),
        'updatedAt'
      ).reverse(),
    [data]
  );

  const filteredData = useMemo(
    () =>
      dataWithStatus?.filter((e) =>
        e?.BriefName?.toLowerCase().includes(searchText)
      ) || [],
    [dataWithStatus, searchText]
  );

  useEffect(() => {
    if (data) setSearchText('');
  }, [data]);

  // TODO: wtf this is dumb! Should be separate route
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
        <Link to={BrandRoutes.CreateBrief}>
          <Button>ADD NEW BRIEF</Button>
        </Link>
      </section>
      <section className="paper">
        <Table
          title="Campaign Briefs"
          primaryField="BriefName"
          isLoading={loading}
          data={filteredData}
          columns={columns}
          onRowClick={(brief) => brief && setSelectedBrief(brief)}
        />
      </section>
    </div>
  );
};

export default withBrandBriefs(BrandBriefs);
