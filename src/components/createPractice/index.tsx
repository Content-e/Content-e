import classNames from "classnames";
import { IconLoader } from "components/loader";
import ShouldRender from "components/shouldRender";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { BestPracticeProps, withbestPractice } from "state/bestPractice";
import { IProfileImageUpload } from "state/profileSteps";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import {
  AllowedProfileSizeKB,
  initialCreatePracticeError,
  initialCreatePracticeState,
  UnknownType,
} from "utils";
import "./style.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const CreatePractice: FC<BestPracticeProps> = ({
  saveData,
  loading,
  response,
  bestPracticeState,
}) => {
  const history = useHistory();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState(initialCreatePracticeState);
  const [image, setImage] = useState<IProfileImageUpload>({});
  const [formError, setFormError] = useState(initialCreatePracticeError);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleChange = (
    key: string,
    value: string | Array<string> | boolean
  ): void => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setFormError((prev) => ({ ...prev, [key]: null }));
  };

  const handleImageChange = (e: UnknownType): void => {
    if (e?.target?.files?.[0]) {
      if (e.target.files[0].size > AllowedProfileSizeKB * 1024)
        setImage({ error: `Maximum ${AllowedProfileSizeKB} KB size allowed` });
      else setImage({ file: e.target.files[0] });
    }
  };

  const validateInputs = (): boolean => {
    const errObj = { ...initialCreatePracticeError };
    if (!formState.headLine.length) errObj.headLine = "Headline is required";
    if (!formState.description.length)
      errObj.description = "Best practice description is required";

    setFormError({ ...errObj });
    return !(image.error || Object.values(errObj).find((e) => e));
  };

  const handleSubmit = (): void => {
    if (validateInputs()) saveData(formState);
  };

  useEffect(() => {
    if (response && !loading) history.goBack();
  }, [response, loading]);

  useEffect(() => {
    if (bestPracticeState) setFormState(bestPracticeState);
  }, [bestPracticeState]);

  const headingText = useMemo(
    () => (bestPracticeState ? "Edit" : "Create"),
    [bestPracticeState]
  );

  return (
    <>
      <div className="creatives-table-label">
        Admin - {headingText} Best Practice
      </div>
      <div className="create-brief-box">
        <div className="create-best-practice-panel">
          <div className="field-label-container field-practice-headline">
            <div className="field-label">Headline</div>
            <input
              className="best-practice-input-box"
              value={formState.headLine}
              onChange={(e): void => handleChange("headLine", e.target.value)}
            />
            <ShouldRender if={formError.headLine}>
              <span>{formError.headLine}</span>
            </ShouldRender>
          </div>

          <div className="field-label-container field-practice-image">
            <div className="field-label">Main image</div>
            <input
              type="file"
              accept=".png, .jpg"
              onChange={handleImageChange}
              className="field-practice-image-input"
              ref={imageInputRef}
            />
            <button
              onClick={(): void => imageInputRef.current?.click()}
              className={classNames("best-practice-input-box", {
                isBlurred: !image.name,
              })}
            >
              Upload image
            </button>
            <ShouldRender if={image.error}>
              <span>{image.error}</span>
            </ShouldRender>
          </div>

          <div className="field-label-container field-practice-status">
            <div className="field-label">Status</div>
            <select
              className="create-brief-input select-input best-practice-input-box"
              onChange={(e): void => handleChange("active", e.target.value)}
              value={formState.active}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            <ShouldRender if={formError.headLine}>
              <span>{formError.headLine}</span>
            </ShouldRender>
          </div>
        </div>
        <div className="create-best-practice-panel">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="best-practice-editor-wrapper"
            editorClassName="best-practice-editor"
            toolbar={{ options: ["inline", "list", "textAlign"] }}
          />
        </div>
        <div className="create-best-practice-btn-panel">
          <div className="create-brief-btn" onClick={handleSubmit}>
            <span className="create-brief-text">{headingText} Brief</span>
            {loading && <IconLoader />}
          </div>
        </div>
      </div>
    </>
  );
};

export default withbestPractice(CreatePractice);
