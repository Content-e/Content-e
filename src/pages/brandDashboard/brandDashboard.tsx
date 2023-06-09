import _ from 'lodash';
import './brandDashboard.css';
import { FC, useMemo, useState } from 'react';
import { BrandBriefProps, withBrandBriefs } from 'state/brandBrief';
import BrandInfo from './brandInfo';
import CreativeDetails from 'pages/creativeDetails/creativeDetails';
import { BrandBrief } from 'API';
import CampaignBriefDetails from 'pages/campaignBriefDetails/campaignBriefDetails';
import {
  columns as creativeColumns,
  overrideCreativeStatusForBrand,
  RequestWithBrief,
} from 'components/creativesTable/creativesTable';
import { columns as brandBriefColumns } from 'pages/brandBriefs/brandBriefs';
import Table from 'components/ui/table';

export const BrandDashboard: FC<BrandBriefProps> = ({ loading, ...props }) => {
  const [selectedRequest, setSelectedRequest] = useState<RequestWithBrief>();
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  const requests = useMemo(
    () =>
      _.sortBy(
        _.compact(props.data).flatMap((brief) =>
          _.compact(brief.creativeRequests?.items).map((item) => ({
            ...item,
            status: overrideCreativeStatusForBrand(item.status),
            brief,
          }))
        ),
        'updatedAt'
      ).reverse(),
    [props.data]
  ) satisfies RequestWithBrief[];

  const briefs = useMemo(
    () => _.sortBy(_.compact(props.data), 'updatedAt').reverse(),
    [props.data]
  ) satisfies BrandBrief[];

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );

  if (selectedRequest)
    return (
      <CreativeDetails
        creativeRequest={selectedRequest}
        onBack={(): void => setSelectedRequest(undefined)}
      />
    );

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <section className="md:col-span-2 paper">
        <Table
          title="Creatives"
          data={requests}
          isLoading={loading}
          columns={_.at(creativeColumns, [2, 1, 0, 5, 6])}
          primaryField="brief.BriefName"
          onRowClick={(request) => request && setSelectedRequest(request)}
        />
      </section>
      <section className="paper">
        <Table
          title="Campaign briefs"
          data={briefs}
          isLoading={loading}
          columns={_.at(brandBriefColumns, [0, 3, 5])}
          onRowClick={(brief) => brief && setSelectedBrief(brief)}
          primaryField="BriefName"
        />
      </section>
      <BrandInfo {...props} />
    </div>
  );
};

export default withBrandBriefs(BrandDashboard);
