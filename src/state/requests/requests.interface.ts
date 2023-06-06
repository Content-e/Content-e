import { UnknownType } from 'utils';

export interface ITiktokVideo {
  videoUrl?: string;
  previewUrl?: string;
}

export interface ViewRequestProps {
  approveRequest: (createAdPayload: UnknownType) => void;
  rejectRequest: () => void;
  getVideoLink: (id?: string) => void;
  loading: boolean;
  tiktokVideo?: ITiktokVideo;
  errorMsg?: string;
  isSuccess: boolean;
}
