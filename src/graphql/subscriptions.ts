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
  ) {
    onCreateBrandProfile(filter: $filter) {
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
          brandProfile {
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
            createdAt
            updatedAt
            userProfileBrandId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userProfileBrandId
    }
  }
`;
export const onUpdateBrandProfile = /* GraphQL */ `
  subscription OnUpdateBrandProfile(
    $filter: ModelSubscriptionBrandProfileFilterInput
  ) {
    onUpdateBrandProfile(filter: $filter) {
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
          brandProfile {
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
            createdAt
            updatedAt
            userProfileBrandId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userProfileBrandId
    }
  }
`;
export const onDeleteBrandProfile = /* GraphQL */ `
  subscription OnDeleteBrandProfile(
    $filter: ModelSubscriptionBrandProfileFilterInput
  ) {
    onDeleteBrandProfile(filter: $filter) {
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
          brandProfile {
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
            createdAt
            updatedAt
            userProfileBrandId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userProfileBrandId
    }
  }
`;
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
      brandProfile {
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
            brandId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        userProfileBrandId
      }
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
      brandProfile {
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
            brandId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        userProfileBrandId
      }
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
      brandProfile {
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
            brandId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        userProfileBrandId
      }
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
