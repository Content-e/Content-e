import { BrandBrief } from "API";
import { FC, useMemo } from "react";
import { ICreativeEntry } from "state/brandBrief";
import "./brandCreativesTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  openCreative: (creativeId: string) => void;
}
export const BrandCreativesTable: FC<Props> = ({ data, openCreative }) => {
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
          });
      });
    });
    return rqArray;
  }, [data]);

  return (
    <>
      {requests.map((e) => (
        <tr>
          <td className="table-description">{e.creativeLink}</td>
          <td className="table-description">
            {e.creatorHandle ? `@${e.creatorHandle}` : ""}
          </td>
          <td className="table-description">{e.briefName}</td>
          <td className="table-description">{e.status}</td>
          <td onClick={(): void => openCreative(e.id)}>
            <img src="/images/table-search.svg" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default BrandCreativesTable;
