import { ApolloError } from "@apollo/client";
import { BrandBrief, CreativeRequest } from "API";
import { Placement } from "react-bootstrap/esm/types";

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

export interface IDashboardValue {
  label: string;
  placement: Placement;
  tooltip: string;
}
export interface ICreatorDashboardBox {
  Wallet: IDashboardValue;
  Approval: IDashboardValue;
  Conversion: IDashboardValue;
  ClickThrough: IDashboardValue;
}

export interface INotification {
  name?: string | null;
  status: string;
  time: string;
}
