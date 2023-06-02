import { BrandProfile } from "API";
import Button from "components/ui/button";
import { FC } from "react";
import "./brandCard.css";

interface Props {
  data: BrandProfile;
  onCross: () => void;
}
const DetailCard: FC<Props> = ({ data, onCross }) => {
  return (
    <div className="detail-card-wrapper">
      <div className="detail-card-canvas">
        <div className="detail-card-header">
          <div className="text-2xl text-brand-primary font-bold">
            Brand details - {data.name}
          </div>
          <div className="detail-card-cross">
            <img
              src="/images/modal-cross.svg"
              className="close-icon"
              onClick={onCross}
            />
          </div>
        </div>
        <div className="detail-card-body">
          <div className="detail-card-single-elem">
            <b>Strap line: </b>
            {data.strapLine}
          </div>
          <div className="detail-card-single-elem">
            <b>Mission statement: </b>
            {data.internalMission}
          </div>
          <div className="detail-card-single-elem">
            <b>Brand Pillars: </b>
            <ul>
              {data.pillars?.map((e) => {
                if (!e) return "";
                const [title, detail] = e.split(":");
                if (detail?.length)
                  return (
                    <li>
                      <b>{title}</b>: {detail}
                    </li>
                  );
                return <li>{title}</li>;
              })}
            </ul>
          </div>
          <div className="detail-card-single-elem">
            <b>Tone of voice: </b>
            {data.toneVoice}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button onClick={onCross}>Done</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
