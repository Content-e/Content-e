import { getCreatorBriefList, getCreatorRequests } from "hooks";
import React, { FC, useContext, useEffect } from "react";
import { ProfileContext } from "state/profileSteps";
import { UnknownType } from "utils";
import { ICreatorBriefListProps } from "./dashboard.interface";

export function withCreatorBriefList<T>(
  Component: React.FC<T & ICreatorBriefListProps>
): React.FC<T> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const GetCreatorBriefList: React.FC = (props: T) => {
    const {
      profileState: { data: profileData },
    } = useContext(ProfileContext);
    const { getBriefList, loading, data, nextToken, error } =
      getCreatorBriefList();
    const {
      listCreativeRequests,
      loading: requestLoading,
      data: requestData,
      error: requestError,
    } = getCreatorRequests();

    const callApi = (input: UnknownType): void => {
      getBriefList({ variables: { ...input, limit: 100 } });
      if (profileData?.id)
        listCreativeRequests({ variables: { creatorId: profileData.id } });
    };

    const getMoreElements = (): void => {
      if (nextToken) callApi({ nextToken });
    };

    useEffect(() => {
      callApi({ nextToken: null });
    }, []);

    const customProps: ICreatorBriefListProps = {
      briefList: data,
      requestList: requestData,
      loading: loading || requestLoading,
      error: error || requestError,
      hasMore: !!nextToken,
      getMoreElements,
    };
    return <Component {...props} {...customProps} />;
  };
  return GetCreatorBriefList as FC<T>;
}
export default withCreatorBriefList;
