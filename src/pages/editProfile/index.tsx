import { USER_TYPES } from "API";
import { ShouldRender } from "components";
import { FC, Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  validateDescription,
  validateFullName,
  validateTiktokHandle,
} from "state/auth";
import {
  IUpdateProfile,
  IUpdateProfileError,
  withProfile,
} from "state/profileSteps";
import {
  AuthRoutes,
  defaultProfileError,
  defaultProfileState,
  ProfileProps,
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

  const validateProfileForm = (): boolean => {
    const name = validateFullName(formState?.name || "");
    const description = validateDescription(formState?.description || "");
    const tiktokHandler = validateTiktokHandle(formState?.tiktokHandler || "");
    if (name || description || tiktokHandler) {
      setFormError({ name, description, tiktokHandler });
      return false;
    }
    return true;
  };

  const submitProfile = (): void => {
    if (!isLoading && validateProfileForm()) {
      setIsLoading(true);
      editProfile(formState);
    }
  };
  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
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
      <div className="creator-profile">Creator Profile</div>
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
            <span>Save profile</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default withProfile(EditProfile);
