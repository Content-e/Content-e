import React, { ReactNode, useState } from "react";
import { IProfileState } from ".";
import { ProfileContext } from "./profile.context";

interface Props {
  children?: ReactNode;
}
export const ProfileProvider: React.FC<Props> = (props) => {
  const [profileState, setProfileState] = useState<IProfileState>({
    isLoading: false,
  });

  const value = {
    profileState,
    setProfileState,
  };

  return (
    <ProfileContext.Provider value={value}>
      {props.children}{" "}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
