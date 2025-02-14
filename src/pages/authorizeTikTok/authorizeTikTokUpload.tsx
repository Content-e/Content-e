import { FC, useState } from "react";
import AuthorizeTikTokHeader from "./authorizeTikTokHeader";
import { FileUploader } from "react-drag-drop-files";
import { Storage } from "aws-amplify";
import { IconLoader } from "components";

interface Props {
  onCross: () => void;
  goToPrev: () => void;
  goToNext: () => void;
  setUploading: (bol: boolean) => void;
  updatePath: (path: string, vidID: string) => void;
}

const fileTypes: string[] = ["MP4", "MOV", "AVI", "WMV", "WebM"];

export const AuthorizeTiktokUpload: FC<Props> = ({
  goToPrev,
  goToNext,
  updatePath,
  onCross,
  setUploading,
}) => {
  const [file, setFile] = useState<any | null>(null);
  const [err, setErr] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (f): void => {
    console.log(f);
    setFile(f);
  };

  const handleUpload = async (): Promise<void> => {
    setErr(false);
    setLoading(false);
    if (file) {
      setUploading(true);
      setLoading(true);
      const res: any = await goToNext();
      const id = res.data.createCreativeRequest.id;
      console.log(file);
      Storage.put(`creative/${id}/${file.name}`, file)
        .then(() => {
          updatePath(`creative/${id}/${file.name}`, id);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
          setUploading(false);
          onCross();
        });
    } else {
      setErr(true);
    }
  };

  return (
    <div className="tik-tok-modal">
      <AuthorizeTikTokHeader onCross={onCross} title="Upload the video" />
      <div className="tik-tok-upload">
        <FileUploader
          handleChange={handleChange}
          name="file"
          multiple={false}
          types={fileTypes}
          onDrop={() => {
            const span = document.querySelector(".sc-eGFuAX.gjDYDz");
            span!.textContent = "File Selected!";
          }}
        />
      </div>
      {err && <p className="tik-tok-error">Upload the video</p>}
      <div className="tik-tok-method" style={{ marginTop: 16 }}>
        {!loading ? (
          <>
            <button onClick={goToPrev} className="tik-tok-done">
              Back
            </button>
            <button onClick={handleUpload} className="tik-tok-done">
              Done
            </button>
          </>
        ) : (
          <IconLoader />
        )}
      </div>
    </div>
  );
};

export default AuthorizeTiktokUpload;
