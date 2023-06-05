import _ from "lodash";
import BestPractices from "components/bestPractices/bestPractices";
import CreatorNotifications from "components/creatorNotifications/creatorNotifications";
import CreatorStatsCard from "components/creatorStatsCard/creatorStatsCard";
import "./creatorDashboard.css";
import { CreatorDashboardBoxes } from "utils";
import { BrandBrief } from "API";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { useEffect, useState } from "react";
import {
  IBriefListElems,
  ICreatorBriefListProps,
  withCreatorBriefList,
} from "state/dashboard";
import Table from "components/ui/table";
import { columns } from "pages/campaignBriefs/campaignBriefs";
import moment from "moment";

function CreatorDashboard({
  data: profileData,
  loading,
  briefList,
  error,
  requestList,
}: ICreatorBriefListProps & Record<string, any>) {
  const [data, setData] = useState<Array<IBriefListElems>>([]);
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  const [selectedBriefStatus, setSelectedBriefStatus] = useState("");

  useEffect(() => {
    if (!loading && !error && requestList && briefList) {
      const output = [] as Array<IBriefListElems>;
      briefList.forEach((brief) => {
        if (brief) {
          const { BriefName, brandProfile, vertical, objective, id } = brief;
          const status =
            requestList.find((e) => e?.brandBriefId === id)?.status || "new";
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

  console.log(" DASHBOARD", { profileData });

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
        status={selectedBriefStatus}
      />
    );

  return (
    <div className="flex flex-col gap-8">
      <div className="creator-dashboard__item statistics-item">
        <div className="statistics-cards-container">
          <CreatorStatsCard
            type={CreatorDashboardBoxes.Wallet}
            value={`$${
              profileData.userWallet
                ? profileData.userWallet.currentBalance
                : "0"
            }`}
          />
          <CreatorStatsCard type={CreatorDashboardBoxes.Approval} value={"0"} />
          <CreatorStatsCard
            type={CreatorDashboardBoxes.Conversion}
            value={"0"}
          />
          <CreatorStatsCard
            type={CreatorDashboardBoxes.ClickThrough}
            value={"0"}
          />
        </div>
      </div>
      <div className="paper w-full">
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
                setSelectedBriefStatus(request.status || "");
                setSelectedBrief(brief);
              }
            }
          }}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <CreatorNotifications />
        <BestPractices />
      </div>
    </div>
  );
}

export default withCreatorBriefList(CreatorDashboard);
