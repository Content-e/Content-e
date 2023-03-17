import { BrandBrief } from "API";
import { FC, useMemo } from "react";
import { ICreativeEntry, ISelectredRequest } from "state/brandBrief";
import "./creativesTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  searchText: string;
  openCreative: (data: ISelectredRequest) => void;
}

export const CreativeEntries: FC<Props> = ({
  data,
  searchText,
  openCreative,
}) => {
  const requests = useMemo(() => {
    const rqArray = [] as Array<ICreativeEntry>;
    data?.forEach((brief) => {
      brief?.creativeRequests?.items.forEach((req) => {
        if (req)
          rqArray.push({
            creativeLink: req?.tiktokCreativeUrl,
            creatorHandle: req?.creativeTiktokHandle,
            briefName: brief.BriefName,
            status: req?.status,
            id: req.id,
            videoLink: req.tiktokVideoCode,
            briefId: brief.id,
          });
      });
    });
    return rqArray;
  }, [data]);

  return (
    <>
      {requests
        .filter((e) => e.briefName?.includes(searchText))
        .map((e) => (
          <tr key={e.id}>
            <td className="creatives-table-description capitalized">
              {e.briefName}
            </td>
            <td className="creatives-table-description capitalized">
              {e.creatorHandle}
            </td>
            <td className="creatives-table-description capitalized">
              {e.videoLink}
            </td>
            <td className="creatives-table-description capitalized">0</td>
            <td className="creatives-table-description capitalized">0%</td>
            <td className="creatives-table-description capitalized">
              {e.status}
            </td>
            <td
              onClick={(): void =>
                openCreative({ briefId: e.briefId, requestId: e.id })
              }
            >
              <img src="/images/table-search.svg" />
            </td>
          </tr>
        ))}
    </>
  );
};

export default CreativeEntries;
