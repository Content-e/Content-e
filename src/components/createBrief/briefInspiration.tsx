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
    <div className="creative-inspiration-box">
      <div className="create-brief-input-title">Creative Inspiration</div>
      <div className="creative-inspiration-input-container">
        {times(5, (index) => (
          <input
            onChange={(e): void => handleChange(index, e.target.value)}
            key={index.toString()}
            className="create-brief-input"
            value={formState[key][index]}
            placeholder="Paste creative URL"
          />
        ))}
      </div>
      <ShouldRender if={errorState[key]}>
        <div className="input-brief-error">{errorState[key]}</div>
      </ShouldRender>
    </div>
  );
};

export default BriefInspirations;
