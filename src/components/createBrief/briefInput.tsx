import ShouldRender from "components/shouldRender";
import { FC } from "react";
import { ICreateBriefError, ICreateBriefState } from "state/brandBrief";
import "./createBrief.css";

interface Props {
  title: string;
  keyProp: string;
  formState: ICreateBriefState;
  errorState: ICreateBriefError;
  onChange: (key: string, value: string) => void;
  isTextArea?: boolean;
}
export const BriefInspiration: FC<Props> = ({
  title,
  keyProp: key,
  onChange,
  formState,
  errorState,
  isTextArea,
}) => {
  return (
    <>
      <div className="brand-dashboard__form-label">{title}</div>
      <ShouldRender if={!isTextArea}>
        <input
          className="brand-dashboard__form-input"
          value={formState[key]}
          onChange={(e): void => onChange(key, e.target.value)}
        />
      </ShouldRender>
      <ShouldRender if={isTextArea}>
        <textarea
          className="brand-dashboard__form-textarea"
          value={formState[key]}
          onChange={(e): void => onChange(key, e.target.value)}
        />
      </ShouldRender>
      <ShouldRender if={errorState[key]}>
        <div className="input-brief-error">{errorState[key]}</div>
      </ShouldRender>
    </>
  );
};

export default BriefInspiration;
