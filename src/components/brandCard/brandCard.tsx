import { FC, useMemo } from "react";
import "./brandCard.css";

interface Props {
  briefName?: string | null;
}
const BrandCard: FC<Props> = ({ briefName }) => {
  const tag = useMemo(() => {
    if (!briefName) return "";
    return briefName.trim().replaceAll(" ", "_").replaceAll("-", "_");
  }, [briefName]);
  return (
    <div className="brand-card-container">
      <div className="brand-card-header">
        <div className="brand-title">Brand</div>
        <img src="/images/table-search.svg" />
      </div>
      <div>
        <b className="campaign-title f-600">{briefName}</b>
        <div className="campaign-title f-300">@{tag}</div>
      </div>
    </div>
  );
};

export default BrandCard;
