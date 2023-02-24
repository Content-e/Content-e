/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBrandBrief = /* GraphQL */ `
  subscription OnCreateBrandBrief(
    $filter: ModelSubscriptionBrandBriefFilterInput
  ) {
    onCreateBrandBrief(filter: $filter) {
      id
      BriefName
      vertical
      objective
      brandBriefDetails
      creativeInspirations
      active
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      brandId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBrandBrief = /* GraphQL */ `
  subscription OnUpdateBrandBrief(
    $filter: ModelSubscriptionBrandBriefFilterInput
  ) {
    onUpdateBrandBrief(filter: $filter) {
      id
      BriefName
      vertical
      objective
      brandBriefDetails
      creativeInspirations
      active
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      brandId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBrandBrief = /* GraphQL */ `
  subscription OnDeleteBrandBrief(
    $filter: ModelSubscriptionBrandBriefFilterInput
  ) {
    onDeleteBrandBrief(filter: $filter) {
      id
      BriefName
      vertical
      objective
      brandBriefDetails
      creativeInspirations
      active
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      brandId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCreativeRequest = /* GraphQL */ `
  subscription OnCreateCreativeRequest(
    $filter: ModelSubscriptionCreativeRequestFilterInput
  ) {
    onCreateCreativeRequest(filter: $filter) {
      brandBriefId
      creatorId
      status
      tiktokCreativeUrl
      tiktokVideoCode
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCreativeRequest = /* GraphQL */ `
  subscription OnUpdateCreativeRequest(
    $filter: ModelSubscriptionCreativeRequestFilterInput
  ) {
    onUpdateCreativeRequest(filter: $filter) {
      brandBriefId
      creatorId
      status
      tiktokCreativeUrl
      tiktokVideoCode
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCreativeRequest = /* GraphQL */ `
  subscription OnDeleteCreativeRequest(
    $filter: ModelSubscriptionCreativeRequestFilterInput
  ) {
    onDeleteCreativeRequest(filter: $filter) {
      brandBriefId
      creatorId
      status
      tiktokCreativeUrl
      tiktokVideoCode
      id
      createdAt
      updatedAt
    }
  }
`;
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
        items {
          id
          name
          toneVoice
          pillars
          description
          internalMission
          strapLine
          userEmail
          tiktokHandle
          vertical
          briefs {
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
          owner
        }
        nextToken
      }
      owner
      userType
      tiktokHandler
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
        items {
          id
          name
          toneVoice
          pillars
          description
          internalMission
          strapLine
          userEmail
          tiktokHandle
          vertical
          briefs {
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
          owner
        }
        nextToken
      }
      owner
      userType
      tiktokHandler
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
        items {
          id
          name
          toneVoice
          pillars
          description
          internalMission
          strapLine
          userEmail
          tiktokHandle
          vertical
          briefs {
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
          owner
        }
        nextToken
      }
      owner
      userType
      tiktokHandler
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
      tiktokHandle
      vertical
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          creativeRequests {
            nextToken
          }
          brandId
          createdAt
          updatedAt
        }
        nextToken
      }
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
      tiktokHandle
      vertical
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          creativeRequests {
            nextToken
          }
          brandId
          createdAt
          updatedAt
        }
        nextToken
      }
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
      tiktokHandle
      vertical
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          creativeRequests {
            nextToken
          }
          brandId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userProfileBrandId
      owner
    }
  }
`;
