/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type DeleteUserProfileInput = {
  id: string,
};

export type ModelUserProfileConditionInput = {
  name?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  name: string,
  userEmail: string,
  description?: string | null,
  brand?: ModelBrandProfileConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBrandProfileConnection = {
  __typename: "ModelBrandProfileConnection",
  items:  Array<BrandProfile | null >,
  nextToken?: string | null,
};

export type BrandProfile = {
  __typename: "BrandProfile",
  id: string,
  name?: string | null,
  toneVoice?: Array< string | null > | null,
  pillars?: Array< string | null > | null,
  description?: string | null,
  internalMission?: string | null,
  strapLine?: string | null,
  userEmail?: string | null,
  createdAt: string,
  updatedAt: string,
  userProfileBrandId?: string | null,
  owner?: string | null,
};

export type CreateUserProfileInput = {
  id?: string | null,
  name: string,
  userEmail: string,
  description?: string | null,
  owner?: string | null,
};

export type UpdateUserProfileInput = {
  id: string,
  name?: string | null,
  userEmail?: string | null,
  description?: string | null,
  owner?: string | null,
};

export type CreateBrandProfileInput = {
  id?: string | null,
  name?: string | null,
  toneVoice?: Array< string | null > | null,
  pillars?: Array< string | null > | null,
  description?: string | null,
  internalMission?: string | null,
  strapLine?: string | null,
  userEmail?: string | null,
  userProfileBrandId?: string | null,
};

export type ModelBrandProfileConditionInput = {
  name?: ModelStringInput | null,
  toneVoice?: ModelStringInput | null,
  pillars?: ModelStringInput | null,
  description?: ModelStringInput | null,
  internalMission?: ModelStringInput | null,
  strapLine?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  and?: Array< ModelBrandProfileConditionInput | null > | null,
  or?: Array< ModelBrandProfileConditionInput | null > | null,
  not?: ModelBrandProfileConditionInput | null,
  userProfileBrandId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBrandProfileInput = {
  id: string,
  name?: string | null,
  toneVoice?: Array< string | null > | null,
  pillars?: Array< string | null > | null,
  description?: string | null,
  internalMission?: string | null,
  strapLine?: string | null,
  userEmail?: string | null,
  userProfileBrandId?: string | null,
};

export type DeleteBrandProfileInput = {
  id: string,
};

export type GPT_INPUT = {
  context?: string | null,
  prompType: GPT_PROMPT,
  businessDescription?: string | null,
  toneOfVoice?: string | null,
  brandName?: string | null,
  brandPillars?: Array< string | null > | null,
  brandMissionStatement?: string | null,
};

export enum GPT_PROMPT {
  BRAND_NAME = "BRAND_NAME",
  BRAND_NAME_REFRESH = "BRAND_NAME_REFRESH",
  BRAND_PILLARS = "BRAND_PILLARS",
  BRAND_VALUES = "BRAND_VALUES",
  BRAND_MISION_STATEMENT = "BRAND_MISION_STATEMENT",
  BRAND_TAGLINE_STATEMENT = "BRAND_TAGLINE_STATEMENT",
}


export type GPT_RESPONSE = {
  __typename: "GPT_RESPONSE",
  responseType?: GPT_RESPONSE_TYPE | null,
  BRAND_NAME?: string | null,
  BRAND_NAME_REFRESH?: string | null,
  BRAND_PILLARS?: string | null,
  BRAND_VALUES?: string | null,
  BRAND_MISSION_STATEMENT?: string | null,
  BRAND_TAGLINE_STATEMENT?: string | null,
  error?: boolean | null,
  message?: string | null,
};

export enum GPT_RESPONSE_TYPE {
  BRAND_NAME = "BRAND_NAME",
  BRAND_NAME_REFRESH = "BRAND_NAME_REFRESH",
  BRAND_PILLARS = "BRAND_PILLARS",
  BRAND_VALUES = "BRAND_VALUES",
  BRAND_MISION_STATEMENT = "BRAND_MISION_STATEMENT",
  BRAND_TAGLINE_STATEMENT = "BRAND_TAGLINE_STATEMENT",
}


export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBrandProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  toneVoice?: ModelStringInput | null,
  pillars?: ModelStringInput | null,
  description?: ModelStringInput | null,
  internalMission?: ModelStringInput | null,
  strapLine?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  and?: Array< ModelBrandProfileFilterInput | null > | null,
  or?: Array< ModelBrandProfileFilterInput | null > | null,
  not?: ModelBrandProfileFilterInput | null,
  userProfileBrandId?: ModelIDInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  userEmail?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBrandProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  toneVoice?: ModelSubscriptionStringInput | null,
  pillars?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  internalMission?: ModelSubscriptionStringInput | null,
  strapLine?: ModelSubscriptionStringInput | null,
  userEmail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBrandProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionBrandProfileFilterInput | null > | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    userEmail: string,
    description?: string | null,
    brand?:  {
      __typename: "ModelBrandProfileConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    userEmail: string,
    description?: string | null,
    brand?:  {
      __typename: "ModelBrandProfileConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    userEmail: string,
    description?: string | null,
    brand?:  {
      __typename: "ModelBrandProfileConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBrandProfileMutationVariables = {
  input: CreateBrandProfileInput,
  condition?: ModelBrandProfileConditionInput | null,
};

export type CreateBrandProfileMutation = {
  createBrandProfile?:  {
    __typename: "BrandProfile",
    id: string,
    name?: string | null,
    toneVoice?: Array< string | null > | null,
    pillars?: Array< string | null > | null,
    description?: string | null,
    internalMission?: string | null,
    strapLine?: string | null,
    userEmail?: string | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateBrandProfileMutationVariables = {
  input: UpdateBrandProfileInput,
  condition?: ModelBrandProfileConditionInput | null,
};

export type UpdateBrandProfileMutation = {
  updateBrandProfile?:  {
    __typename: "BrandProfile",
    id: string,
    name?: string | null,
    toneVoice?: Array< string | null > | null,
    pillars?: Array< string | null > | null,
    description?: string | null,
    internalMission?: string | null,
    strapLine?: string | null,
    userEmail?: string | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteBrandProfileMutationVariables = {
  input: DeleteBrandProfileInput,
  condition?: ModelBrandProfileConditionInput | null,
};

export type DeleteBrandProfileMutation = {
  deleteBrandProfile?:  {
    __typename: "BrandProfile",
    id: string,
    name?: string | null,
    toneVoice?: Array< string | null > | null,
    pillars?: Array< string | null > | null,
    description?: string | null,
    internalMission?: string | null,
    strapLine?: string | null,
    userEmail?: string | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetGPTresponseQueryVariables = {
  data?: GPT_INPUT | null,
};

export type GetGPTresponseQuery = {
  getGPTresponse?:  {
    __typename: "GPT_RESPONSE",
    responseType?: GPT_RESPONSE_TYPE | null,
    BRAND_NAME?: string | null,
    BRAND_NAME_REFRESH?: string | null,
    BRAND_PILLARS?: string | null,
    BRAND_VALUES?: string | null,
    BRAND_MISSION_STATEMENT?: string | null,
    BRAND_TAGLINE_STATEMENT?: string | null,
    error?: boolean | null,
    message?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    userEmail: string,
    description?: string | null,
    brand?:  {
      __typename: "ModelBrandProfileConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      name: string,
      userEmail: string,
      description?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserProfilesByUserEmailQueryVariables = {
  userEmail: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserProfilesByUserEmailQuery = {
  userProfilesByUserEmail?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      name: string,
      userEmail: string,
      description?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBrandProfileQueryVariables = {
  id: string,
};

export type GetBrandProfileQuery = {
  getBrandProfile?:  {
    __typename: "BrandProfile",
    id: string,
    name?: string | null,
    toneVoice?: Array< string | null > | null,
    pillars?: Array< string | null > | null,
    description?: string | null,
    internalMission?: string | null,
    strapLine?: string | null,
    userEmail?: string | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListBrandProfilesQueryVariables = {
  filter?: ModelBrandProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBrandProfilesQuery = {
  listBrandProfiles?:  {
    __typename: "ModelBrandProfileConnection",
    items:  Array< {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BrandProfilesByUserEmailQueryVariables = {
  userEmail: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBrandProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BrandProfilesByUserEmailQuery = {
  brandProfilesByUserEmail?:  {
    __typename: "ModelBrandProfileConnection",
    items:  Array< {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    userEmail: string,
    description?: string | null,
    brand?:  {
      __typename: "ModelBrandProfileConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    userEmail: string,
    description?: string | null,
    brand?:  {
      __typename: "ModelBrandProfileConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    userEmail: string,
    description?: string | null,
    brand?:  {
      __typename: "ModelBrandProfileConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBrandProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBrandProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateBrandProfileSubscription = {
  onCreateBrandProfile?:  {
    __typename: "BrandProfile",
    id: string,
    name?: string | null,
    toneVoice?: Array< string | null > | null,
    pillars?: Array< string | null > | null,
    description?: string | null,
    internalMission?: string | null,
    strapLine?: string | null,
    userEmail?: string | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBrandProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBrandProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBrandProfileSubscription = {
  onUpdateBrandProfile?:  {
    __typename: "BrandProfile",
    id: string,
    name?: string | null,
    toneVoice?: Array< string | null > | null,
    pillars?: Array< string | null > | null,
    description?: string | null,
    internalMission?: string | null,
    strapLine?: string | null,
    userEmail?: string | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBrandProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBrandProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBrandProfileSubscription = {
  onDeleteBrandProfile?:  {
    __typename: "BrandProfile",
    id: string,
    name?: string | null,
    toneVoice?: Array< string | null > | null,
    pillars?: Array< string | null > | null,
    description?: string | null,
    internalMission?: string | null,
    strapLine?: string | null,
    userEmail?: string | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
    owner?: string | null,
  } | null,
};
