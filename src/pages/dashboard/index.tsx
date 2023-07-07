import { ProfileProps } from 'utils';
import React, { Fragment } from 'react';
import { withProfile } from 'state/profileSteps';
import { USER_TYPES } from 'API';
import CreatorDashboard from 'pages/creatorDashboard/creatorDashboard';
import BrandDashboard from 'pages/brandDashboard/brandDashboard';
import AdminDashboard from 'pages/adminDashboard/adminDashboard';

const Dashboard: React.FC<ProfileProps> = ({ profileState: { data } }) => {
  if (data?.userType === USER_TYPES.CREATIVE_USER)
    return <CreatorDashboard data={data} />;
  if (data?.userType === USER_TYPES.BRAND_USER) return <BrandDashboard />;
  if (data?.userType === USER_TYPES.ADMIN_USER) return <AdminDashboard />;
  return <Fragment />;
};

export default withProfile(Dashboard);
