import { AuthRoutes, ProfileProps } from 'utils';
import React from 'react';
import { withProfile } from 'state/profileSteps';
import { USER_TYPES } from 'API';
import CreatorBriefs from 'pages/creatorBriefs/creatorBriefs';
import BrandBriefs from 'pages/brandBriefs/brandBriefs';
import { Redirect } from 'react-router-dom';

const Brief: React.FC<ProfileProps> = ({ profileState: { data } }) => {
  if (data?.userType === USER_TYPES.CREATIVE_USER) return <CreatorBriefs />;
  if (data?.userType === USER_TYPES.BRAND_USER) return <BrandBriefs />;
  return <Redirect to={AuthRoutes.Redirector} />;
};

export default withProfile(Brief);
