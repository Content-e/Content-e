/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const linkTiktokAccount = /* GraphQL */ `
  mutation LinkTiktokAccount($authCode: String, $userProfileId: String) {
    linkTiktokAccount(authCode: $authCode, userProfileId: $userProfileId)
  }
`;
export const linkUserType = /* GraphQL */ `
  mutation LinkUserType($userType: String, $profileId: String) {
    linkUserType(userType: $userType, profileId: $profileId)
  }
`;
export const createAds = /* GraphQL */ `
  mutation CreateAds(
    $token: String
    $authCode: String
    $advId: String
    $adgroupId: String
    $landingPageUrl: String
    $creativeRequestId: String
  ) {
    createAds(
      token: $token
      authCode: $authCode
      advId: $advId
      adgroupId: $adgroupId
      landingPageUrl: $landingPageUrl
      creativeRequestId: $creativeRequestId
    )
  }
`;
export const listAdGroups = /* GraphQL */ `
  mutation ListAdGroups(
    $token: String
    $advertiser_id: String
    $campaignId: String
  ) {
    listAdGroups(
      token: $token
      advertiser_id: $advertiser_id
      campaignId: $campaignId
    )
  }
`;
export const listCampaigns = /* GraphQL */ `
  mutation ListCampaigns($token: String, $advertiser_id: String) {
    listCampaigns(token: $token, advertiser_id: $advertiser_id)
  }
`;
export const getVideoFromAuthCode = /* GraphQL */ `
  mutation GetVideoFromAuthCode(
    $token: String
    $advertiser_id: String
    $authCode: String
  ) {
    getVideoFromAuthCode(
      token: $token
      advertiser_id: $advertiser_id
      authCode: $authCode
    )
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
      userWallet {
        id
        currentBalance
        totalEarned
        userProfileId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userProfileUserWalletId
    }
  }
`;
export const createApprovedAds = /* GraphQL */ `
  mutation CreateApprovedAds(
    $input: CreateApprovedAdsInput!
    $condition: ModelApprovedAdsConditionInput
  ) {
    createApprovedAds(input: $input, condition: $condition) {
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
export const updateApprovedAds = /* GraphQL */ `
  mutation UpdateApprovedAds(
    $input: UpdateApprovedAdsInput!
    $condition: ModelApprovedAdsConditionInput
  ) {
    updateApprovedAds(input: $input, condition: $condition) {
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
export const deleteApprovedAds = /* GraphQL */ `
  mutation DeleteApprovedAds(
    $input: DeleteApprovedAdsInput!
    $condition: ModelApprovedAdsConditionInput
  ) {
    deleteApprovedAds(input: $input, condition: $condition) {
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
export const deleteBestPractices = /* GraphQL */ `
  mutation DeleteBestPractices(
    $input: DeleteBestPracticesInput!
    $condition: ModelBestPracticesConditionInput
  ) {
    deleteBestPractices(input: $input, condition: $condition) {
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
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
      userWallet {
        id
        currentBalance
        totalEarned
        userProfileId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userProfileUserWalletId
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
      userWallet {
        id
        currentBalance
        totalEarned
        userProfileId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userProfileUserWalletId
    }
  }
`;
export const createUserWallet = /* GraphQL */ `
  mutation CreateUserWallet(
    $input: CreateUserWalletInput!
    $condition: ModelUserWalletConditionInput
  ) {
    createUserWallet(input: $input, condition: $condition) {
      id
      currentBalance
      totalEarned
      userProfileId
      createdAt
      updatedAt
    }
  }
`;
export const updateUserWallet = /* GraphQL */ `
  mutation UpdateUserWallet(
    $input: UpdateUserWalletInput!
    $condition: ModelUserWalletConditionInput
  ) {
    updateUserWallet(input: $input, condition: $condition) {
      id
      currentBalance
      totalEarned
      userProfileId
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserWallet = /* GraphQL */ `
  mutation DeleteUserWallet(
    $input: DeleteUserWalletInput!
    $condition: ModelUserWalletConditionInput
  ) {
    deleteUserWallet(input: $input, condition: $condition) {
      id
      currentBalance
      totalEarned
      userProfileId
      createdAt
      updatedAt
    }
  }
`;
export const createBestPractices = /* GraphQL */ `
  mutation CreateBestPractices(
    $input: CreateBestPracticesInput!
    $condition: ModelBestPracticesConditionInput
  ) {
    createBestPractices(input: $input, condition: $condition) {
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
export const updateBestPractices = /* GraphQL */ `
  mutation UpdateBestPractices(
    $input: UpdateBestPracticesInput!
    $condition: ModelBestPracticesConditionInput
  ) {
    updateBestPractices(input: $input, condition: $condition) {
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
export const createBrandProfile = /* GraphQL */ `
  mutation CreateBrandProfile(
    $input: CreateBrandProfileInput!
    $condition: ModelBrandProfileConditionInput
  ) {
    createBrandProfile(input: $input, condition: $condition) {
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
export const updateBrandProfile = /* GraphQL */ `
  mutation UpdateBrandProfile(
    $input: UpdateBrandProfileInput!
    $condition: ModelBrandProfileConditionInput
  ) {
    updateBrandProfile(input: $input, condition: $condition) {
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
export const deleteBrandProfile = /* GraphQL */ `
  mutation DeleteBrandProfile(
    $input: DeleteBrandProfileInput!
    $condition: ModelBrandProfileConditionInput
  ) {
    deleteBrandProfile(input: $input, condition: $condition) {
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
export const createBrandBrief = /* GraphQL */ `
  mutation CreateBrandBrief(
    $input: CreateBrandBriefInput!
    $condition: ModelBrandBriefConditionInput
  ) {
    createBrandBrief(input: $input, condition: $condition) {
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
export const updateBrandBrief = /* GraphQL */ `
  mutation UpdateBrandBrief(
    $input: UpdateBrandBriefInput!
    $condition: ModelBrandBriefConditionInput
  ) {
    updateBrandBrief(input: $input, condition: $condition) {
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
export const deleteBrandBrief = /* GraphQL */ `
  mutation DeleteBrandBrief(
    $input: DeleteBrandBriefInput!
    $condition: ModelBrandBriefConditionInput
  ) {
    deleteBrandBrief(input: $input, condition: $condition) {
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
export const createCreativeRequest = /* GraphQL */ `
  mutation CreateCreativeRequest(
    $input: CreateCreativeRequestInput!
    $condition: ModelCreativeRequestConditionInput
  ) {
    createCreativeRequest(input: $input, condition: $condition) {
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
export const updateCreativeRequest = /* GraphQL */ `
  mutation UpdateCreativeRequest(
    $input: UpdateCreativeRequestInput!
    $condition: ModelCreativeRequestConditionInput
  ) {
    updateCreativeRequest(input: $input, condition: $condition) {
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
export const deleteCreativeRequest = /* GraphQL */ `
  mutation DeleteCreativeRequest(
    $input: DeleteCreativeRequestInput!
    $condition: ModelCreativeRequestConditionInput
  ) {
    deleteCreativeRequest(input: $input, condition: $condition) {
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
