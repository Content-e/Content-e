import { AuthRoutes, ProfileProps } from "utils";
import React from "react";
import { withProfile } from "state/profileSteps";
import { USER_TYPES } from "API";
import CampaignBriefs from "pages/campaignBriefs/campaignBriefs";
import BrandBriefs from "pages/brandBriefs/brandBriefs";
import { Redirect } from "react-router-dom";

const Brief: React.FC<ProfileProps> = ({ profileState: { data } }) => {
  if (data?.userType === USER_TYPES.CREATIVE_USER) return <CampaignBriefs />;
  if (data?.userType === USER_TYPES.BRAND_USER) return <BrandBriefs />;
  return <Redirect to={AuthRoutes.Redirector} />;
};

export default withProfile(Brief);
