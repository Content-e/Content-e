import { BrandBrief } from "API";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { FC, useEffect, useMemo, useState } from "react";
import { BrandBriefProps, withBrandBriefs } from "state/brandBrief";
import "./brandBriefs.css";
import { Link } from "react-router-dom";
import { BrandRoutes } from "utils";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "components/ui/table";
import Button from "components/ui/button";

const columnHelper = createColumnHelper<BrandBrief | null | undefined>();

const columns = [
  columnHelper.accessor("BriefName", {
    header: "Brief Name",
  }),
  columnHelper.accessor("brandBriefDetails", {
    header: "Details",
  }),
  columnHelper.accessor("creativeInspirations", {
    header: "Linked TikTok Campaign",
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
  columnHelper.accessor("objective", {
    header: "Objective",
    cell: (info) => <span className="uppercase">{info.getValue()}</span>,
  }),
  columnHelper.display({
    header: "Status",
  }),
  columnHelper.display({
    header: "Edit",
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
  }),
];

export const BrandBriefs: FC<BrandBriefProps> = ({ data, loading }) => {
  const [input, setInput] = useState("");
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  useEffect(() => {
    if (data) setInput("");
  }, [data]);

  const filteredData = useMemo(
    () =>
      data?.filter((e) => e?.BriefName?.toLowerCase().includes(input)) || [],
    [data, input]
  );

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
        {/*TODO: working search bar*/}
        <div className="brand-dashboard__item search-item">
          <img
            className="brand-dashboard__item-search"
            alt=""
            src="/images/search.svg"
          />
        </div>
        <Link to={BrandRoutes.CreateBrief}>
          <Button>ADD NEW BRIEF</Button>
        </Link>
      </section>
      <section className="paper">
        <Table
          title="Campaign Briefs"
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
