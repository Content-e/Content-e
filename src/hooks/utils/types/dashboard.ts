import { ApolloError } from "@apollo/client";
import { BrandBrief, CreativeRequest } from "API";

export type GetCreatorBriefListProps = {
  loading: boolean;
  getBriefList: (unknown) => void;
  data?: Array<BrandBrief | null> | null;
  nextToken?: string | null;
  error?: ApolloError | null;
};

export type GetCreatorCreativeRequestsProps = {
  loading: boolean;
  listCreativeRequests: (unknown) => void;
  data?: Array<CreativeRequest | null> | null;
  nextToken?: string | null;
  error?: ApolloError | null;
};

export type GetBrandBriefListProps = {
  loading: boolean;
  getBrandBriefs: (unknown) => void;
  data?: Array<BrandBrief | null> | null;
  nextToken?: string | null;
  error?: ApolloError | null;
};
