import { getUserProfile } from "hooks";
import { FC, useEffect, useMemo } from "react";
import "./creatorProfileDescription.css";

interface Props {
  creatorId: string;
}

export const CreatorProfileDescription: FC<Props> = ({ creatorId }) => {
  const { getProfile, loading, profileData } = getUserProfile();

  useEffect(() => {
    if (creatorId) getProfile({ variables: { id: creatorId } });
  }, [creatorId]);

  const description = useMemo(() => {
    if (!loading && profileData) return profileData.description;
    return "";
  }, [loading, profileData]);
  return (
    <div className="creator-profile-container">
      <div className="creator-profile-text">
        <div>Creator Profile</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default CreatorProfileDescription;
