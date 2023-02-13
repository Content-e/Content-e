import { useLazyQuery } from "@apollo/client";
import { getUserProfile as getUserQuery } from "graphql/queries";
import {
  GetUserProfileProps,
  GetUserQuery,
  GetUserQueryVariables,
} from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const getUserProfile = (): GetUserProfileProps => {
  const [getProfile, { data, loading, error }] = useLazyQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(getQuery(getUserQuery));
  const profileData = data?.getUserProfile || null;
  const errorData =
    error || (profileData ? undefined : new Error("No Talent Found"));
  return { loading, getProfile, profileData, error: errorData };
};
