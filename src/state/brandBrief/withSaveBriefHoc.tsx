import React, { useContext, useEffect, useState } from "react";
import withApolloProvider from "hooks/apollo/withApollo";
import { createCampaignBrief, editCampaignBrief } from "hooks";
import {
  BrandBriefProps,
  ICreateBriefState,
  SaveBriefProps,
} from "./brandBrief.interface";
import { ProfileContext } from "state/profileSteps";
import { useHistory, useLocation } from "react-router-dom";
import { BrandBrief } from "API";
import { BrandRoutes, AuthRoutes } from "utils";

export function withSaveBrief<T>(
  Component: React.FC<T & BrandBriefProps>
): React.FC<T> {
  return withApolloProvider((props: T) => {
    const history = useHistory();
    const { pathname, state } = useLocation();

    const { profileState } = useContext(ProfileContext);
    const [briefState, setBriefState] = useState<ICreateBriefState>();

    const {
      createBrief,
      loading: createLoading,
      data: createData,
    } = createCampaignBrief();
    const {
      editBrief,
      loading: editLoading,
      data: editData,
    } = editCampaignBrief();

    const saveData = (data: ICreateBriefState): void => {
      const brandId = profileState.data?.brand?.items?.[0]?.id;

      if (brandId) {
        const { tiktokHandle, ...rest } = data;
        const input = { ...rest, brandId };

        if (rest.id) editBrief({ variables: { input } });
        else
          createBrief({
            variables: { input: { ...input, vertical: "retail" } },
          });
      }
    };

    useEffect(() => {
      if (pathname.includes(BrandRoutes.EditBrief)) {
        const { brief } = (state || {}) as { brief: BrandBrief };
        if (brief?.id) {
          setBriefState({
            BriefName: brief.BriefName || "",
            tiktokHandle: "",
            vertical: brief.vertical,
            objective: brief.objective || "",
            brandBriefDetails: brief.brandBriefDetails || "",
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            creativeInspirations: brief?.creativeInspirations || [],
            active: typeof brief.active === "boolean" ? brief.active : true,
            id: brief.id,
          });
        } else history.replace(AuthRoutes.CampaignBrief);
      }
    }, [state, pathname]);

    const hocProps: SaveBriefProps = {
      saveData,
      briefState,
      loading: createLoading || editLoading,
      response: createData || editData,
    };
    return <Component {...props} {...hocProps} />;
  });
}
export default withSaveBrief;
