import {USER_TYPES} from 'API';
import {Storage} from 'aws-amplify';
import classNames from 'classnames';
import {getProfileRole, IconLoader, ShouldRender} from 'components';
import React, {FC, Fragment, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {
    validateDescription,
    validateFullName,
    validateTiktokHandle,
} from 'state/auth';
import {
    IProfileImageUpload,
    IUpdateProfile,
    IUpdateProfileError,
    withProfile,
} from 'state/profileSteps';
import {
    AuthRoutes,
    defaultProfileError,
    defaultProfileState,
    AllowedProfileSizeKB,
    ProfileProps,
    UnknownType,
    BrandRoutes,
} from 'utils';
import './creatorProfile.css';
import Modal from 'components/authentication/modal';
import styled from 'styled-components/macro';
import {Column, Row} from '../../components/common';

export const EditProfile: FC<ProfileProps> = ({
                                                  editProfile,
                                                  updateProfileData,
                                                  profileState: {data},
                                              }) => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] =
        useState<IUpdateProfile>(defaultProfileState);
    const [formError, setFormError] =
        useState<IUpdateProfileError>(defaultProfileError);
    const [image, setImage] = useState<IProfileImageUpload>({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const validateProfileForm = (): boolean => {
        const name = validateFullName(formState?.name || '');
        const isCreator = data?.userType === USER_TYPES.CREATIVE_USER ? true : null;
        const description =
            isCreator && validateDescription(formState?.description || '');
        const tiktokHandler =
            isCreator && validateTiktokHandle(formState?.tiktokHandler || '');
        if (name || description || tiktokHandler) {
            setFormError({name, description, tiktokHandler});
            return false;
        }
        return !image.error;
    };

    const handleChange = (e: UnknownType): void => {
        if (e?.target?.files?.[0]) {
            if (e.target.files[0].size > AllowedProfileSizeKB * 1024)
                setImage({error: `Maximum ${AllowedProfileSizeKB} KB size allowed`});
            else setImage({file: e.target.files[0]});
        }
    };

    const submitProfile = async (): Promise<void> => {
        if (!isLoading && validateProfileForm()) {
            setIsLoading(true);
            if (data?.id && image.file)
                await Storage.put(`${data.id}/avatar/profile`, image.file);
            editProfile(formState);
        }
    };

    const updateState = (key: string, value: string): void => {
        setFormError((prev) => ({...prev, [key]: null}));
        setFormState((prev) => ({...prev, [key]: value}));
    };

    const linkTiktokAccount = (): void => {
        window.location.href = `https://ads.tiktok.com/marketing_api/auth?app_id=${
            process.env.REACT_APP_CLERK_TKT_MARKETING_APP_ID
        }&state=your_custom_params&redirect_uri=${encodeURI(
            process.env.REACT_APP_URL + 'branddashboard' || ''
        )}&rid=8w8cll1xcbs`;
    };

    useEffect(() => {
        if (data) {
            const {name, description, tiktokHandler} = data;
            const state = {name} as IUpdateProfile;
            if (description) state.description = description;
            if (tiktokHandler) state.tiktokHandler = tiktokHandler;
            setFormState(state);
        }
    }, [data]);

    useEffect(() => {
        if (isLoading && updateProfileData) history.push(AuthRoutes.Dashboard);
    }, [isLoading, updateProfileData]);

    if (!data) return <></>;
    return (
        <>
            <div className="brand-dashboard__items user-profile-items">
                <div className="brand-dashboard__item">
                    <div className="brand-dashboard__profile">
                        <div className="brand-dashboard__profile-title">
                            {getProfileRole(data.userType)} user profile
                        </div>
                        <div className="brand-dashboard__profile-inputs">
                            <div className="brand-dashboard__profile-group">
                                <div className="brand-dashboard__profile-label">Full name</div>
                                <input
                                    className="brand-dashboard__profile-input"
                                    value={formState.name}
                                    onChange={(e): void => updateState('name', e.target.value)}
                                />
                                <ShouldRender if={formError.name}>
                                    <span>{formError.name}</span>
                                </ShouldRender>
                            </div>
                            {!data?.userEmail.includes(
                                process.env.REACT_APP_FAKE_MAIL || '@fakemail.com'
                            ) ? (
                                <div className="brand-dashboard__profile-group">
                                    <div className="brand-dashboard__profile-label">
                                        Email Address
                                    </div>
                                    <input
                                        className="brand-dashboard__profile-input"
                                        value={data.userEmail}
                                        readOnly
                                    />
                                </div>
                            ) : null}
                            {data?.userType === USER_TYPES.CREATIVE_USER && (
                                <Fragment>
                                    <div className="brand-dashboard__profile-group">
                                        <div className="brand-dashboard__profile-label">
                                            TikTok handle
                                        </div>
                                        <input
                                            className="brand-dashboard__profile-input"
                                            value={formState.tiktokHandler}
                                            onChange={(e): void =>
                                                updateState('tiktokHandler', e.target.value)
                                            }
                                        />
                                        <ShouldRender if={formError.tiktokHandler}>
                                            <span>{formError.tiktokHandler}</span>
                                        </ShouldRender>
                                    </div>
                                    <div className="brand-dashboard__profile-group">
                                        <div className="brand-dashboard__profile-label">
                                            Describe yourself
                                        </div>
                                        <input
                                            className="brand-dashboard__profile-input"
                                            value={formState.description}
                                            onChange={(e): void =>
                                                updateState('description', e.target.value)
                                            }
                                        />
                                        <ShouldRender if={formError.description}>
                                            <span>{formError.description}</span>
                                        </ShouldRender>
                                    </div>
                                </Fragment>
                            )}
                            {data?.userType === USER_TYPES.BRAND_USER ? (
                                <BrandPart>
                                    {data.tiktokAccountAccess?.advertiser_id
                                    && data.tiktokAccountAccess?.advertisers_list
                                    && data.tiktokAccountAccess.advertisers_list.find(item => item.advertiser_id === data.tiktokAccountAccess?.advertiser_id) ?
                                        <TiktokActions>
                                            <img src="/images/tiktok.svg"/>
                                            <span>Account:</span>
                                            <span>
                                                {data.tiktokAccountAccess.advertisers_list.find(item => item.advertiser_id === data.tiktokAccountAccess?.advertiser_id)?.advertiser_name}
                                            </span>
                                        </TiktokActions> : null}
                                    <TiktokActions>
                                        <img src="/images/tiktok.svg"/>
                                        <span>Tik Tok</span>
                                        <h5 onClick={linkTiktokAccount}>
                                            Direct ads account linking
                                        </h5>
                                    </TiktokActions>
                                    {data.tiktokAccountAccess?.advertisers_list &&
                                    data.tiktokAccountAccess?.advertisers_list?.length > 1 ? (
                                        <TiktokActions>
                                            <img src="/images/tiktok.svg"/>
                                            <span>Tik Tok</span>
                                            <h5
                                                onClick={() =>
                                                    history.push(
                                                        `${BrandRoutes.LinkTiktokAccount}?change_user=true`
                                                    )
                                                }
                                            >
                                                Change account
                                            </h5>
                                        </TiktokActions>
                                    ) : null}
                                </BrandPart>
                            ) : null}
                            <div className="field-label-container">
                                <img src="/images/profile-file.svg"/>
                                <input
                                    type="file"
                                    accept=".png, .jpg"
                                    onChange={handleChange}
                                    id="profile-file-input"
                                />
                                <ShouldRender if={image.error}>
                                    <span>{image.error}</span>
                                </ShouldRender>
                            </div>
                        </div>
                        <div className="save-button-container">
                            <button
                                className="brand-dashboard__profile-button"
                                onClick={submitProfile}
                            >
                <span className={classNames({loading: isLoading})}>
                  Save profile
                </span>
                                {isLoading && <IconLoader color="#005f73"/>}
                            </button>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={showSuccessModal}
                    handleClose={() => setShowSuccessModal(false)}
                    type="brand"
                    content="Your platform has been successfully added"
                />
            </div>
        </>
    );
};

const BrandPart = styled(Column)`
  align-items: flex-start;
  margin-bottom: 20px;

  h4 {
    opacity: 0.7;
    color: #0a9396;
    font-size: 20px;
    margin: 10px 0;
  }

  input {
    height: 50px;
    padding-left: 20px;
  }
`;

const TiktokActions = styled(Row)`
  justify-content: flex-start;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: -0.02em;
  margin: 15px 0;

  span {
    color: #8fa4a9;
    margin: 0 10px;
  }

  h5 {
    color: #0a9396;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export default withProfile(EditProfile);
