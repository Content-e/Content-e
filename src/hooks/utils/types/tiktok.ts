export type HandleCreativeRequestReturn = {
  createTiktokRequest: (unknown) => void;
  data?: string | null;
  loading: boolean;
  error?: Error;
};
