import _ from 'lodash';
import { FC, useState } from 'react';
import AuthorizeTikTokHeader from './authorizeTikTokHeader';
import { FileUploader } from 'react-drag-drop-files';
import { Storage } from 'aws-amplify';
import { Spinner } from 'react-bootstrap';
import Button from 'components/ui/button';
import { v4 as uuid } from 'uuid';

interface Props {
  onCross: () => void;
  goToPrev: () => void;
  goToNext: () => void;
  setUploading: (bol: boolean) => void;
  updatePath: (path: string, vidID: string) => void;
}

const fileTypes: string[] = ['MP4', 'MOV', 'AVI', 'WMV', 'WebM'];

const generateUniqueFilename = (fileName: string) => {
  const extension = _.last(fileName.split('.'));
  return `${uuid()}.${extension}`;
};

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
      const fileName = generateUniqueFilename(file.name);
      console.log({ file, fileName });
      Storage.put(`creative/${id}/${fileName}`, file)
        .then(() => {
          updatePath(`creative/${id}/${fileName}`, id);
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
      <p className="my-4">
        Only 9:16, 1:1, or 16:9 aspect ratios are supported. Resolution must be
        a minimum of 540*960px, 640*640px, or 960*540px.
      </p>
      <div className="tik-tok-upload">
        <FileUploader
          handleChange={handleChange}
          name="file"
          multiple={false}
          types={fileTypes}
          onDrop={() => {
            const span = document.querySelector(
              '.tik-tok-upload label div span'
            );
            span!.innerHTML = 'File Selected!';
          }}
          onSelect={() => {
            const span = document.querySelector(
              '.tik-tok-upload label div span'
            );
            setTimeout(function () {
              span!.innerHTML = 'File Selected!';
            }, 50);
          }}
        />
      </div>
      {err && <p className="tik-tok-error">Upload the video</p>}
      <div className="tik-tok-method" style={{ marginTop: 16 }}>
        {!loading ? (
          <>
            <Button variant="secondary" onClick={goToPrev}>
              Back
            </Button>
            <Button onClick={handleUpload}>Upload</Button>
          </>
        ) : (
          <Spinner
            animation="border"
            className="spinner-border"
            variant="primary"
          />
        )}
      </div>
    </div>
  );
};

export default AuthorizeTiktokUpload;
