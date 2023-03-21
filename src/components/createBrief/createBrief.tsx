import { IconLoader } from "components/loader";
import ShouldRender from "components/shouldRender";
import { FC, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { SaveBriefProps } from "state/brandBrief";
import withSaveBrief from "state/brandBrief/withSaveBriefHoc";
import {
  initialCreateBriefError,
  initialCreateBriefState,
  UnknownType,
} from "utils";
import BriefInput from "./briefInput";
import BriefInspirations from "./briefInspiration";
import "./createBrief.css";

export const CreateBrief: FC<SaveBriefProps> = ({
  saveData,
  loading,
  response,
  briefState,
}) => {
  const history = useHistory();
  const [formState, setFormState] = useState(initialCreateBriefState);
  const [formError, setFormError] = useState(initialCreateBriefError);

  const handleChange = (
    key: string,
    value: string | Array<string> | boolean
  ): void => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setFormError((prev) => ({ ...prev, [key]: null }));
  };

  const updateStatus = (e: UnknownType): void =>
    handleChange("active", !!parseInt(e.target.value));

  const validateInputs = (): boolean => {
    const errObj = { ...initialCreateBriefError };
    if (!formState.BriefName.length)
      errObj.BriefName = "Brief name is required";
    if (!formState.objective.length) errObj.objective = "Objective is required";
    if (!formState.creativeInspirations.find((e) => e.length))
      errObj.creativeInspirations = "Atleast one inspiration is required";
    if (!formState.brandBriefDetails.length)
      errObj.brandBriefDetails = "Brief details is required";

    setFormError({ ...errObj });
    return !Object.values(errObj).find((e) => e);
  };

  const handleSubmit = (): void => {
    if (validateInputs()) saveData(formState);
  };

  useEffect(() => {
    if (response && !loading) history.goBack();
  }, [response, loading]);

  useEffect(() => {
    if (briefState) setFormState(briefState);
  }, [briefState]);

  const headingText = useMemo(
    () => (briefState ? "Edit" : "Create"),
    [briefState]
  );

  const props = { formState, errorState: formError, onChange: handleChange };
  return (
    <>
      <div className="creatives-table-label">{headingText} Brief</div>
      <div className="create-brief-box">
        <div className="brief-container">
          <div className="create-brief-input-box">
            <BriefInput {...props} keyProp="BriefName" title="Brief Name" />
            <BriefInput
              {...props}
              keyProp="tiktokHandle"
              title="Select TikTok campaign to link to"
            />
            <BriefInput {...props} keyProp="objective" title="Objective" />
            <div className="create-brief-input-container">
              <div className="create-brief-input-title">Brief status</div>
              <select
                className="create-brief-input select-input"
                onChange={updateStatus}
                value={+formState.active}
              >
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
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
          <div className="create-brief-btn" onClick={handleSubmit}>
            <span className="create-brief-text">{headingText} Brief</span>
            {loading && <IconLoader />}
          </div>
        </div>
      </div>
    </>
  );
};

export default withSaveBrief(CreateBrief);
