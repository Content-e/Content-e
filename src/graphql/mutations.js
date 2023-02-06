/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          createdAt
          updatedAt
          userProfileBrandId
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
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
          createdAt
          updatedAt
          userProfileBrandId
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
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
          createdAt
          updatedAt
          userProfileBrandId
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
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
      createdAt
      updatedAt
      userProfileBrandId
      owner
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
      createdAt
      updatedAt
      userProfileBrandId
      owner
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
      createdAt
      updatedAt
      userProfileBrandId
      owner
    }
  }
`;
