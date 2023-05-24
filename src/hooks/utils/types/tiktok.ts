export type HandleCreativeRequestReturn = {
  createTiktokRequest: (unknown) => void;
  data?: string | null;
  loading: boolean;
  error?: Error;
};

export type UpdateCreativeRequestReturn = {
  updateTiktokRequest: (unknown) => void;
  data?: string | null;
  loading: boolean;
  error?: Error;
};
