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
  userType?: ModelUSER_TYPESInput | null,
  tiktokHandler?: ModelStringInput | null,
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

export type ModelUSER_TYPESInput = {
  eq?: USER_TYPES | null,
  ne?: USER_TYPES | null,
};

export enum USER_TYPES {
  CREATIVE_USER = "CREATIVE_USER",
  BRAND_USER = "BRAND_USER",
  ADMIN_USER = "ADMIN_USER",
}


export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  name: string,
  userEmail: string,
  description?: string | null,
  brand?: ModelBrandProfileConnection | null,
  owner?: string | null,
  userType: USER_TYPES,
  tiktokHandler?: string | null,
  bestPractices?: ModelBestPracticesConnection | null,
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
  tiktokHandle?: string | null,
  vertical?: string | null,
  metaData?: string | null,
  briefs?: ModelBrandBriefConnection | null,
  createdAt: string,
  updatedAt: string,
  userProfileBrandId?: string | null,
};

export type ModelBrandBriefConnection = {
  __typename: "ModelBrandBriefConnection",
  items:  Array<BrandBrief | null >,
  nextToken?: string | null,
};

export type BrandBrief = {
  __typename: "BrandBrief",
  id: string,
  BriefName?: string | null,
  vertical: string,
  objective?: string | null,
  brandBriefDetails?: string | null,
  creativeInspirations?: Array< string | null > | null,
  active?: boolean | null,
  creativeRequests?: ModelCreativeRequestConnection | null,
  brandId: string,
  brandProfile?: BrandProfile | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCreativeRequestConnection = {
  __typename: "ModelCreativeRequestConnection",
  items:  Array<CreativeRequest | null >,
  nextToken?: string | null,
};

export type CreativeRequest = {
  __typename: "CreativeRequest",
  brandBriefId: string,
  creatorId: string,
  status: string,
  tiktokCreativeUrl: string,
  tiktokVideoCode: string,
  creativeTiktokHandle?: string | null,
  creatorDescription?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelBestPracticesConnection = {
  __typename: "ModelBestPracticesConnection",
  items:  Array<BestPractices | null >,
  nextToken?: string | null,
};

export type BestPractices = {
  __typename: "BestPractices",
  headLine: string,
  description: string,
  urlPath: string,
  active: string,
  owner?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userProfileBestPracticesId?: string | null,
};

export type DeleteBestPracticesInput = {
  id: string,
};

export type ModelBestPracticesConditionInput = {
  headLine?: ModelStringInput | null,
  description?: ModelStringInput | null,
  urlPath?: ModelStringInput | null,
  active?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBestPracticesConditionInput | null > | null,
  or?: Array< ModelBestPracticesConditionInput | null > | null,
  not?: ModelBestPracticesConditionInput | null,
  userProfileBestPracticesId?: ModelIDInput | null,
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

export type CreateUserProfileInput = {
  id?: string | null,
  name: string,
  userEmail: string,
  description?: string | null,
  owner?: string | null,
  userType: USER_TYPES,
  tiktokHandler?: string | null,
};

export type UpdateUserProfileInput = {
  id: string,
  name?: string | null,
  userEmail?: string | null,
  description?: string | null,
  owner?: string | null,
  userType?: USER_TYPES | null,
  tiktokHandler?: string | null,
};

export type CreateBestPracticesInput = {
  headLine: string,
  description: string,
  urlPath: string,
  active: string,
  owner?: string | null,
  id?: string | null,
  userProfileBestPracticesId?: string | null,
};

export type UpdateBestPracticesInput = {
  headLine?: string | null,
  description?: string | null,
  urlPath?: string | null,
  active?: string | null,
  owner?: string | null,
  id: string,
  userProfileBestPracticesId?: string | null,
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
  tiktokHandle?: string | null,
  vertical?: string | null,
  metaData?: string | null,
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
  tiktokHandle?: ModelStringInput | null,
  vertical?: ModelStringInput | null,
  metaData?: ModelStringInput | null,
  and?: Array< ModelBrandProfileConditionInput | null > | null,
  or?: Array< ModelBrandProfileConditionInput | null > | null,
  not?: ModelBrandProfileConditionInput | null,
  userProfileBrandId?: ModelIDInput | null,
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
  tiktokHandle?: string | null,
  vertical?: string | null,
  metaData?: string | null,
  userProfileBrandId?: string | null,
};

export type DeleteBrandProfileInput = {
  id: string,
};

export type CreateBrandBriefInput = {
  id?: string | null,
  BriefName?: string | null,
  vertical: string,
  objective?: string | null,
  brandBriefDetails?: string | null,
  creativeInspirations?: Array< string | null > | null,
  active?: boolean | null,
  brandId: string,
};

export type ModelBrandBriefConditionInput = {
  BriefName?: ModelStringInput | null,
  vertical?: ModelStringInput | null,
  objective?: ModelStringInput | null,
  brandBriefDetails?: ModelStringInput | null,
  creativeInspirations?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  brandId?: ModelIDInput | null,
  and?: Array< ModelBrandBriefConditionInput | null > | null,
  or?: Array< ModelBrandBriefConditionInput | null > | null,
  not?: ModelBrandBriefConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBrandBriefInput = {
  id: string,
  BriefName?: string | null,
  vertical?: string | null,
  objective?: string | null,
  brandBriefDetails?: string | null,
  creativeInspirations?: Array< string | null > | null,
  active?: boolean | null,
  brandId?: string | null,
};

export type DeleteBrandBriefInput = {
  id: string,
};

export type CreateCreativeRequestInput = {
  brandBriefId: string,
  creatorId: string,
  status: string,
  tiktokCreativeUrl: string,
  tiktokVideoCode: string,
  creativeTiktokHandle?: string | null,
  creatorDescription?: string | null,
  id?: string | null,
};

export type ModelCreativeRequestConditionInput = {
  brandBriefId?: ModelIDInput | null,
  creatorId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  tiktokCreativeUrl?: ModelStringInput | null,
  tiktokVideoCode?: ModelStringInput | null,
  creativeTiktokHandle?: ModelStringInput | null,
  creatorDescription?: ModelStringInput | null,
  and?: Array< ModelCreativeRequestConditionInput | null > | null,
  or?: Array< ModelCreativeRequestConditionInput | null > | null,
  not?: ModelCreativeRequestConditionInput | null,
};

export type UpdateCreativeRequestInput = {
  brandBriefId?: string | null,
  creatorId?: string | null,
  status?: string | null,
  tiktokCreativeUrl?: string | null,
  tiktokVideoCode?: string | null,
  creativeTiktokHandle?: string | null,
  creatorDescription?: string | null,
  id: string,
};

export type DeleteCreativeRequestInput = {
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
  tagLine?: string | null,
};

export enum GPT_PROMPT {
  BRAND_NAME = "BRAND_NAME",
  BRAND_NAME_REFRESH = "BRAND_NAME_REFRESH",
  BRAND_PILLARS = "BRAND_PILLARS",
  BRAND_VALUES = "BRAND_VALUES",
  BRAND_MISSION_STATEMENT = "BRAND_MISSION_STATEMENT",
  BRAND_MISSION_STATEMENT_REFRESH = "BRAND_MISSION_STATEMENT_REFRESH",
  BRAND_TAGLINE_STATEMENT = "BRAND_TAGLINE_STATEMENT",
  BRAND_TAGLINE_STATEMENT_REFRESH = "BRAND_TAGLINE_STATEMENT_REFRESH",
  BRAND_PILLARS_REFRESH = "BRAND_PILLARS_REFRESH",
}


export type GPT_RESPONSE = {
  __typename: "GPT_RESPONSE",
  responseType?: GPT_RESPONSE_TYPE | null,
  BRAND_NAME?: string | null,
  BRAND_NAME_REFRESH?: string | null,
  BRAND_PILLARS?: string | null,
  BRAND_PILLARS_REFRESH?: string | null,
  BRAND_VALUES?: string | null,
  BRAND_MISSION_STATEMENT?: string | null,
  BRAND_TAGLINE_STATEMENT?: string | null,
  BRAND_TAGLINE_STATEMENT_REFRESH?: string | null,
  BRAND_MISSION_STATEMENT_REFRESH?: string | null,
  error?: boolean | null,
  message?: string | null,
};

export enum GPT_RESPONSE_TYPE {
  BRAND_NAME = "BRAND_NAME",
  BRAND_NAME_REFRESH = "BRAND_NAME_REFRESH",
  BRAND_PILLARS = "BRAND_PILLARS",
  BRAND_VALUES = "BRAND_VALUES",
  BRAND_MISSION_STATEMENT = "BRAND_MISSION_STATEMENT",
  BRAND_TAGLINE_STATEMENT = "BRAND_TAGLINE_STATEMENT",
  BRAND_TAGLINE_STATEMENT_REFRESH = "BRAND_TAGLINE_STATEMENT_REFRESH",
  BRAND_MISSION_STATEMENT_REFRESH = "BRAND_MISSION_STATEMENT_REFRESH",
  BRAND_PILLARS_REFRESH = "BRAND_PILLARS_REFRESH",
}


export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  userType?: ModelUSER_TYPESInput | null,
  tiktokHandler?: ModelStringInput | null,
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


export type ModelBestPracticesFilterInput = {
  headLine?: ModelStringInput | null,
  description?: ModelStringInput | null,
  urlPath?: ModelStringInput | null,
  active?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBestPracticesFilterInput | null > | null,
  or?: Array< ModelBestPracticesFilterInput | null > | null,
  not?: ModelBestPracticesFilterInput | null,
  userProfileBestPracticesId?: ModelIDInput | null,
};

export type ModelBrandProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  toneVoice?: ModelStringInput | null,
  pillars?: ModelStringInput | null,
  description?: ModelStringInput | null,
  internalMission?: ModelStringInput | null,
  strapLine?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  tiktokHandle?: ModelStringInput | null,
  vertical?: ModelStringInput | null,
  metaData?: ModelStringInput | null,
  and?: Array< ModelBrandProfileFilterInput | null > | null,
  or?: Array< ModelBrandProfileFilterInput | null > | null,
  not?: ModelBrandProfileFilterInput | null,
  userProfileBrandId?: ModelIDInput | null,
};

export type ModelBrandBriefFilterInput = {
  id?: ModelIDInput | null,
  BriefName?: ModelStringInput | null,
  vertical?: ModelStringInput | null,
  objective?: ModelStringInput | null,
  brandBriefDetails?: ModelStringInput | null,
  creativeInspirations?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  brandId?: ModelIDInput | null,
  and?: Array< ModelBrandBriefFilterInput | null > | null,
  or?: Array< ModelBrandBriefFilterInput | null > | null,
  not?: ModelBrandBriefFilterInput | null,
};

export type ModelCreativeRequestFilterInput = {
  brandBriefId?: ModelIDInput | null,
  creatorId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  tiktokCreativeUrl?: ModelStringInput | null,
  tiktokVideoCode?: ModelStringInput | null,
  creativeTiktokHandle?: ModelStringInput | null,
  creatorDescription?: ModelStringInput | null,
  and?: Array< ModelCreativeRequestFilterInput | null > | null,
  or?: Array< ModelCreativeRequestFilterInput | null > | null,
  not?: ModelCreativeRequestFilterInput | null,
};

export type EMAIL_INPUT = {
  message: string,
  name: string,
  from: string,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  userEmail?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  userType?: ModelSubscriptionStringInput | null,
  tiktokHandler?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionBestPracticesFilterInput = {
  headLine?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  urlPath?: ModelSubscriptionStringInput | null,
  active?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBestPracticesFilterInput | null > | null,
  or?: Array< ModelSubscriptionBestPracticesFilterInput | null > | null,
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
  tiktokHandle?: ModelSubscriptionStringInput | null,
  vertical?: ModelSubscriptionStringInput | null,
  metaData?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBrandProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionBrandProfileFilterInput | null > | null,
};

export type ModelSubscriptionBrandBriefFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  BriefName?: ModelSubscriptionStringInput | null,
  vertical?: ModelSubscriptionStringInput | null,
  objective?: ModelSubscriptionStringInput | null,
  brandBriefDetails?: ModelSubscriptionStringInput | null,
  creativeInspirations?: ModelSubscriptionStringInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  brandId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBrandBriefFilterInput | null > | null,
  or?: Array< ModelSubscriptionBrandBriefFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCreativeRequestFilterInput = {
  brandBriefId?: ModelSubscriptionIDInput | null,
  creatorId?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  tiktokCreativeUrl?: ModelSubscriptionStringInput | null,
  tiktokVideoCode?: ModelSubscriptionStringInput | null,
  creativeTiktokHandle?: ModelSubscriptionStringInput | null,
  creatorDescription?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCreativeRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionCreativeRequestFilterInput | null > | null,
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
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    userType: USER_TYPES,
    tiktokHandler?: string | null,
    bestPractices?:  {
      __typename: "ModelBestPracticesConnection",
      items:  Array< {
        __typename: "BestPractices",
        headLine: string,
        description: string,
        urlPath: string,
        active: string,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userProfileBestPracticesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBestPracticesMutationVariables = {
  input: DeleteBestPracticesInput,
  condition?: ModelBestPracticesConditionInput | null,
};

export type DeleteBestPracticesMutation = {
  deleteBestPractices?:  {
    __typename: "BestPractices",
    headLine: string,
    description: string,
    urlPath: string,
    active: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userProfileBestPracticesId?: string | null,
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
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    userType: USER_TYPES,
    tiktokHandler?: string | null,
    bestPractices?:  {
      __typename: "ModelBestPracticesConnection",
      items:  Array< {
        __typename: "BestPractices",
        headLine: string,
        description: string,
        urlPath: string,
        active: string,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userProfileBestPracticesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    userType: USER_TYPES,
    tiktokHandler?: string | null,
    bestPractices?:  {
      __typename: "ModelBestPracticesConnection",
      items:  Array< {
        __typename: "BestPractices",
        headLine: string,
        description: string,
        urlPath: string,
        active: string,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userProfileBestPracticesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBestPracticesMutationVariables = {
  input: CreateBestPracticesInput,
  condition?: ModelBestPracticesConditionInput | null,
};

export type CreateBestPracticesMutation = {
  createBestPractices?:  {
    __typename: "BestPractices",
    headLine: string,
    description: string,
    urlPath: string,
    active: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userProfileBestPracticesId?: string | null,
  } | null,
};

export type UpdateBestPracticesMutationVariables = {
  input: UpdateBestPracticesInput,
  condition?: ModelBestPracticesConditionInput | null,
};

export type UpdateBestPracticesMutation = {
  updateBestPractices?:  {
    __typename: "BestPractices",
    headLine: string,
    description: string,
    urlPath: string,
    active: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userProfileBestPracticesId?: string | null,
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
    tiktokHandle?: string | null,
    vertical?: string | null,
    metaData?: string | null,
    briefs?:  {
      __typename: "ModelBrandBriefConnection",
      items:  Array< {
        __typename: "BrandBrief",
        id: string,
        BriefName?: string | null,
        vertical: string,
        objective?: string | null,
        brandBriefDetails?: string | null,
        creativeInspirations?: Array< string | null > | null,
        active?: boolean | null,
        creativeRequests?:  {
          __typename: "ModelCreativeRequestConnection",
          nextToken?: string | null,
        } | null,
        brandId: string,
        brandProfile?:  {
          __typename: "BrandProfile",
          id: string,
          name?: string | null,
          toneVoice?: Array< string | null > | null,
          pillars?: Array< string | null > | null,
          description?: string | null,
          internalMission?: string | null,
          strapLine?: string | null,
          userEmail?: string | null,
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
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
    tiktokHandle?: string | null,
    vertical?: string | null,
    metaData?: string | null,
    briefs?:  {
      __typename: "ModelBrandBriefConnection",
      items:  Array< {
        __typename: "BrandBrief",
        id: string,
        BriefName?: string | null,
        vertical: string,
        objective?: string | null,
        brandBriefDetails?: string | null,
        creativeInspirations?: Array< string | null > | null,
        active?: boolean | null,
        creativeRequests?:  {
          __typename: "ModelCreativeRequestConnection",
          nextToken?: string | null,
        } | null,
        brandId: string,
        brandProfile?:  {
          __typename: "BrandProfile",
          id: string,
          name?: string | null,
          toneVoice?: Array< string | null > | null,
          pillars?: Array< string | null > | null,
          description?: string | null,
          internalMission?: string | null,
          strapLine?: string | null,
          userEmail?: string | null,
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
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
    tiktokHandle?: string | null,
    vertical?: string | null,
    metaData?: string | null,
    briefs?:  {
      __typename: "ModelBrandBriefConnection",
      items:  Array< {
        __typename: "BrandBrief",
        id: string,
        BriefName?: string | null,
        vertical: string,
        objective?: string | null,
        brandBriefDetails?: string | null,
        creativeInspirations?: Array< string | null > | null,
        active?: boolean | null,
        creativeRequests?:  {
          __typename: "ModelCreativeRequestConnection",
          nextToken?: string | null,
        } | null,
        brandId: string,
        brandProfile?:  {
          __typename: "BrandProfile",
          id: string,
          name?: string | null,
          toneVoice?: Array< string | null > | null,
          pillars?: Array< string | null > | null,
          description?: string | null,
          internalMission?: string | null,
          strapLine?: string | null,
          userEmail?: string | null,
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
  } | null,
};

export type CreateBrandBriefMutationVariables = {
  input: CreateBrandBriefInput,
  condition?: ModelBrandBriefConditionInput | null,
};

export type CreateBrandBriefMutation = {
  createBrandBrief?:  {
    __typename: "BrandBrief",
    id: string,
    BriefName?: string | null,
    vertical: string,
    objective?: string | null,
    brandBriefDetails?: string | null,
    creativeInspirations?: Array< string | null > | null,
    active?: boolean | null,
    creativeRequests?:  {
      __typename: "ModelCreativeRequestConnection",
      items:  Array< {
        __typename: "CreativeRequest",
        brandBriefId: string,
        creatorId: string,
        status: string,
        tiktokCreativeUrl: string,
        tiktokVideoCode: string,
        creativeTiktokHandle?: string | null,
        creatorDescription?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    brandId: string,
    brandProfile?:  {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBrandBriefMutationVariables = {
  input: UpdateBrandBriefInput,
  condition?: ModelBrandBriefConditionInput | null,
};

export type UpdateBrandBriefMutation = {
  updateBrandBrief?:  {
    __typename: "BrandBrief",
    id: string,
    BriefName?: string | null,
    vertical: string,
    objective?: string | null,
    brandBriefDetails?: string | null,
    creativeInspirations?: Array< string | null > | null,
    active?: boolean | null,
    creativeRequests?:  {
      __typename: "ModelCreativeRequestConnection",
      items:  Array< {
        __typename: "CreativeRequest",
        brandBriefId: string,
        creatorId: string,
        status: string,
        tiktokCreativeUrl: string,
        tiktokVideoCode: string,
        creativeTiktokHandle?: string | null,
        creatorDescription?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    brandId: string,
    brandProfile?:  {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBrandBriefMutationVariables = {
  input: DeleteBrandBriefInput,
  condition?: ModelBrandBriefConditionInput | null,
};

export type DeleteBrandBriefMutation = {
  deleteBrandBrief?:  {
    __typename: "BrandBrief",
    id: string,
    BriefName?: string | null,
    vertical: string,
    objective?: string | null,
    brandBriefDetails?: string | null,
    creativeInspirations?: Array< string | null > | null,
    active?: boolean | null,
    creativeRequests?:  {
      __typename: "ModelCreativeRequestConnection",
      items:  Array< {
        __typename: "CreativeRequest",
        brandBriefId: string,
        creatorId: string,
        status: string,
        tiktokCreativeUrl: string,
        tiktokVideoCode: string,
        creativeTiktokHandle?: string | null,
        creatorDescription?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    brandId: string,
    brandProfile?:  {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCreativeRequestMutationVariables = {
  input: CreateCreativeRequestInput,
  condition?: ModelCreativeRequestConditionInput | null,
};

export type CreateCreativeRequestMutation = {
  createCreativeRequest?:  {
    __typename: "CreativeRequest",
    brandBriefId: string,
    creatorId: string,
    status: string,
    tiktokCreativeUrl: string,
    tiktokVideoCode: string,
    creativeTiktokHandle?: string | null,
    creatorDescription?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCreativeRequestMutationVariables = {
  input: UpdateCreativeRequestInput,
  condition?: ModelCreativeRequestConditionInput | null,
};

export type UpdateCreativeRequestMutation = {
  updateCreativeRequest?:  {
    __typename: "CreativeRequest",
    brandBriefId: string,
    creatorId: string,
    status: string,
    tiktokCreativeUrl: string,
    tiktokVideoCode: string,
    creativeTiktokHandle?: string | null,
    creatorDescription?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCreativeRequestMutationVariables = {
  input: DeleteCreativeRequestInput,
  condition?: ModelCreativeRequestConditionInput | null,
};

export type DeleteCreativeRequestMutation = {
  deleteCreativeRequest?:  {
    __typename: "CreativeRequest",
    brandBriefId: string,
    creatorId: string,
    status: string,
    tiktokCreativeUrl: string,
    tiktokVideoCode: string,
    creativeTiktokHandle?: string | null,
    creatorDescription?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    BRAND_PILLARS_REFRESH?: string | null,
    BRAND_VALUES?: string | null,
    BRAND_MISSION_STATEMENT?: string | null,
    BRAND_TAGLINE_STATEMENT?: string | null,
    BRAND_TAGLINE_STATEMENT_REFRESH?: string | null,
    BRAND_MISSION_STATEMENT_REFRESH?: string | null,
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
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    userType: USER_TYPES,
    tiktokHandler?: string | null,
    bestPractices?:  {
      __typename: "ModelBestPracticesConnection",
      items:  Array< {
        __typename: "BestPractices",
        headLine: string,
        description: string,
        urlPath: string,
        active: string,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userProfileBestPracticesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      brand?:  {
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
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      userType: USER_TYPES,
      tiktokHandler?: string | null,
      bestPractices?:  {
        __typename: "ModelBestPracticesConnection",
        items:  Array< {
          __typename: "BestPractices",
          headLine: string,
          description: string,
          urlPath: string,
          active: string,
          owner?: string | null,
          id: string,
          createdAt: string,
          updatedAt: string,
          userProfileBestPracticesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
      brand?:  {
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
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      userType: USER_TYPES,
      tiktokHandler?: string | null,
      bestPractices?:  {
        __typename: "ModelBestPracticesConnection",
        items:  Array< {
          __typename: "BestPractices",
          headLine: string,
          description: string,
          urlPath: string,
          active: string,
          owner?: string | null,
          id: string,
          createdAt: string,
          updatedAt: string,
          userProfileBestPracticesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBestPracticesQueryVariables = {
  id: string,
};

export type GetBestPracticesQuery = {
  getBestPractices?:  {
    __typename: "BestPractices",
    headLine: string,
    description: string,
    urlPath: string,
    active: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userProfileBestPracticesId?: string | null,
  } | null,
};

export type ListBestPracticesQueryVariables = {
  filter?: ModelBestPracticesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBestPracticesQuery = {
  listBestPractices?:  {
    __typename: "ModelBestPracticesConnection",
    items:  Array< {
      __typename: "BestPractices",
      headLine: string,
      description: string,
      urlPath: string,
      active: string,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userProfileBestPracticesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BestPracticesByActiveQueryVariables = {
  active: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBestPracticesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BestPracticesByActiveQuery = {
  bestPracticesByActive?:  {
    __typename: "ModelBestPracticesConnection",
    items:  Array< {
      __typename: "BestPractices",
      headLine: string,
      description: string,
      urlPath: string,
      active: string,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userProfileBestPracticesId?: string | null,
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
    tiktokHandle?: string | null,
    vertical?: string | null,
    metaData?: string | null,
    briefs?:  {
      __typename: "ModelBrandBriefConnection",
      items:  Array< {
        __typename: "BrandBrief",
        id: string,
        BriefName?: string | null,
        vertical: string,
        objective?: string | null,
        brandBriefDetails?: string | null,
        creativeInspirations?: Array< string | null > | null,
        active?: boolean | null,
        creativeRequests?:  {
          __typename: "ModelCreativeRequestConnection",
          nextToken?: string | null,
        } | null,
        brandId: string,
        brandProfile?:  {
          __typename: "BrandProfile",
          id: string,
          name?: string | null,
          toneVoice?: Array< string | null > | null,
          pillars?: Array< string | null > | null,
          description?: string | null,
          internalMission?: string | null,
          strapLine?: string | null,
          userEmail?: string | null,
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
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
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
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
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBrandBriefQueryVariables = {
  id: string,
};

export type GetBrandBriefQuery = {
  getBrandBrief?:  {
    __typename: "BrandBrief",
    id: string,
    BriefName?: string | null,
    vertical: string,
    objective?: string | null,
    brandBriefDetails?: string | null,
    creativeInspirations?: Array< string | null > | null,
    active?: boolean | null,
    creativeRequests?:  {
      __typename: "ModelCreativeRequestConnection",
      items:  Array< {
        __typename: "CreativeRequest",
        brandBriefId: string,
        creatorId: string,
        status: string,
        tiktokCreativeUrl: string,
        tiktokVideoCode: string,
        creativeTiktokHandle?: string | null,
        creatorDescription?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    brandId: string,
    brandProfile?:  {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBrandBriefsQueryVariables = {
  filter?: ModelBrandBriefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBrandBriefsQuery = {
  listBrandBriefs?:  {
    __typename: "ModelBrandBriefConnection",
    items:  Array< {
      __typename: "BrandBrief",
      id: string,
      BriefName?: string | null,
      vertical: string,
      objective?: string | null,
      brandBriefDetails?: string | null,
      creativeInspirations?: Array< string | null > | null,
      active?: boolean | null,
      creativeRequests?:  {
        __typename: "ModelCreativeRequestConnection",
        items:  Array< {
          __typename: "CreativeRequest",
          brandBriefId: string,
          creatorId: string,
          status: string,
          tiktokCreativeUrl: string,
          tiktokVideoCode: string,
          creativeTiktokHandle?: string | null,
          creatorDescription?: string | null,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      brandId: string,
      brandProfile?:  {
        __typename: "BrandProfile",
        id: string,
        name?: string | null,
        toneVoice?: Array< string | null > | null,
        pillars?: Array< string | null > | null,
        description?: string | null,
        internalMission?: string | null,
        strapLine?: string | null,
        userEmail?: string | null,
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BrandBriefsByVerticalQueryVariables = {
  vertical: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBrandBriefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BrandBriefsByVerticalQuery = {
  brandBriefsByVertical?:  {
    __typename: "ModelBrandBriefConnection",
    items:  Array< {
      __typename: "BrandBrief",
      id: string,
      BriefName?: string | null,
      vertical: string,
      objective?: string | null,
      brandBriefDetails?: string | null,
      creativeInspirations?: Array< string | null > | null,
      active?: boolean | null,
      creativeRequests?:  {
        __typename: "ModelCreativeRequestConnection",
        items:  Array< {
          __typename: "CreativeRequest",
          brandBriefId: string,
          creatorId: string,
          status: string,
          tiktokCreativeUrl: string,
          tiktokVideoCode: string,
          creativeTiktokHandle?: string | null,
          creatorDescription?: string | null,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      brandId: string,
      brandProfile?:  {
        __typename: "BrandProfile",
        id: string,
        name?: string | null,
        toneVoice?: Array< string | null > | null,
        pillars?: Array< string | null > | null,
        description?: string | null,
        internalMission?: string | null,
        strapLine?: string | null,
        userEmail?: string | null,
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BrandBriefsByBrandIdQueryVariables = {
  brandId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBrandBriefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BrandBriefsByBrandIdQuery = {
  brandBriefsByBrandId?:  {
    __typename: "ModelBrandBriefConnection",
    items:  Array< {
      __typename: "BrandBrief",
      id: string,
      BriefName?: string | null,
      vertical: string,
      objective?: string | null,
      brandBriefDetails?: string | null,
      creativeInspirations?: Array< string | null > | null,
      active?: boolean | null,
      creativeRequests?:  {
        __typename: "ModelCreativeRequestConnection",
        items:  Array< {
          __typename: "CreativeRequest",
          brandBriefId: string,
          creatorId: string,
          status: string,
          tiktokCreativeUrl: string,
          tiktokVideoCode: string,
          creativeTiktokHandle?: string | null,
          creatorDescription?: string | null,
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      brandId: string,
      brandProfile?:  {
        __typename: "BrandProfile",
        id: string,
        name?: string | null,
        toneVoice?: Array< string | null > | null,
        pillars?: Array< string | null > | null,
        description?: string | null,
        internalMission?: string | null,
        strapLine?: string | null,
        userEmail?: string | null,
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCreativeRequestQueryVariables = {
  id: string,
};

export type GetCreativeRequestQuery = {
  getCreativeRequest?:  {
    __typename: "CreativeRequest",
    brandBriefId: string,
    creatorId: string,
    status: string,
    tiktokCreativeUrl: string,
    tiktokVideoCode: string,
    creativeTiktokHandle?: string | null,
    creatorDescription?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCreativeRequestsQueryVariables = {
  filter?: ModelCreativeRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCreativeRequestsQuery = {
  listCreativeRequests?:  {
    __typename: "ModelCreativeRequestConnection",
    items:  Array< {
      __typename: "CreativeRequest",
      brandBriefId: string,
      creatorId: string,
      status: string,
      tiktokCreativeUrl: string,
      tiktokVideoCode: string,
      creativeTiktokHandle?: string | null,
      creatorDescription?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreativeRequestsByBrandBriefIdQueryVariables = {
  brandBriefId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCreativeRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreativeRequestsByBrandBriefIdQuery = {
  creativeRequestsByBrandBriefId?:  {
    __typename: "ModelCreativeRequestConnection",
    items:  Array< {
      __typename: "CreativeRequest",
      brandBriefId: string,
      creatorId: string,
      status: string,
      tiktokCreativeUrl: string,
      tiktokVideoCode: string,
      creativeTiktokHandle?: string | null,
      creatorDescription?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreativeRequestsByCreatorIdQueryVariables = {
  creatorId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCreativeRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreativeRequestsByCreatorIdQuery = {
  creativeRequestsByCreatorId?:  {
    __typename: "ModelCreativeRequestConnection",
    items:  Array< {
      __typename: "CreativeRequest",
      brandBriefId: string,
      creatorId: string,
      status: string,
      tiktokCreativeUrl: string,
      tiktokVideoCode: string,
      creativeTiktokHandle?: string | null,
      creatorDescription?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreativeRequestsByStatusQueryVariables = {
  status: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCreativeRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreativeRequestsByStatusQuery = {
  creativeRequestsByStatus?:  {
    __typename: "ModelCreativeRequestConnection",
    items:  Array< {
      __typename: "CreativeRequest",
      brandBriefId: string,
      creatorId: string,
      status: string,
      tiktokCreativeUrl: string,
      tiktokVideoCode: string,
      creativeTiktokHandle?: string | null,
      creatorDescription?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SendEmailQueryVariables = {
  data?: EMAIL_INPUT | null,
};

export type SendEmailQuery = {
  sendEmail?: boolean | null,
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
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    userType: USER_TYPES,
    tiktokHandler?: string | null,
    bestPractices?:  {
      __typename: "ModelBestPracticesConnection",
      items:  Array< {
        __typename: "BestPractices",
        headLine: string,
        description: string,
        urlPath: string,
        active: string,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userProfileBestPracticesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    userType: USER_TYPES,
    tiktokHandler?: string | null,
    bestPractices?:  {
      __typename: "ModelBestPracticesConnection",
      items:  Array< {
        __typename: "BestPractices",
        headLine: string,
        description: string,
        urlPath: string,
        active: string,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userProfileBestPracticesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        tiktokHandle?: string | null,
        vertical?: string | null,
        metaData?: string | null,
        briefs?:  {
          __typename: "ModelBrandBriefConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userProfileBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    userType: USER_TYPES,
    tiktokHandler?: string | null,
    bestPractices?:  {
      __typename: "ModelBestPracticesConnection",
      items:  Array< {
        __typename: "BestPractices",
        headLine: string,
        description: string,
        urlPath: string,
        active: string,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userProfileBestPracticesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBestPracticesSubscriptionVariables = {
  filter?: ModelSubscriptionBestPracticesFilterInput | null,
  owner?: string | null,
};

export type OnCreateBestPracticesSubscription = {
  onCreateBestPractices?:  {
    __typename: "BestPractices",
    headLine: string,
    description: string,
    urlPath: string,
    active: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userProfileBestPracticesId?: string | null,
  } | null,
};

export type OnUpdateBestPracticesSubscriptionVariables = {
  filter?: ModelSubscriptionBestPracticesFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBestPracticesSubscription = {
  onUpdateBestPractices?:  {
    __typename: "BestPractices",
    headLine: string,
    description: string,
    urlPath: string,
    active: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userProfileBestPracticesId?: string | null,
  } | null,
};

export type OnDeleteBestPracticesSubscriptionVariables = {
  filter?: ModelSubscriptionBestPracticesFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBestPracticesSubscription = {
  onDeleteBestPractices?:  {
    __typename: "BestPractices",
    headLine: string,
    description: string,
    urlPath: string,
    active: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userProfileBestPracticesId?: string | null,
  } | null,
};

export type OnCreateBrandProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBrandProfileFilterInput | null,
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
    tiktokHandle?: string | null,
    vertical?: string | null,
    metaData?: string | null,
    briefs?:  {
      __typename: "ModelBrandBriefConnection",
      items:  Array< {
        __typename: "BrandBrief",
        id: string,
        BriefName?: string | null,
        vertical: string,
        objective?: string | null,
        brandBriefDetails?: string | null,
        creativeInspirations?: Array< string | null > | null,
        active?: boolean | null,
        creativeRequests?:  {
          __typename: "ModelCreativeRequestConnection",
          nextToken?: string | null,
        } | null,
        brandId: string,
        brandProfile?:  {
          __typename: "BrandProfile",
          id: string,
          name?: string | null,
          toneVoice?: Array< string | null > | null,
          pillars?: Array< string | null > | null,
          description?: string | null,
          internalMission?: string | null,
          strapLine?: string | null,
          userEmail?: string | null,
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
  } | null,
};

export type OnUpdateBrandProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBrandProfileFilterInput | null,
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
    tiktokHandle?: string | null,
    vertical?: string | null,
    metaData?: string | null,
    briefs?:  {
      __typename: "ModelBrandBriefConnection",
      items:  Array< {
        __typename: "BrandBrief",
        id: string,
        BriefName?: string | null,
        vertical: string,
        objective?: string | null,
        brandBriefDetails?: string | null,
        creativeInspirations?: Array< string | null > | null,
        active?: boolean | null,
        creativeRequests?:  {
          __typename: "ModelCreativeRequestConnection",
          nextToken?: string | null,
        } | null,
        brandId: string,
        brandProfile?:  {
          __typename: "BrandProfile",
          id: string,
          name?: string | null,
          toneVoice?: Array< string | null > | null,
          pillars?: Array< string | null > | null,
          description?: string | null,
          internalMission?: string | null,
          strapLine?: string | null,
          userEmail?: string | null,
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
  } | null,
};

export type OnDeleteBrandProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBrandProfileFilterInput | null,
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
    tiktokHandle?: string | null,
    vertical?: string | null,
    metaData?: string | null,
    briefs?:  {
      __typename: "ModelBrandBriefConnection",
      items:  Array< {
        __typename: "BrandBrief",
        id: string,
        BriefName?: string | null,
        vertical: string,
        objective?: string | null,
        brandBriefDetails?: string | null,
        creativeInspirations?: Array< string | null > | null,
        active?: boolean | null,
        creativeRequests?:  {
          __typename: "ModelCreativeRequestConnection",
          nextToken?: string | null,
        } | null,
        brandId: string,
        brandProfile?:  {
          __typename: "BrandProfile",
          id: string,
          name?: string | null,
          toneVoice?: Array< string | null > | null,
          pillars?: Array< string | null > | null,
          description?: string | null,
          internalMission?: string | null,
          strapLine?: string | null,
          userEmail?: string | null,
          tiktokHandle?: string | null,
          vertical?: string | null,
          metaData?: string | null,
          createdAt: string,
          updatedAt: string,
          userProfileBrandId?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileBrandId?: string | null,
  } | null,
};

export type OnCreateBrandBriefSubscriptionVariables = {
  filter?: ModelSubscriptionBrandBriefFilterInput | null,
};

export type OnCreateBrandBriefSubscription = {
  onCreateBrandBrief?:  {
    __typename: "BrandBrief",
    id: string,
    BriefName?: string | null,
    vertical: string,
    objective?: string | null,
    brandBriefDetails?: string | null,
    creativeInspirations?: Array< string | null > | null,
    active?: boolean | null,
    creativeRequests?:  {
      __typename: "ModelCreativeRequestConnection",
      items:  Array< {
        __typename: "CreativeRequest",
        brandBriefId: string,
        creatorId: string,
        status: string,
        tiktokCreativeUrl: string,
        tiktokVideoCode: string,
        creativeTiktokHandle?: string | null,
        creatorDescription?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    brandId: string,
    brandProfile?:  {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBrandBriefSubscriptionVariables = {
  filter?: ModelSubscriptionBrandBriefFilterInput | null,
};

export type OnUpdateBrandBriefSubscription = {
  onUpdateBrandBrief?:  {
    __typename: "BrandBrief",
    id: string,
    BriefName?: string | null,
    vertical: string,
    objective?: string | null,
    brandBriefDetails?: string | null,
    creativeInspirations?: Array< string | null > | null,
    active?: boolean | null,
    creativeRequests?:  {
      __typename: "ModelCreativeRequestConnection",
      items:  Array< {
        __typename: "CreativeRequest",
        brandBriefId: string,
        creatorId: string,
        status: string,
        tiktokCreativeUrl: string,
        tiktokVideoCode: string,
        creativeTiktokHandle?: string | null,
        creatorDescription?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    brandId: string,
    brandProfile?:  {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBrandBriefSubscriptionVariables = {
  filter?: ModelSubscriptionBrandBriefFilterInput | null,
};

export type OnDeleteBrandBriefSubscription = {
  onDeleteBrandBrief?:  {
    __typename: "BrandBrief",
    id: string,
    BriefName?: string | null,
    vertical: string,
    objective?: string | null,
    brandBriefDetails?: string | null,
    creativeInspirations?: Array< string | null > | null,
    active?: boolean | null,
    creativeRequests?:  {
      __typename: "ModelCreativeRequestConnection",
      items:  Array< {
        __typename: "CreativeRequest",
        brandBriefId: string,
        creatorId: string,
        status: string,
        tiktokCreativeUrl: string,
        tiktokVideoCode: string,
        creativeTiktokHandle?: string | null,
        creatorDescription?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    brandId: string,
    brandProfile?:  {
      __typename: "BrandProfile",
      id: string,
      name?: string | null,
      toneVoice?: Array< string | null > | null,
      pillars?: Array< string | null > | null,
      description?: string | null,
      internalMission?: string | null,
      strapLine?: string | null,
      userEmail?: string | null,
      tiktokHandle?: string | null,
      vertical?: string | null,
      metaData?: string | null,
      briefs?:  {
        __typename: "ModelBrandBriefConnection",
        items:  Array< {
          __typename: "BrandBrief",
          id: string,
          BriefName?: string | null,
          vertical: string,
          objective?: string | null,
          brandBriefDetails?: string | null,
          creativeInspirations?: Array< string | null > | null,
          active?: boolean | null,
          brandId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userProfileBrandId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCreativeRequestSubscriptionVariables = {
  filter?: ModelSubscriptionCreativeRequestFilterInput | null,
};

export type OnCreateCreativeRequestSubscription = {
  onCreateCreativeRequest?:  {
    __typename: "CreativeRequest",
    brandBriefId: string,
    creatorId: string,
    status: string,
    tiktokCreativeUrl: string,
    tiktokVideoCode: string,
    creativeTiktokHandle?: string | null,
    creatorDescription?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCreativeRequestSubscriptionVariables = {
  filter?: ModelSubscriptionCreativeRequestFilterInput | null,
};

export type OnUpdateCreativeRequestSubscription = {
  onUpdateCreativeRequest?:  {
    __typename: "CreativeRequest",
    brandBriefId: string,
    creatorId: string,
    status: string,
    tiktokCreativeUrl: string,
    tiktokVideoCode: string,
    creativeTiktokHandle?: string | null,
    creatorDescription?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCreativeRequestSubscriptionVariables = {
  filter?: ModelSubscriptionCreativeRequestFilterInput | null,
};

export type OnDeleteCreativeRequestSubscription = {
  onDeleteCreativeRequest?:  {
    __typename: "CreativeRequest",
    brandBriefId: string,
    creatorId: string,
    status: string,
    tiktokCreativeUrl: string,
    tiktokVideoCode: string,
    creativeTiktokHandle?: string | null,
    creatorDescription?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
