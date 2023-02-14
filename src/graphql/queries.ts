/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGPTresponse = /* GraphQL */ `
  query GetGPTresponse($data: GPT_INPUT) {
    getGPTresponse(data: $data) {
      responseType
      BRAND_NAME
      BRAND_NAME_REFRESH
      BRAND_PILLARS
      BRAND_VALUES
      BRAND_MISSION_STATEMENT
      error
      message
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      name
      userEmail
      description
      brand {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userEmail
        description
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userProfilesByUserEmail = /* GraphQL */ `
  query UserProfilesByUserEmail(
    $userEmail: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfilesByUserEmail(
      userEmail: $userEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        userEmail
        description
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBrandProfile = /* GraphQL */ `
  query GetBrandProfile($id: ID!) {
    getBrandProfile(id: $id) {
      id
      name
      toneVoice
      pillars
      description
      internalMission
      strapLine
      userEmail
      createdAt
      updatedAt
      userProfileBrandId
      owner
    }
  }
`;
export const listBrandProfiles = /* GraphQL */ `
  query ListBrandProfiles(
    $filter: ModelBrandProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrandProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        toneVoice
        pillars
        description
        internalMission
        strapLine
        userEmail
        createdAt
        updatedAt
        userProfileBrandId
        owner
      }
      nextToken
    }
  }
`;
export const brandProfilesByUserEmail = /* GraphQL */ `
  query BrandProfilesByUserEmail(
    $userEmail: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBrandProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    brandProfilesByUserEmail(
      userEmail: $userEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        toneVoice
        pillars
        description
        internalMission
        strapLine
        userEmail
        createdAt
        updatedAt
        userProfileBrandId
        owner
      }
      nextToken
    }
  }
`;
