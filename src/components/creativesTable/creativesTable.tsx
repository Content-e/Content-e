import { createColumnHelper } from '@tanstack/react-table';
import { BrandBrief, CreativeRequest } from 'API';
import Status from 'components/ui/status';
import Table from 'components/ui/table';
import Search from 'components/search';
import _ from 'lodash';
import CreativeDetails from 'pages/creativeDetails/creativeDetails';
import { FC, useMemo, useState, useEffect } from 'react';
import { BrandBriefProps, withBrandBriefs } from 'state/brandBrief';

export type RequestWithBrief = CreativeRequest & {
  brief?: BrandBrief;
};

const columnHelper = createColumnHelper<RequestWithBrief>();

export const columns = [
  columnHelper.accessor('brief.BriefName', {
    header: 'Brief Name',
  }),
  columnHelper.accessor('creativeTiktokHandle', {
    header: 'Creator handle',
  }),
  columnHelper.accessor('tiktokCreativeUrl', {
    header: 'Creative link',
    cell: (info) =>
      info.getValue()?.[0] && (
        <div className="flex">
          <img alt="" src="/images/link-icon.svg" className="mr-2" />
          <span className="text-ellipsis overflow-hidden">
            {info.getValue()}
          </span>
        </div>
      ),
    maxSize: 200,
  }),
  columnHelper.display({
    header: 'View count',
    // TODO: add actual view count
    cell: () => <span className="ml-7">0</span>,
  }),
  columnHelper.display({
    header: 'Engagement',
    // TODO: add actual engagement
    cell: () => <span className="ml-7">0%</span>,
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
];

export const CreativesTable: FC<BrandBriefProps> = ({ data, loading }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedRequest, setSelectedRequest] =
    useState<RequestWithBrief | null>(null);

  const requests = useMemo(
    () =>
      _.sortBy(
        _.compact(data).flatMap((brief) =>
          _.compact(brief.creativeRequests?.items).map((item) => ({
            ...item,
            brief,
          }))
        ),
        'updatedAt'
      ).reverse(),
    [data]
  ) satisfies RequestWithBrief[];

  useEffect(() => {
    if (requests) setSearchText('');
  }, [requests]);

  const filteredData = useMemo(
    () =>
      requests?.filter((e) =>
        e?.brief.BriefName?.toLowerCase().includes(searchText.toLowerCase())
      ),
    [requests, searchText]
  );

  if (selectedRequest)
    return (
      <CreativeDetails
        creativeRequest={selectedRequest}
        onBack={() => setSelectedRequest(null)}
      />
    );

  return (
    <div className="grid grid-cols-1 gap-4">
      <section className="flex gap-4">
        <Search searchText={searchText} setSearchText={setSearchText} />
      </section>
      <section className="paper">
        <Table
          title="Creatives"
          primaryField="brief.BriefName"
          data={filteredData}
          columns={columns}
          isLoading={loading}
          onRowClick={(brief) => brief && setSelectedRequest(brief)}
        />
      </section>
    </div>
  );
};
export default withBrandBriefs(CreativesTable);
