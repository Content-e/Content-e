import React, { useContext, useEffect, useState } from 'react';
import withApolloProvider from 'hooks/apollo/withApollo';
import { updateBriefStatus, useCreateAd, useGetVideoUrl } from 'hooks';
import { CreativeRequestStatus, UnknownType } from 'utils';
import { ProfileContext } from 'state/profileSteps';
import { ITiktokVideo, ViewRequestProps } from './requests.interface';
import { CreateAdsMutationVariables } from 'API';

interface HocProps {
  id?: string;
}
export function withRequestView<T>(
  Component: React.FC<T & ViewRequestProps & HocProps>
): React.FC<T & HocProps> {
  return withApolloProvider((props: T & HocProps) => {
    const { id } = props;
    const {
      profileState: { data: profile },
    } = useContext(ProfileContext);
    const [errorMsg, setErrorMsg] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [isSuccess, updateSuccessStatus] = useState(false);
    const [tiktokVideo, setTiktokVideo] = useState<ITiktokVideo>({});

    const { getVideoUrl, loading: videoLoading, url } = useGetVideoUrl();
    const {
      updateStatus,
      loading: statusLoading,
      response: statusResponse,
    } = updateBriefStatus();
    const {
      createAd,
      loading: createAdLoading,
      data: createAdResponse,
    } = useCreateAd();

    const callApi = (status: CreativeRequestStatus): void => {
      if (id) updateStatus({ variables: { input: { id, status } } });
    };

    const approveRequest = (createAdPayload: CreateAdsMutationVariables) => {
      updateSuccessStatus(false);
      setErrorMsg('');
      if (
        !loading &&
        profile?.tiktokAccountAccess &&
        createAdPayload.adgroupId &&
        (createAdPayload.authCode || createAdPayload.landingPageUrl)
      ) {
        setLoading(true);
        try {
          const { access_token: token, advertiser_id: advId } = JSON.parse(
            profile.tiktokAccountAccess
          );
          const input = {
            token,
            advId,
            ...createAdPayload,
          };
          console.log({ input });
          createAd({ variables: { ...input } });
        } catch (err) {
          setErrorMsg(err.message);
          setLoading(false);
        }
      }
    };

    const rejectRequest = () => {
      updateSuccessStatus(false);
      setErrorMsg('');
      if (!loading) {
        setLoading(true);
        callApi(CreativeRequestStatus.Reject);
      }
    };

    useEffect(() => {
      if (!statusLoading && statusResponse) {
        setLoading(false);
        updateSuccessStatus(true);
      }
    }, [statusLoading, statusResponse]);

    useEffect(() => {
      if (!createAdLoading) {
        if (createAdResponse) callApi(CreativeRequestStatus.Accept);
        else if (createAdResponse === false) {
          setErrorMsg('Ad creation failed');
          setLoading(false);
        }
      }
    }, [createAdLoading, createAdResponse]);

    useEffect(() => {
      if (!videoLoading && url) {
        try {
          const parse = JSON.parse(url);
          const itemUrl = parse?.data?.item_info?.item_id;
          const previewUrl = parse?.data?.video_info?.poster_url;
          if (itemUrl)
            setTiktokVideo({
              videoUrl: `https://www.tiktok.com/embed/v2/${itemUrl}`,
              previewUrl,
            });
        } catch (err) {
          setErrorMsg(err.message);
          setLoading(false);
        }
      }
    }, [videoLoading, url]);

    const getVideoLink = (authCode?: string): void => {
      if (authCode && profile?.tiktokAccountAccess) {
        try {
          const { access_token: token, advertiser_id: advId } = JSON.parse(
            profile.tiktokAccountAccess
          );
          getVideoUrl({ variables: { token, advertiser_id: advId, authCode } });
        } catch (err) {
          setErrorMsg(err.message);
        }
      }
    };

    const hocProps: ViewRequestProps = {
      approveRequest,
      rejectRequest,
      getVideoLink,
      loading,
      errorMsg,
      isSuccess,
      tiktokVideo,
    };
    return <Component {...props} {...hocProps} />;
  });
}
export default withRequestView;
