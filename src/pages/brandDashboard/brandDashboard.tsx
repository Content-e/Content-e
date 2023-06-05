import _ from "lodash";
import "./brandDashboard.css";
import { FC, useState } from "react";
import {
  BrandBriefProps,
  ISelectredRequest,
  withBrandBriefs,
} from "state/brandBrief";
import BrandInfo from "./brandInfo";
import CreativeDetails from "pages/creativeDetails/creativeDetails";
import { BrandBrief } from "API";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { columns as creativeColumns } from "components/creativesTable/creativesTable";
import { columns as brandBriefColumns } from "pages/brandBriefs/brandBriefs";
import Table from "components/ui/table";

export const BrandDashboard: FC<BrandBriefProps> = ({ loading, ...props }) => {
  const [selectedRequest, setSelectedRequest] = useState<ISelectredRequest>();
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

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
        {...props}
        selectedRequest={selectedRequest}
        onBack={(): void => setSelectedRequest(undefined)}
      />
    );
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <section className="md:col-span-2 paper">
        <Table
          title="Creatives"
          data={props.data?.slice(10) || []}
          columns={_.at(creativeColumns, [2, 1, 0, 5])}
          primaryField="BriefName"
          onRowClick={(brief) =>
            brief &&
            setSelectedRequest({
              briefId: brief.id,
              requestId: "TODO",
              authCode: "TODO",
            })
          }
        />
      </section>
      <section className="paper">
        <Table
          title="Campaign briefs"
          data={props.data?.slice(10) || []}
          columns={_.at(brandBriefColumns, [0, 3])}
          onRowClick={(brief) => brief && setSelectedBrief(brief)}
          primaryField="BriefName"
        />
      </section>
      <BrandInfo {...props} />
    </div>
  );
};

export default withBrandBriefs(BrandDashboard);
