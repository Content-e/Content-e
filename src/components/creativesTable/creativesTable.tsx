import { createColumnHelper } from "@tanstack/react-table";
import { BrandBrief } from "API";
import Table from "components/ui/table";
import CreativeDetails from "pages/creativeDetails/creativeDetails";
import { FC, useState } from "react";
import {
  BrandBriefProps,
  ISelectredRequest,
  withBrandBriefs,
} from "state/brandBrief";

const columnHelper = createColumnHelper<BrandBrief | null | undefined>();

export const columns = [
  columnHelper.accessor("BriefName", {
    header: "Brief Name",
  }),
  columnHelper.accessor("brandProfile.tiktokHandle", {
    header: "Creator handle",
  }),
  columnHelper.accessor("creativeInspirations", {
    header: "Creative link",
    cell: (info) =>
      info.getValue()?.[0] && (
        <div className="flex">
          <img alt="" src="/images/link-icon.svg" className="mr-2" />
          <span className="text-ellipsis overflow-hidden">
            {info.getValue()?.[0]}
          </span>
        </div>
      ),
  }),
  columnHelper.display({
    header: "View count",
  }),
  columnHelper.display({
    header: "Engagement",
  }),
  columnHelper.display({
    header: "Status",
  }),
];

export const CreativesTable: FC<BrandBriefProps> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<ISelectredRequest>();

  if (selectedRequest)
    return (
      <CreativeDetails
        {...props}
        selectedRequest={selectedRequest}
        onBack={(): void => setSelectedRequest(undefined)}
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
          data={props.data || []}
          columns={columns}
          isLoading={props.loading}
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
    </div>
  );
};
export default withBrandBriefs(CreativesTable);
