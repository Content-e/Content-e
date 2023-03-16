import { ProfileProps } from "utils";
import React from "react";
import { withProfile } from "state/profileSteps";
import { USER_TYPES } from "API";
import CreatorDashboard from "pages/creatorDashboard/creatorDashboard";
import BrandDashboard from "pages/brandDashboard/brandDashboard";

const Dashboard: React.FC<ProfileProps> = ({ profileState: { data } }) => {
  if (data?.userType === USER_TYPES.CREATIVE_USER) return <CreatorDashboard />;
  return <BrandDashboard />;
};

export default withProfile(Dashboard);
