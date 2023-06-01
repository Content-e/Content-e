import { isValidUrl } from "components/helpers";
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
  getAdGroups,
  dataLoading,
  listAdGroups,
  listCampaigns,
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
  const updateAdGroup = (e: UnknownType): void =>
    handleChange("adgroupId", e.target.value);
  const updateCampaign = (e: UnknownType): void =>
    handleChange("campaignId", e.target.value);

  const validateInputs = (): boolean => {
    const errObj = { ...initialCreateBriefError };
    if (!formState.BriefName.length)
      errObj.BriefName = "Brief name is required";
    if (!formState.objective.length) errObj.objective = "Objective is required";
    if (!formState.creativeInspirations.find((e) => e.length))
      errObj.creativeInspirations = "Atleast one inspiration is required";
    if (formState.creativeInspirations.find((e) => !isValidUrl(e)))
      errObj.creativeInspirations = "Inspiration URL must be valid";
    if (!formState.brandBriefDetails.length)
      errObj.brandBriefDetails = "Brief details is required";
    if (!formState.campaignId.length)
      errObj.campaignId = "Campaign is required";
    if (!formState.adgroupId.length) errObj.adgroupId = "Ad Group is required";

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

  useEffect(() => {
    if (formState.campaignId) getAdGroups(formState.campaignId);
  }, [formState.campaignId]);

  const headingText = useMemo(
    () => (briefState ? "Edit" : "Create"),
    [briefState]
  );

  const props = { formState, errorState: formError, onChange: handleChange };
  return (
    <div>
      <div className="brand-dashboard__item">
        <div className="brand-dashboard__top">
          <div className="brand-dashboard__top-title">{headingText} Brief</div>
          <img
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots.svg"
          />
        </div>
        <div>
          <div className="xl:flex w-full p-6 xl:gap-8">
            <div className="brand-dashboard__form-item form-item-1 xl:w-2/3 w-full">
              <div className="brand-dashboard__form-group">
                <BriefInput {...props} keyProp="BriefName" title="Brief Name" />
              </div>
              <div className="brand-dashboard__form-group">
                <div className="brand-dashboard__form-label">
                  Select TikTok campaign to link to
                </div>
                <select
                  className="brand-dashboard__identity-select"
                  onChange={updateCampaign}
                  value={formState.campaignId}
                  disabled={dataLoading}
                >
                  <option value="">Select One</option>
                  {listCampaigns.map((e) => (
                    <option value={e.id}>{e.value}</option>
                  ))}
                </select>
              </div>
              <div className="brand-dashboard__form-group">
                <BriefInput {...props} keyProp="adgroupId" title="Add group" />
              </div>
              <div className="brand-dashboard__form-group">
                <BriefInput {...props} keyProp="objective" title="Objective" />
              </div>
              <div className="brand-dashboard__form-group">
                <div className="brand-dashboard__form-label">Brief status</div>
                <input type="text" className="brand-dashboard__form-input" />
              </div>
            </div>
            <div className="xl:block hidden">
              <BriefInspirations {...props} keyProp="creativeInspirations" />
            </div>
          </div>
          <div className="pb-6 px-6">
            <BriefInput
              {...props}
              keyProp="brandBriefDetails"
              title="Brief details"
              isTextArea
            />
          </div>
          <div className="xl:hidden w-full px-6 pb-6">
            <BriefInspirations {...props} keyProp="creativeInspirations" />
          </div>
          <div
            className="
            flex sm:flex-row w-full sm:justify-center
            sm:gap-6 font-sans text-base text-white font-bold flex-col-reverse gap-2 items-center px-6"
          >
            <button
              className="bg-brand-secondary px-10 py-3 rounded-[40px] sm:w-fit w-full"
              onClick={() => history.goBack()}
            >
              CANCEL
            </button>
            <button
              className="bg-brand-primary px-10 py-3 rounded-[40px] sm:w-fit w-full"
              onClick={handleSubmit}
            >
              SAVE BRIEF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="creatives-table-label">{headingText} Brief</div>
      <div className="create-brief-box">
        <div className="brief-container">
          <div className="create-brief-input-box">
            <BriefInput {...props} keyProp="BriefName" title="Brief Name" />

            <div className="create-brief-input-container">
              <div className="create-brief-input-title">
                Select TikTok campaign to link to
              </div>
              <select
                className="create-brief-input select-input"
                onChange={updateCampaign}
                value={formState.campaignId}
                disabled={dataLoading}
              >
                <option value="">Select One</option>
                {listCampaigns.map((e) => (
                  <option value={e.id}>{e.value}</option>
                ))}
              </select>
              <ShouldRender if={formError.campaignId}>
                <div className="input-brief-error">{formError.campaignId}</div>
              </ShouldRender>
            </div>

            <div className="create-brief-input-container">
              <div className="create-brief-input-title">
                Select TikTok adgroup
              </div>
              <select
                className="create-brief-input select-input"
                onChange={updateAdGroup}
                value={formState.adgroupId}
                disabled={dataLoading || !formState.campaignId}
              >
                <option value="">Select One</option>
                {listAdGroups.map((e) => (
                  <option value={e.id}>{e.value}</option>
                ))}
              </select>
              <ShouldRender if={formError.adgroupId}>
                <div className="input-brief-error">{formError.adgroupId}</div>
              </ShouldRender>
            </div>

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
