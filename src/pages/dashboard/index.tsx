import { ProfileProps, UnAuthRoutes } from 'utils';
import React, { Fragment, useEffect, useState } from 'react';
import { withProfile } from 'state/profileSteps';
import { USER_TYPES } from 'API';
import CreatorDashboard from 'pages/creatorDashboard/creatorDashboard';
import BrandDashboard from 'pages/brandDashboard/brandDashboard';
import AdminDashboard from 'pages/adminDashboard/adminDashboard';
import Modal from '../../components/authentication/modal';
import { useClerk } from '@clerk/clerk-react';

const Dashboard: React.FC<ProfileProps> = ({ profileState: { data } }) => {
  const [isShowModal, setIsShowModal] = useState(true);
  const { signOut } = useClerk();
  useEffect(() => {
    const confirmed = localStorage.getItem(`agreementConfirmed_${data?.id}`);
    if (confirmed) {
      setIsShowModal(false);
    }
  }, []);
  if (data?.userType === USER_TYPES.CREATIVE_USER && isShowModal)
    return (
      <Modal
        withOutLabel={true}
        title={'Terms & conditions'}
        isOpen={isShowModal}
        content="You must agree to terms and conditions to continue."
        handleClose={() => {
          setIsShowModal(false);
          window.location.href = process.env.REACT_APP_CLERK_LANDING_URL || '/';
        }}
        withCheckbox={true}
        checkBoxText={
          <p>
            I agree to the{' '}
            <span
              onClick={() => {
                window.open(
                  `${
                    process.env.REACT_APP_URL
                  }${UnAuthRoutes.TermsAndConditions.slice(1)}`,
                  '_blank'
                );
              }}
            >
              terms and conditions
            </span>
          </p>
        }
        actionLabel="CONFIRM"
        actionHandler={async () => {
          localStorage.setItem(`agreementConfirmed_${data?.id}`, 'true');
          setIsShowModal(false);
          await signOut();
        }}
        type={'creator'}
      />
    );
  if (data?.userType === USER_TYPES.CREATIVE_USER)
    return <CreatorDashboard data={data} />;
  if (data?.userType === USER_TYPES.BRAND_USER) return <BrandDashboard />;
  if (data?.userType === USER_TYPES.ADMIN_USER) return <AdminDashboard />;
  return <Fragment />;
};

export default withProfile(Dashboard);
