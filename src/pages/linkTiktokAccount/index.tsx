import {AuthRoutes, ProfileProps} from 'utils';
import {FullPageLoader} from 'components';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ITiktokAccountAccess, withProfile} from 'state/profileSteps';
import {updateUserProfile, useLinkTiktokAccount} from 'hooks';
import './style.css';
import Modal from 'components/ui/modal';
import Button from 'components/ui/button';
import styled from "styled-components/macro";

const LinkTiktokAccount: React.FC<ProfileProps> = ({
                                                       profileState: {data}, editProfile
                                                   }) => {
    const history = useHistory();
    const {
        linkTiktok,
        data: tiktokAccountData,
        loading,
        error,
    } = useLinkTiktokAccount();

    const [advData, setAdvData] = useState<ITiktokAccountAccess | null>(null)

    useEffect(() => {
        const url = new URL(window.location.href);
        const authCode = url.searchParams.get('auth_code');
        console.log({authCode});
        if (data?.id && authCode) {
            const variables = {authCode, userProfileId: data.id};
            console.log('Linking tiktok', variables);
            linkTiktok({variables});
        }
    }, [data, linkTiktok]);

    const handleModalAction = () => history.push(AuthRoutes.EditProfile);
    useEffect(() => {
        console.log('tiktokAccountData', tiktokAccountData)
        if (typeof tiktokAccountData === 'string') {
            try {
                const advertiserData = JSON.parse(tiktokAccountData)
                if (advertiserData?.advertiser_id) {
                    setAdvData(advertiserData)
                }
            } catch (e) {
                console.log(e)
            }
        }
    }, [tiktokAccountData])
    const setActiveAdvertiser = (advertiser_id: string) => {
        if (advData) {
            editProfile({tiktokAccountAccess: {...advData, advertiser_id}})
            history.push(AuthRoutes.Dashboard)
        }
    }

    if (loading) return <FullPageLoader/>;

    return (
        <Modal isOpen handleClose={() => console.log('')} title="">
            <div className="flex flex-col items-center gap-4 text-gray-600">
                {advData ? (
                    <>
                        <p className="font-bold text-2xl text-center">
                            Choose your Tiktok ads account
                        </p>
                        {advData.advertisers_list.map(({advertiser_name, advertiser_id}, index) =>
                            <TiktokAdvertiser key={index} onClick={() => setActiveAdvertiser(advertiser_id)}>
                                <p>{advertiser_id}</p>
                                <p>{advertiser_name}</p>
                            </TiktokAdvertiser>)}
                        <Button onClick={handleModalAction}>
                            Go back to brand profile
                        </Button>
                    </>
                ) : (
                    <>
                        <p className="font-bold text-2xl text-center text-danger">
                            There was an error linking your TikTok account. <br/>
                            Please make sure you have an ads profile set up
                        </p>
                        <Button onClick={handleModalAction}>Go back to profile</Button>
                    </>
                )}
            </div>
        </Modal>
    );
};

const TiktokAdvertiser = styled.div`
  cursor: pointer;

  p {
    display: block;
  }
`

export default withProfile(LinkTiktokAccount);
