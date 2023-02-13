import { UnknownType } from "utils";

export type GetUserProfileProps = {
  getProfile: (unknown) => void;
  profileData?: UnknownType | null;
  loading: boolean;
  error?: Error;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUserProfile?: {
    __typename: "GetUserProfile";
    id: string;
    name: string;
    userEmail: string;
    description: string;
    brand: {
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
    owner: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};
