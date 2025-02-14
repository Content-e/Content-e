import { USER_TYPES } from "API";
import { Storage } from "aws-amplify";
import classNames from "classnames";
import { getProfileRole, IconLoader, ShouldRender } from "components";
import { FC, Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  validateDescription,
  validateFullName,
  validateTiktokHandle,
} from "state/auth";
import {
  IProfileImageUpload,
  IUpdateProfile,
  IUpdateProfileError,
  withProfile,
} from "state/profileSteps";
import {
  AuthRoutes,
  defaultProfileError,
  defaultProfileState,
  AllowedProfileSizeKB,
  ProfileProps,
  UnknownType,
} from "utils";
import "./creatorProfile.css";

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

  const validateProfileForm = (): boolean => {
    const name = validateFullName(formState?.name || "");
    const isCreator = data?.userType === USER_TYPES.CREATIVE_USER ? true : null;
    const description =
      isCreator && validateDescription(formState?.description || "");
    const tiktokHandler =
      isCreator && validateTiktokHandle(formState?.tiktokHandler || "");
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
      "https://ads.tiktok.com/marketing_api/auth?app_id=7204753405493903362&state=your_custom_params&redirect_uri=http%3A%2F%2Fwww.edcsquared.io%2Fbranddashboard&rid=8w8cll1xcbs"
    );
  };

  useEffect(() => {
    if (data) {
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
      <div className="creator-profile">
        {getProfileRole(data.userType)} Profile
      </div>
      <div className="creator-profile-form-container">
        <div className="creator-profile-form">
          <div className="field-label-container">
            <div className="field-label">Full name</div>
            <input
              className="creator-profile-input"
              value={formState.name}
              onChange={(e): void => updateState("name", e.target.value)}
            />
            <ShouldRender if={formError.name}>
              <span>{formError.name}</span>
            </ShouldRender>
          </div>
          <div className="field-label-container">
            <div className="field-label">Email address</div>
            <input
              className="creator-profile-input"
              value={data.userEmail}
              readOnly
            />
          </div>
          <div className="field-label-container">
            <div className="field-label">Profile picture</div>
            <input type="file" accept=".png, .jpg" onChange={handleChange} />
            <ShouldRender if={image.error}>
              <span>{image.error}</span>
            </ShouldRender>
          </div>
          {data?.userType === USER_TYPES.CREATIVE_USER && (
            <Fragment>
              <div className="field-label-container">
                <div className="field-label">TikTok handle</div>
                <input
                  className="creator-profile-input"
                  value={formState.tiktokHandler}
                  onChange={(e): void =>
                    updateState("tiktokHandler", e.target.value)
                  }
                />
                <ShouldRender if={formError.tiktokHandler}>
                  <span>{formError.tiktokHandler}</span>
                </ShouldRender>
              </div>
              <div className="field-label-container">
                <div className="field-label">Describe yourself</div>
                <textarea
                  className="creator-profile-textarea"
                  value={formState.description}
                  onChange={(e): void =>
                    updateState("description", e.target.value)
                  }
                />
                <ShouldRender if={formError.description}>
                  <span>{formError.description}</span>
                </ShouldRender>
              </div>
            </Fragment>
          )}
        </div>

        <div className="save-profile-container">
          <div className="save-profile" onClick={submitProfile}>
            <span className={classNames({ loading: isLoading })}>
              Save profile
            </span>
            {isLoading && <IconLoader color="#005f73" />}
          </div>
          {data?.userType === USER_TYPES.BRAND_USER && (
            <div className="save-profile" onClick={linkTiktokAccount}>
              Link Tiktok Account
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withProfile(EditProfile);
