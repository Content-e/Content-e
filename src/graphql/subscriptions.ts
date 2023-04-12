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
          metaData
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
        }
        nextToken
      }
      tiktokAccountAccess
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
          metaData
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
        }
        nextToken
      }
      tiktokAccountAccess
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
          metaData
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
        }
        nextToken
      }
      tiktokAccountAccess
      createdAt
      updatedAt
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
      creativeTiktokHandle
      creatorDescription
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
      creativeTiktokHandle
      creatorDescription
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
      creativeTiktokHandle
      creatorDescription
      id
      createdAt
      updatedAt
    }
  }
`;
