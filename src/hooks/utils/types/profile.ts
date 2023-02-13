export type GetUserProfileProps = {
  getProfile: (unknown) => void;
  profileData?: GetUserProfileType | null;
  loading: boolean;
  error?: Error;
};

export type GetUserQueryVariables = {
  id: string;
};

export type BrandType = {
  items: {
    id: string;
    name: string;
    toneVoice: string;
    pillars: string;
    description: string;
    internalMission: string;
    strapLine: string;
    userEmail: string;
    createdAt: string;
    updatedAt: string;
    userProfileBrandId: string;
    owner: string;
  };
  nextToken: string;
};

export type GetUserProfileType = {
  __typename: "GetUserProfile";
  id: string;
  name: string;
  userEmail: string;
  description: string;
  brand: BrandType;
  owner: string;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  getUserProfile?: GetUserProfileType | null;
};
