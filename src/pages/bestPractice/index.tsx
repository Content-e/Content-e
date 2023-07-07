import { AuthRoutes, ProfileProps } from 'utils';
import React from 'react';
import { withProfile } from 'state/profileSteps';
import { USER_TYPES } from 'API';
import { Redirect } from 'react-router-dom';
import BestPractice from './practice';
import AdminBestPracticeTable from './adminPractice';

const BestPracticePage: React.FC<ProfileProps> = ({
  profileState: { data },
}) => {
  if (data?.userType === USER_TYPES.CREATIVE_USER) return <BestPractice />;
  if (data?.userType === USER_TYPES.ADMIN_USER)
    return <AdminBestPracticeTable />;
  return <Redirect to={AuthRoutes.Redirector} />;
};

export default withProfile(BestPracticePage);
