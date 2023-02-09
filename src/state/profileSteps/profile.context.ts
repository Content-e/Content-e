import { createContext } from "react";
import { initialProfileState } from "utils";
import { ProfileContextType } from "./profile.interface";

export const ProfileContext = createContext<ProfileContextType>({
  profileState: initialProfileState,
  setProfileState: (): void => {},
});

export default ProfileContext;
