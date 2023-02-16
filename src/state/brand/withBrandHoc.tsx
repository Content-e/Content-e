import React from "react";
import withApolloProvider from "hooks/apollo/withApollo";
import { createUserBrand, updateUserBrand } from "hooks/query/useBrand";
import { BrandProps } from "./brand.interface";
import { CreateBrandProfileInput } from "API";

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

    const updateData = (data: CreateBrandProfileInput): void => {
      if (data.id) updateBrand(data);
      else createBrand(data);
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
