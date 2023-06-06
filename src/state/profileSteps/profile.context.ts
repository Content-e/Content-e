import { createContext } from 'react';
import { initialProfileState } from 'utils';
import { BrandContextType, ProfileContextType } from './profile.interface';

export const ProfileContext = createContext<ProfileContextType>({
  profileState: initialProfileState,
  setProfileState: (): void => {},
});

export const BrandContext = createContext<BrandContextType>({
  brandState: null,
  setBrandState: (): void => {},
});
