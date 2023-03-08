import { AuthRoutes, ProfileProps } from "utils";
import { FullPageLoader, replaceSubPath } from "components";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { USER_TYPES } from "API";

const RedirectingStep: React.FC<ProfileProps> = ({
  profileState: { data },
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const pathnameParts = pathname.split("/");

  const redirectToDashboard = () => {
    if (data?.userType === USER_TYPES.CREATIVE_USER)
      history.replace(AuthRoutes.CreatorDashboard);
    else if (data?.userType === USER_TYPES.BRAND_USER)
      history.replace(AuthRoutes.BrandBrief);
  };
  const redirectToValidRoute = (): void => {
    if (
      pathnameParts.length === 3 &&
      pathnameParts[2].length &&
      data?.userType === USER_TYPES.CREATIVE_USER
    )
      history.replace(replaceSubPath(AuthRoutes.Tiktok));
    else redirectToDashboard();
  };

  useEffect(() => {
    if (data) redirectToValidRoute();
  }, [data]);

  return <FullPageLoader />;
};

export default withProfile(RedirectingStep);
