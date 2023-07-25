/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApprovedAds = /* GraphQL */ `
  subscription OnCreateApprovedAds(
    $filter: ModelSubscriptionApprovedAdsFilterInput
  ) {
    onCreateApprovedAds(filter: $filter) {
      id
      creativeRequestId
      identity_id
      item_id
      ad_id
      ad_group_id
      campaing_id
      advertiser_id
      user_profile_id
      accessToken
      ad_report
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateApprovedAds = /* GraphQL */ `
  subscription OnUpdateApprovedAds(
    $filter: ModelSubscriptionApprovedAdsFilterInput
  ) {
    onUpdateApprovedAds(filter: $filter) {
      id
      creativeRequestId
      identity_id
      item_id
      ad_id
      ad_group_id
      campaing_id
      advertiser_id
      user_profile_id
      accessToken
      ad_report
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteApprovedAds = /* GraphQL */ `
  subscription OnDeleteApprovedAds(
    $filter: ModelSubscriptionApprovedAdsFilterInput
  ) {
    onDeleteApprovedAds(filter: $filter) {
      id
      creativeRequestId
      identity_id
      item_id
      ad_id
      ad_group_id
      campaing_id
      advertiser_id
      user_profile_id
      accessToken
      ad_report
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
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
          metaData
          briefs {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userProfileBrandId
          __typename
        }
        nextToken
        __typename
      }
      owner
      userType
      tiktokHandler
      bestPractices {
        items {
          id
          headLine
          description
          urlPath
          active
          owner
          createdAt
          updatedAt
          userProfileBestPracticesId
          __typename
        }
        nextToken
        __typename
      }
      tiktokAccountAccess
      userWallet {
        id
        currentBalance
        totalEarned
        userProfileId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userProfileUserWalletId
      __typename
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
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
          metaData
          briefs {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userProfileBrandId
          __typename
        }
        nextToken
        __typename
      }
      owner
      userType
      tiktokHandler
      bestPractices {
        items {
          id
          headLine
          description
          urlPath
          active
          owner
          createdAt
          updatedAt
          userProfileBestPracticesId
          __typename
        }
        nextToken
        __typename
      }
      tiktokAccountAccess
      userWallet {
        id
        currentBalance
        totalEarned
        userProfileId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userProfileUserWalletId
      __typename
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
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
          metaData
          briefs {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userProfileBrandId
          __typename
        }
        nextToken
        __typename
      }
      owner
      userType
      tiktokHandler
      bestPractices {
        items {
          id
          headLine
          description
          urlPath
          active
          owner
          createdAt
          updatedAt
          userProfileBestPracticesId
          __typename
        }
        nextToken
        __typename
      }
      tiktokAccountAccess
      userWallet {
        id
        currentBalance
        totalEarned
        userProfileId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userProfileUserWalletId
      __typename
    }
  }
`;
export const onCreateUserWallet = /* GraphQL */ `
  subscription OnCreateUserWallet(
    $filter: ModelSubscriptionUserWalletFilterInput
  ) {
    onCreateUserWallet(filter: $filter) {
      id
      currentBalance
      totalEarned
      userProfileId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserWallet = /* GraphQL */ `
  subscription OnUpdateUserWallet(
    $filter: ModelSubscriptionUserWalletFilterInput
  ) {
    onUpdateUserWallet(filter: $filter) {
      id
      currentBalance
      totalEarned
      userProfileId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserWallet = /* GraphQL */ `
  subscription OnDeleteUserWallet(
    $filter: ModelSubscriptionUserWalletFilterInput
  ) {
    onDeleteUserWallet(filter: $filter) {
      id
      currentBalance
      totalEarned
      userProfileId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBestPractices = /* GraphQL */ `
  subscription OnCreateBestPractices(
    $filter: ModelSubscriptionBestPracticesFilterInput
    $owner: String
  ) {
    onCreateBestPractices(filter: $filter, owner: $owner) {
      id
      headLine
      description
      urlPath
      active
      owner
      createdAt
      updatedAt
      userProfileBestPracticesId
      __typename
    }
  }
`;
export const onUpdateBestPractices = /* GraphQL */ `
  subscription OnUpdateBestPractices(
    $filter: ModelSubscriptionBestPracticesFilterInput
    $owner: String
  ) {
    onUpdateBestPractices(filter: $filter, owner: $owner) {
      id
      headLine
      description
      urlPath
      active
      owner
      createdAt
      updatedAt
      userProfileBestPracticesId
      __typename
    }
  }
`;
export const onDeleteBestPractices = /* GraphQL */ `
  subscription OnDeleteBestPractices(
    $filter: ModelSubscriptionBestPracticesFilterInput
    $owner: String
  ) {
    onDeleteBestPractices(filter: $filter, owner: $owner) {
      id
      headLine
      description
      urlPath
      active
      owner
      createdAt
      updatedAt
      userProfileBestPracticesId
      __typename
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
      metaData
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          campaignId
          adgroupId
          creativeRequests {
            nextToken
            __typename
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
            metaData
            createdAt
            updatedAt
            userProfileBrandId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userProfileBrandId
      __typename
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
      metaData
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          campaignId
          adgroupId
          creativeRequests {
            nextToken
            __typename
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
            metaData
            createdAt
            updatedAt
            userProfileBrandId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userProfileBrandId
      __typename
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
      metaData
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          campaignId
          adgroupId
          creativeRequests {
            nextToken
            __typename
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
            metaData
            createdAt
            updatedAt
            userProfileBrandId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userProfileBrandId
      __typename
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
      campaignId
      adgroupId
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          creativeTiktokHandle
          creatorDescription
          creatorName
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
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
        metaData
        briefs {
          items {
            id
            BriefName
            vertical
            objective
            brandBriefDetails
            creativeInspirations
            active
            campaignId
            adgroupId
            brandId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userProfileBrandId
        __typename
      }
      createdAt
      updatedAt
      __typename
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
      campaignId
      adgroupId
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          creativeTiktokHandle
          creatorDescription
          creatorName
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
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
        metaData
        briefs {
          items {
            id
            BriefName
            vertical
            objective
            brandBriefDetails
            creativeInspirations
            active
            campaignId
            adgroupId
            brandId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userProfileBrandId
        __typename
      }
      createdAt
      updatedAt
      __typename
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
      campaignId
      adgroupId
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          creativeTiktokHandle
          creatorDescription
          creatorName
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
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
        metaData
        briefs {
          items {
            id
            BriefName
            vertical
            objective
            brandBriefDetails
            creativeInspirations
            active
            campaignId
            adgroupId
            brandId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userProfileBrandId
        __typename
      }
      createdAt
      updatedAt
      __typename
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
      creativeTiktokHandle
      creatorDescription
      creatorName
      id
      createdAt
      updatedAt
      __typename
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
      creativeTiktokHandle
      creatorDescription
      creatorName
      id
      createdAt
      updatedAt
      __typename
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
      creativeTiktokHandle
      creatorDescription
      creatorName
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
