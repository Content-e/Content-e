import { AuthRoutes, ProfileProps } from 'utils';
import { FullPageLoader } from 'components';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withProfile } from 'state/profileSteps';
import { useLinkTiktokAccount } from 'hooks';
import './style.css';
import Modal from 'components/ui/modal';
import Button from 'components/ui/button';

const LinkTiktokAccount: React.FC<ProfileProps> = ({
  profileState: { data },
}) => {
  const history = useHistory();
  const {
    linkTiktok,
    data: tiktokAccountData,
    loading,
    error,
  } = useLinkTiktokAccount();

  console.log({ tiktokAccountData, loading, error });

  useEffect(() => {
    const url = new URL(window.location.href);
    const authCode = url.searchParams.get('auth_code');
    console.log({ authCode });
    if (data?.id && authCode) {
      const variables = { authCode, userProfileId: data.id };
      console.log('Linking tiktok', variables);
      linkTiktok({ variables });
    }
  }, [data, linkTiktok]);

  const handleModalAction = () => history.push(AuthRoutes.EditProfile);

  if (loading) return <FullPageLoader />;

  return (
    <Modal isOpen handleClose={handleModalAction} title="">
      <div className="flex flex-col items-center gap-4 text-gray-600">
        {tiktokAccountData ? (
          <>
            <img src="/images/checkmark-brand.svg" alt="checkmark icon" />
            <p className="font-bold text-2xl text-center">
              Your TikTok has been successfully connected
            </p>
            <Button onClick={handleModalAction}>
              Go back to brand profile
            </Button>
          </>
        ) : (
          <>
            <p className="font-bold text-2xl text-center text-danger">
              There was an error linking your TikTok account. <br />
              Please make sure you have an ads profile set up
            </p>
            <Button onClick={handleModalAction}>Go back to profile</Button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default withProfile(LinkTiktokAccount);
