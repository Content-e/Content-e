import { createColumnHelper } from '@tanstack/react-table';
import { BrandBrief, CreativeRequest } from 'API';
import Status from 'components/ui/status';
import Table from 'components/ui/table';
import _ from 'lodash';
import CreativeDetails from 'pages/creativeDetails/creativeDetails';
import { FC, useMemo, useState } from 'react';
import { ICreatorBriefListProps, withCreatorBriefList } from 'state/dashboard';

export type RequestWithBrief = CreativeRequest & {
  brief?: BrandBrief;
};

const columnHelper = createColumnHelper<RequestWithBrief | null | undefined>();

export const columns = [
  columnHelper.accessor('brief.BriefName', {
    header: 'Campaign Brief Name',
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
  }),
  columnHelper.display({
    header: 'View count',
    cell: '0',
  }),
  columnHelper.display({
    header: 'Engagement',
    cell: '0%',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <Status value={info.getValue()} />,
  }),
];

export const CreativesTable: FC<ICreatorBriefListProps> = ({
  briefList,
  loading,
}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedRequest, setSelectedRequest] =
    useState<RequestWithBrief | null>(null);

  const requests = useMemo(
    () =>
      _.sortBy(
        _.compact(briefList).flatMap((brief) =>
          _.compact(brief.creativeRequests?.items).map((item) => ({
            ...item,
            brief,
          }))
        ),
        'updatedAt'
      ).reverse(),
    [briefList]
  ) satisfies RequestWithBrief[];

  if (selectedRequest)
    return (
      <CreativeDetails
        data={briefList || []}
        selectedRequest={selectedRequest}
        onBack={() => setSelectedRequest(null)}
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
          <input
            className="creatives-search"
            placeholder="Search..."
            value={searchText}
            onChange={(e): void => setSearchText(e.target.value)}
          />
        </div>
      </section>
      <section className="paper">
        <Table
          title="Creatives"
          primaryField="BriefName"
          data={requests}
          columns={columns}
          isLoading={loading}
          onRowClick={(brief) => brief && setSelectedRequest(brief)}
        />
      </section>
    </div>
  );
};
export default withCreatorBriefList(CreativesTable);
