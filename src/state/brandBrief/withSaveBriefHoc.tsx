import React, { useContext, useEffect, useState } from "react";
import withApolloProvider from "hooks/apollo/withApollo";
import {
  createCampaignBrief,
  editCampaignBrief,
  getlistAdGroups,
  getlistCampaigns,
} from "hooks";
import {
  BrandBriefProps,
  ICreateBriefState,
  ISelectDropdown,
  ITikTokAccess,
  ITikTokCreds,
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
    const [tiktokCreds, setTiktokCreds] = useState<ITikTokCreds>();

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

    const {
      getCampaignList,
      data: listCampaigns,
      loading: campaignListLoading,
    } = getlistCampaigns();
    const {
      getAdGroupList,
      data: listAdGroups,
      loading: adGroupsListLoading,
    } = getlistAdGroups();

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
    const getAdGroups = (campaignId: string): void => {
      getAdGroupList({ variables: { ...tiktokCreds, campaignId } });
    };

    useEffect(() => {
      if (profileState.data) {
        const { tiktokAccountAccess } = profileState.data;
        if (tiktokAccountAccess) {
          try {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const { access_token, advertiser_id } = JSON.parse(
              tiktokAccountAccess
            ) as ITikTokAccess;
            if (access_token && advertiser_id) {
              setTiktokCreds({ token: access_token, advertiser_id });
              return;
            }
          } catch (err) {
            console.log(err);
          }
        }
        history.goBack();
      }
    }, [profileState]);
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
            campaignId: brief.campaignId || "",
            adgroupId: brief.adgroupId || "",
          });
        } else history.replace(AuthRoutes.CampaignBrief);
      }
    }, [state, pathname]);
    useEffect(() => {
      if (tiktokCreds) getCampaignList({ variables: { ...tiktokCreds } });
    }, [tiktokCreds]);

    const getFormattedCampaigns = (
      campaigns?: string | null
    ): Array<ISelectDropdown> => {
      if (campaigns) {
        try {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { data } = JSON.parse(campaigns);
          if (data?.list?.length) {
            const output = [] as Array<ISelectDropdown>;
            data.list.forEach((e) => {
              output.push({ id: e.campaign_id, value: e.campaign_name });
            });
            return output;
          }
        } catch (err) {
          console.log(err);
        }
      }
      return [];
    };

    const getFormattedAdGroups = (
      adgroups?: string | null
    ): Array<ISelectDropdown> => {
      if (adgroups) {
        try {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { data } = JSON.parse(adgroups);
          if (data?.list?.length) {
            const output = [] as Array<ISelectDropdown>;
            data.list.forEach((e) => {
              output.push({ id: e.adgroup_id, value: e.adgroup_name });
            });
            return output;
          }
        } catch (err) {
          console.log(err);
        }
      }
      return [];
    };

    const hocProps: SaveBriefProps = {
      saveData,
      getAdGroups,
      briefState,
      loading: createLoading || editLoading,
      dataLoading: campaignListLoading || adGroupsListLoading,
      listAdGroups: getFormattedAdGroups(listAdGroups),
      listCampaigns: getFormattedCampaigns(listCampaigns),
      response: createData || editData,
    };
    return <Component {...props} {...hocProps} />;
  });
}
export default withSaveBrief;
