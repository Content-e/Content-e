import { BrandBrief } from "API";
import { getSlicedArray, getSortedArray } from "components/helpers";
import { FC, useMemo } from "react";
import { ICreativeEntry, ISelectredRequest } from "state/brandBrief";
import "./brandCreativesTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  limit: number;
  currentPage: number;
  openCreative: (data: ISelectredRequest) => void;
}
export const BrandCreativesTable: FC<Props> = ({
  data,
  limit,
  currentPage,
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
            briefId: brief.id,
            date: req.createdAt,
          });
      });
    });
    return getSlicedArray(getSortedArray(rqArray, "date"), limit, currentPage);
  }, [data, currentPage]);

  return (
    <>
      {requests.map((e, index) => (
        <tr key={`${e.id}-creatives-${index}`}>
          <td className="table-description">{e.creativeLink}</td>
          <td className="table-description">
            {e.creatorHandle ? `@${e.creatorHandle}` : ""}
          </td>
          <td className="table-description capitalized">{e.briefName}</td>
          <td className="table-description capitalized centered">{e.status}</td>
          <td
            className="centered"
            onClick={(): void =>
              openCreative({
                briefId: e.briefId,
                requestId: e.id,
                authCode: e.creativeLink || "",
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

export default BrandCreativesTable;
