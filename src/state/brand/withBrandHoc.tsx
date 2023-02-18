import React, { useContext } from "react";
import withApolloProvider from "hooks/apollo/withApollo";
import { createUserBrand, updateUserBrand } from "hooks";
import { BrandProps } from "./brand.interface";
import { CreateBrandProfileInput } from "API";
import { AuthContext } from "state/auth";
import { ProfileContext } from "state/profileSteps";

export function withBrand<T>(Component: React.FC<T & BrandProps>): React.FC<T> {
  return withApolloProvider((props: T) => {
    const {
      createBrand,
      loading: createBrandLoading,
      brand: createBrandRes,
    } = createUserBrand();
    const {
      updateBrand,
      loading: updateBrandLoading,
      brand: updateBrandRes,
    } = updateUserBrand();
    const {
      authState: { email },
    } = useContext(AuthContext);
    const {
      profileState: { data: profileData },
    } = useContext(ProfileContext);

    const updateData = (data: CreateBrandProfileInput): void => {
      if (email && profileData?.id) {
        const input = {
          ...data,
          userProfileBrandId: profileData.id,
          userEmail: email,
          __typename: undefined,
          createdAt: undefined,
          updatedAt: undefined,
          owner: undefined,
        };
        if (data.id) updateBrand({ variables: { input } });
        else createBrand({ variables: { input } });
      }
    };

    const hocProps = {
      updateData,
      data: updateBrandRes || createBrandRes,
      loading: updateBrandLoading || createBrandLoading,
    };
    return <Component {...props} {...hocProps} />;
  });
}
export default withBrand;
