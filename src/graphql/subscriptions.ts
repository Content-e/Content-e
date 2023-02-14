/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
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
export const onCreateBrandProfile = /* GraphQL */ `
  subscription OnCreateBrandProfile(
    $filter: ModelSubscriptionBrandProfileFilterInput
    $owner: String
  ) {
    onCreateBrandProfile(filter: $filter, owner: $owner) {
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
export const onUpdateBrandProfile = /* GraphQL */ `
  subscription OnUpdateBrandProfile(
    $filter: ModelSubscriptionBrandProfileFilterInput
    $owner: String
  ) {
    onUpdateBrandProfile(filter: $filter, owner: $owner) {
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
export const onDeleteBrandProfile = /* GraphQL */ `
  subscription OnDeleteBrandProfile(
    $filter: ModelSubscriptionBrandProfileFilterInput
    $owner: String
  ) {
    onDeleteBrandProfile(filter: $filter, owner: $owner) {
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
