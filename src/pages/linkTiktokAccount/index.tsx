import { AuthRoutes, ProfileProps } from 'utils';
import { FullPageLoader } from 'components';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ITiktokAccountAccess, withProfile } from 'state/profileSteps';
import { useLinkTiktokAccount } from 'hooks';
import './style.css';
import Modal from 'components/ui/modal';
import Button from 'components/ui/button';
import styled from 'styled-components/macro';
import { AccountsInput, Column } from '../../components/common';
import { AdvertiserData } from '../../API';

const LinkTiktokAccount: React.FC<ProfileProps> = ({
  profileState: { data },
  editProfile,
  refetchProfile,
}) => {
  const history = useHistory();
  const {
    linkTiktok,
    data: tiktokAccountData,
    loading,
  } = useLinkTiktokAccount();

  const [advData, setAdvData] = useState<ITiktokAccountAccess | null>(null);
  const [advItems, setAdvItems] = useState<AdvertiserData[]>([]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const authCode = url.searchParams.get('auth_code');
    const changeUser = url.searchParams.get('change_user');
    console.log({ authCode });
    if (data?.id && authCode) {
      const variables = { authCode, userProfileId: data.id };
      console.log('Linking tiktok', variables);
      linkTiktok({ variables });
    }
    if (changeUser && data?.tiktokAccountAccess) {
      setAdvData(data?.tiktokAccountAccess as ITiktokAccountAccess);
      setAdvItems(data?.tiktokAccountAccess?.advertisers_list || []);
    }
  }, [data, linkTiktok]);

  const handleModalAction = () => history.push(AuthRoutes.EditProfile);
  useEffect(() => {
    if (tiktokAccountData && tiktokAccountData !== 'error') {
      try {
        const advertiserData = JSON.parse(tiktokAccountData);
        if (advertiserData?.advertiser_id) {
          setAdvData(advertiserData);
          setAdvItems(advertiserData?.advertisers_list);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [tiktokAccountData]);
  const setActiveAdvertiser = async (advertiser_id: string) => {
    if (advData) {
      const { advertisers_list, access_token } = advData;
      await editProfile({
        tiktokAccountAccess: {
          advertisers_list: advertisers_list.map(
            ({ advertiser_id, advertiser_name }) => ({
              advertiser_name,
              advertiser_id,
            })
          ),
          access_token,
          advertiser_id,
        },
      });
      await refetchProfile(true);
      history.push(AuthRoutes.Dashboard);
    }
  };

  const filterItems = (value: string) => {
    value = value.toLowerCase();
    if (advItems && value) {
      const items =
        advItems.filter(
          ({ advertiser_name, advertiser_id }) =>
            advertiser_name?.toLowerCase().includes(value) ||
            advertiser_id?.includes(value)
        ) ||
        advData?.advertisers_list ||
        [];
      setAdvItems(items);
    }
  };

  if (loading) return <FullPageLoader />;

  return (
    <Modal isOpen={true} handleClose={handleModalAction} title="">
      <div className="flex flex-col items-center gap-4 text-gray-600">
        {advData ? (
          <AccountsWrapper>
            <h4>Select account</h4>
            <AccountsInput
              type="text"
              onChange={(e) => filterItems(e.target.value)}
            />
            {advItems.length ? (
              <ItemsWrapper>
                {advItems.map(({ advertiser_name, advertiser_id }) => (
                  <TiktokAdvertiser
                    key={advertiser_id}
                    onClick={() => setActiveAdvertiser(advertiser_id || '')}
                  >
                    <p>
                      {advertiser_name} <span>({advertiser_id})</span>
                    </p>
                  </TiktokAdvertiser>
                ))}
              </ItemsWrapper>
            ) : null}
          </AccountsWrapper>
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

const AccountsWrapper = styled(Column)`
  width: 100%;
  font-family: Arial, sans-serif !important;
  justify-content: flex-start;
  padding-left: 20px;
  height: 300px;

  h4 {
    width: 100%;
    text-align: left;
    color: #0a9396;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const TiktokAdvertiser = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 7px 0 7px 15px;
  color: #8fa4a9;

  :hover {
    background-color: #f9fbfd;
  }

  p {
    font-family: Arial, sans-serif !important;
    display: block;
  }

  span {
    font-family: Arial, sans-serif !important;
    opacity: 0.5;
  }
`;
const ItemsWrapper = styled(Column)`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #edf3f6;
  align-items: flex-start;
  padding: 10px 0;
  max-height: 200px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    height: 10px;
    background-color: #aaaaaa;
    border-radius: 2px;
  }
`;

export default withProfile(LinkTiktokAccount);
