import ShouldRender from "components/shouldRender";
import { times } from "lodash";
import { FC } from "react";
import { ICreateBriefError, ICreateBriefState } from "state/brandBrief";
import "./createBrief.css";

interface Props {
  keyProp: string;
  formState: ICreateBriefState;
  errorState: ICreateBriefError;
  onChange: (key: string, value: Array<string>) => void;
}
export const BriefInspirations: FC<Props> = ({
  keyProp: key,
  onChange,
  formState,
  errorState,
}) => {
  const handleChange = (index: number, value: string): void => {
    const insp = [...formState.creativeInspirations];
    insp[index] = value;
    onChange(key, insp);
  };

  return (
    <div className="brand-dashboard__form-item block-form-item form-item-2">
      <div className="brand-dashboard__form-title">Creative inspiration</div>
      {times(4, (index) => (
        <input
          onChange={(e): void => handleChange(index, e.target.value)}
          key={index.toString()}
          className="brand-dashboard__form-input"
          value={formState[key][index]}
          placeholder="Paste creative URL"
        />
      ))}
      <ShouldRender if={errorState[key]}>
        <div className="input-brief-error">{errorState[key]}</div>
      </ShouldRender>
    </div>
  );
};

export default BriefInspirations;
