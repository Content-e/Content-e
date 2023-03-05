import { ApolloError } from "@apollo/client";
import { BrandBrief, CreativeRequest } from "API";

export interface ICreatorBriefListProps {
  briefList?: Array<BrandBrief | null> | null;
  requestList?: Array<CreativeRequest | null> | null;
  loading: boolean;
  hasMore: boolean;
  error?: ApolloError | null;
  getMoreElements: () => void;
}

export interface IBriefListElems {
  briefName?: string | null;
  brandName?: string | null;
  vertical?: string;
  objective?: string | null;
  status?: string;
  id?: string;
}
