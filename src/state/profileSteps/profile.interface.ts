import { ApolloError } from "@apollo/client";
import { BrandProfile, UserProfile } from "API";

export interface IProfileDetails {
  id: string;
  version: number;
}

export interface IProfile {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  version: number;
  referredBy?: string | null;
  profile?: IProfileDetails | null;
}

export interface IProfileState {
  data?: UserProfile | null;
  isLoading: boolean;
  error?: ApolloError | Error;
}

export interface ProfileContextType {
  profileState: IProfileState;
  setProfileState: React.Dispatch<React.SetStateAction<IProfileState>>;
}

export interface BrandContextType {
  brandState: BrandProfile | null;
  setBrandState: React.Dispatch<React.SetStateAction<BrandProfile>>;
}
