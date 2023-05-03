import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import { FC, useMemo } from "react";
import { ICreativeEntry, ISelectredRequest } from "state/brandBrief";
import "./creativesTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  searchText: string;
  openCreative: (data: ISelectredRequest) => void;
  limit: number;
  currentPage: number;
}

export const CreativeEntries: FC<Props> = ({
  data,
  searchText,
  openCreative,
  limit,
  currentPage,
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
    return getSlicedArray(
      rqArray.filter((e) => e.briefName?.includes(searchText)),
      limit,
      currentPage
    );
  }, [data, currentPage]);

  return (
    <>
      {requests.map((e, i) => (
        <tr key={`${e.id}--${i}`}>
          <td className="creatives-table-description break-entry capitalized">
            {e.briefName}
          </td>
          <td className="creatives-table-description break-entry capitalized">
            {e.creatorHandle}
          </td>
          <td className="creatives-table-description break-entry capitalized">
            {e.videoLink}
          </td>
          <td className="creatives-table-description centered capitalized">
            0
          </td>
          <td className="creatives-table-description centered capitalized">
            0%
          </td>
          <td className="creatives-table-description centered capitalized">
            {e.status}
          </td>
          <td
            className="centered"
            onClick={(): void =>
              openCreative({
                briefId: e.briefId,
                requestId: e.id,
                authCode: e.videoLink || "",
              })
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
