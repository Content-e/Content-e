import { AuthRoutes, ProfileProps } from "utils";
import { FullPageLoader } from "components";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { useLinkTiktokAccount } from "hooks";
import "./style.css";

const LinkTiktokAccount: React.FC<ProfileProps> = ({
  profileState: { data },
}) => {
  const history = useHistory();
  const {
    linkTiktok,
    data: tiktokAccountData,
    loading,
  } = useLinkTiktokAccount();

  useEffect(() => {
    const url = new URL(window.location.href);
    const authCode = url.searchParams.get("auth_code");
    if (data?.id && authCode)
      linkTiktok({ variables: { authCode, userProfileId: data.id } });
  }, [data]);

  useEffect(() => {
    if (!loading && tiktokAccountData) history.replace(AuthRoutes.Dashboard);
  }, [tiktokAccountData, loading]);

  if (loading) return <FullPageLoader />;
  return (
    <div className="tiktok_error_box">
      Unable to link tiktok account, Your provided token is either invalid or
      already used.
    </div>
  );
};

export default withProfile(LinkTiktokAccount);
