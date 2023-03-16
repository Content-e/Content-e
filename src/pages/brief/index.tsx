import { ProfileProps } from "utils";
import React from "react";
import { withProfile } from "state/profileSteps";
import { USER_TYPES } from "API";
import CampaignBriefs from "pages/campaignBriefs/campaignBriefs";
import BrandBriefs from "pages/brandBriefs/brandBriefs";

const Brief: React.FC<ProfileProps> = ({ profileState: { data } }) => {
  if (data?.userType === USER_TYPES.CREATIVE_USER) return <CampaignBriefs />;
  return <BrandBriefs />;
};

export default withProfile(Brief);
