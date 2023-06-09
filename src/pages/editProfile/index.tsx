import { USER_TYPES } from 'API';
import { Storage } from 'aws-amplify';
import classNames from 'classnames';
import { getProfileRole, IconLoader, ShouldRender } from 'components';
import { FC, Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
} from 'utils';
import './creatorProfile.css';
import Modal from 'components/authentication/modal';
import { CheckIcon } from '@heroicons/react/24/outline';

export const EditProfile: FC<ProfileProps> = ({
  editProfile,
  updateProfileData,
  profileState: { data },
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
      setFormError({ name, description, tiktokHandler });
      return false;
    }
    return !image.error;
  };

  const handleChange = (e: UnknownType): void => {
    if (e?.target?.files?.[0]) {
      if (e.target.files[0].size > AllowedProfileSizeKB * 1024)
        setImage({ error: `Maximum ${AllowedProfileSizeKB} KB size allowed` });
      else setImage({ file: e.target.files[0] });
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
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const linkTiktokAccount = (): void => {
    window.open(
      'https://ads.tiktok.com/marketing_api/auth?app_id=7204753405493903362&state=your_custom_params&redirect_uri=http%3A%2F%2Fwww.edcsquared.io%2Fbranddashboard&rid=8w8cll1xcbs'
    );
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      const { name, description, tiktokHandler } = data;
      const state = { name } as IUpdateProfile;
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
              <div className="field-label-container">
                <img src="/images/profile-file.svg" />
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
                <span className={classNames({ loading: isLoading })}>
                  Save profile
                </span>
                {isLoading && <IconLoader color="#005f73" />}
              </button>
              {data?.userType === USER_TYPES.BRAND_USER &&
                (data?.tiktokAccountAccess ? (
                  <div className="text-primary flex items-center gap-2 text-lg">
                    <span>TikTok linked</span>
                    <CheckIcon className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="save-profile" onClick={linkTiktokAccount}>
                    <span>Link Tiktok Account</span>
                    <img src="/images/profile-arrow.svg" />
                  </div>
                ))}
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

export default withProfile(EditProfile);
