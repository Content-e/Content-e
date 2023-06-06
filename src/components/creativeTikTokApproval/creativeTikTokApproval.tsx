import { FC, useEffect, useState } from 'react';
import { CreativeRequestStatus, UnknownType } from 'utils';
import { CreativeRequest } from 'API';
import { ViewRequestProps, withRequestView } from 'state/requests';
import { Storage } from 'aws-amplify';
import Button from 'components/ui/button';
import Modal from 'components/ui/modal';
import Status from 'components/ui/status';

interface Props {
  request?: CreativeRequest | null;
  createAdPayload: UnknownType;
  inspiration?: Array<string | null> | null;
  onClose: () => void;
}
export const CreativeTikTokApproval: FC<Props & ViewRequestProps> = ({
  request,
  onClose,
  createAdPayload,
  approveRequest,
  rejectRequest,
  getVideoLink,
  loading,
  isSuccess,
  errorMsg,
  tiktokVideo,
}) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [awsURL, setAwsURL] = useState<string>('');

  const onOkay = async () => {
    if (isConfirmationOpen) approveRequest(createAdPayload);
  };
  const onApprove = () => {
    if (!isConfirmationOpen) setIsConfirmationOpen(true);
  };
  const onReject = () => {
    if (!isConfirmationOpen) rejectRequest();
  };

  useEffect(() => {
    if (request?.tiktokVideoCode) {
      getVideoLink(request.tiktokVideoCode);
    } else {
      Storage.get(`${request?.tiktokCreativeUrl}`)
        .then((data) => {
          console.log('AWS video URL:', data);
          setAwsURL(data);
        })
        .catch((err) =>
          console.log(`Failed to load ${request?.tiktokCreativeUrl}:`, err)
        );
    }
  }, [request]);

  useEffect(() => {
    if (!loading && isSuccess) onClose();
  }, [loading, isSuccess]);

  return (
    <>
      <Modal
        title="Please confirm to add this creative to your live campaign"
        isOpen={isConfirmationOpen}
        handleClose={() => setIsConfirmationOpen(false)}
      >
        <p className="prose my-8">
          Clicking confirm below will add this creative to your campaign and
          will start spending.
        </p>
        {errorMsg && (
          <p className="prose my-8 text-danger">
            Clicking confirm below will add this creative to your campaign and
            will start spending.
          </p>
        )}
        <div className="flex justify-center">
          <Button onClick={onOkay} isLoading={loading} disabled={loading}>
            Confirm
          </Button>
        </div>
      </Modal>

      <section className="paper">
        <h1 className="text-lg text-primary font-bold">Creative</h1>
        <div className="m-2 flex justify-center items-center">
          {loading && 'LOADING'}
          {awsURL ? (
            <video controls className="outline-none" autoFocus autoPlay muted>
              <source src={awsURL} />
            </video>
          ) : tiktokVideo?.videoUrl ? (
            <iframe
              className="creative-video-iframe"
              src={tiktokVideo?.videoUrl}
              name={`video-${tiktokVideo?.videoUrl}`}
              // eslint-disable-next-line max-len
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
            />
          ) : (
            <p className="prose text-danger font-bold">
              There was an error fetching TikTok video{' '}
              {errorMsg && `: ${errorMsg}`}
            </p>
          )}
        </div>
        <div className="flex justify-center mt-6">
          {request?.status === CreativeRequestStatus.New ? (
            <div className="flex gap-4">
              <Button onClick={onApprove}>Approve</Button>
              <Button onClick={onReject} variant="secondary">
                Reject
              </Button>
            </div>
          ) : (
            <p>
              This request is in status:{' '}
              <Status value={request?.status || ''} />
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default withRequestView(CreativeTikTokApproval);
