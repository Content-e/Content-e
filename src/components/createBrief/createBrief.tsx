import { IconLoader } from "components/loader";
import ShouldRender from "components/shouldRender";
import { createCampaignBrief } from "hooks";
// import { isEmpty } from "lodash";
import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import {
  AuthRoutes,
  initialCreateBriefError,
  initialCreateBriefState,
  ProfileProps,
  UnknownType,
} from "utils";
import BriefInput from "./briefInput";
import BriefInspirations from "./briefInspiration";
import "./createBrief.css";

export const CreateBrief: FC<ProfileProps> = ({
  profileState: { data: profile },
}) => {
  const history = useHistory();
  const { createBrief, loading, data } = createCampaignBrief();
  const [formState, setFormState] = useState(initialCreateBriefState);
  const [formError, setFormError] = useState(initialCreateBriefError);

  const handleChange = (key: string, value: string | Array<string>): void => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setFormError((prev) => ({ ...prev, [key]: null }));
  };

  const updateStatus = (e: UnknownType): void =>
    handleChange("active", e.target.value);

  const validateInputs = (): boolean => {
    const errObj = { ...initialCreateBriefError };
    if (!formState.BriefName.length)
      errObj.BriefName = "Brief name is required";
    if (!formState.objective.length) errObj.objective = "Objective is required";
    if (!formState.active.length) errObj.active = "Status is required";
    if (!formState.creativeInspirations.find((e) => e.length))
      errObj.creativeInspirations = "Atleast one inspiration is required";
    if (!formState.brandBriefDetails.length)
      errObj.brandBriefDetails = "Brief details is required";

    setFormError({ ...errObj });
    return !Object.values(errObj).find((e) => e);
  };

  const handleSubmit = (): void => {
    const brandId = profile?.brand?.items?.[0]?.id;
    const x = 3;
    if (brandId && validateInputs() && x < 2)
      createBrief({
        variables: { input: { ...formState, brandId, vertical: "retail" } },
      });
    else console.log({ ...formState, brandId, vertical: "retail" });
  };

  useEffect(() => {
    if (data && !loading) history.push(AuthRoutes.Dashboard);
  }, [data, loading]);

  const props = { formState, errorState: formError, onChange: handleChange };
  return (
    <div className="create-brief-box">
      <div className="brief-container">
        <div className="create-brief-input-box">
          <BriefInput {...props} keyProp="BriefName" title="Brief Name" />
          <BriefInput
            {...props}
            keyProp="tiktok"
            title="Select TikTok campaign to link to"
          />
          <BriefInput {...props} keyProp="objective" title="Objective" />
          <div className="create-brief-input-container">
            <div className="create-brief-input-title">Brief status</div>
            <select
              className="create-brief-input select-input"
              onChange={updateStatus}
            >
              <option value="">Select one</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <ShouldRender if={formError.active}>
              <div className="input-brief-error">{formError.active}</div>
            </ShouldRender>
          </div>
        </div>
        <BriefInspirations {...props} keyProp="creativeInspirations" />
      </div>

      <BriefInput
        {...props}
        keyProp="brandBriefDetails"
        title="Brief details"
        isTextArea
      />

      <div className="create-brief-btn-container">
        <div className="create-brief-btn" onClick={() => handleSubmit()}>
          <span className="create-brief-text">Create Brief</span>
          {loading && <IconLoader />}
        </div>
      </div>
    </div>
  );
};

export default withProfile(CreateBrief);
