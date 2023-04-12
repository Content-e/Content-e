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
      BRAND_PILLARS_REFRESH
      BRAND_VALUES
      BRAND_MISSION_STATEMENT
      BRAND_TAGLINE_STATEMENT
      BRAND_TAGLINE_STATEMENT_REFRESH
      BRAND_MISSION_STATEMENT_REFRESH
      error
      message
    }
  }
`;
export const getApprovedAds = /* GraphQL */ `
  query GetApprovedAds($id: ID!) {
    getApprovedAds(id: $id) {
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
export const listApprovedAds = /* GraphQL */ `
  query ListApprovedAds(
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApprovedAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const approvedAdsById = /* GraphQL */ `
  query ApprovedAdsById(
    $id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    approvedAdsById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const approvedAdsByCreativeRequestId = /* GraphQL */ `
  query ApprovedAdsByCreativeRequestId(
    $creativeRequestId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    approvedAdsByCreativeRequestId(
      creativeRequestId: $creativeRequestId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const approvedAdsByAd_id = /* GraphQL */ `
  query ApprovedAdsByAd_id(
    $ad_id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    approvedAdsByAd_id(
      ad_id: $ad_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const approvedAdsByAd_group_id = /* GraphQL */ `
  query ApprovedAdsByAd_group_id(
    $ad_group_id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    approvedAdsByAd_group_id(
      ad_group_id: $ad_group_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const approvedAdsByCampaing_id = /* GraphQL */ `
  query ApprovedAdsByCampaing_id(
    $campaing_id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    approvedAdsByCampaing_id(
      campaing_id: $campaing_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const approvedAdsByAdvertiser_id = /* GraphQL */ `
  query ApprovedAdsByAdvertiser_id(
    $advertiser_id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    approvedAdsByAdvertiser_id(
      advertiser_id: $advertiser_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const approvedAdsByUser_profile_id = /* GraphQL */ `
  query ApprovedAdsByUser_profile_id(
    $user_profile_id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    approvedAdsByUser_profile_id(
      user_profile_id: $user_profile_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const approvedAdsByStatus = /* GraphQL */ `
  query ApprovedAdsByStatus(
    $status: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApprovedAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    approvedAdsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
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
      nextToken
    }
  }
`;
export const getBestPractices = /* GraphQL */ `
  query GetBestPractices($id: ID!) {
    getBestPractices(id: $id) {
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
export const listBestPractices = /* GraphQL */ `
  query ListBestPractices(
    $filter: ModelBestPracticesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBestPractices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const bestPracticesByActive = /* GraphQL */ `
  query BestPracticesByActive(
    $active: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBestPracticesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bestPracticesByActive(
      active: $active
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getBrandBrief = /* GraphQL */ `
  query GetBrandBrief($id: ID!) {
    getBrandBrief(id: $id) {
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
export const listBrandBriefs = /* GraphQL */ `
  query ListBrandBriefs(
    $filter: ModelBrandBriefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrandBriefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const brandBriefsByVertical = /* GraphQL */ `
  query BrandBriefsByVertical(
    $vertical: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBrandBriefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    brandBriefsByVertical(
      vertical: $vertical
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const brandBriefsByBrandId = /* GraphQL */ `
  query BrandBriefsByBrandId(
    $brandId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBrandBriefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    brandBriefsByBrandId(
      brandId: $brandId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCreativeRequest = /* GraphQL */ `
  query GetCreativeRequest($id: ID!) {
    getCreativeRequest(id: $id) {
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
export const listCreativeRequests = /* GraphQL */ `
  query ListCreativeRequests(
    $filter: ModelCreativeRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreativeRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const creativeRequestsByBrandBriefId = /* GraphQL */ `
  query CreativeRequestsByBrandBriefId(
    $brandBriefId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCreativeRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    creativeRequestsByBrandBriefId(
      brandBriefId: $brandBriefId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const creativeRequestsByCreatorId = /* GraphQL */ `
  query CreativeRequestsByCreatorId(
    $creatorId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCreativeRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    creativeRequestsByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const creativeRequestsByStatus = /* GraphQL */ `
  query CreativeRequestsByStatus(
    $status: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCreativeRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    creativeRequestsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const sendEmail = /* GraphQL */ `
  query SendEmail($data: EMAIL_INPUT) {
    sendEmail(data: $data)
  }
`;
