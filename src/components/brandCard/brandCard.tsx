import GradientCard from "components/gradientCard/gradientCard";
import { FC, useMemo } from "react";
import "./brandCard.css";

interface Props {
  briefName?: string | null;
  onShowDetails: () => void;
}
const BrandCard: FC<Props> = ({ briefName, onShowDetails }) => {
  const tag = useMemo(() => {
    if (!briefName) return "";
    return briefName.trim().replaceAll(" ", "_").replaceAll("-", "_");
  }, [briefName]);
  return (
    <GradientCard>
      <img
        className="brand-dashboard__item-block-icon"
        alt=""
        src="/images/doc_1_white.svg"
        onClick={onShowDetails}
      />
      <div className="creator-dashboard__item-block-key">Brand</div>
      <div className="creator-dashboard__item-block-value">{briefName}</div>
      <div className="creator-dashboard__item-block-tag">@{tag}</div>
    </GradientCard>
  );
};

export default BrandCard;
