//import classNames from "classnames";
import { FC /*, useEffect, useMemo, useState*/ } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
//import * as S from "./styles";

/*const PercentageMapper = [
  { id: 0, percentage: 0, degree: 0, className: "zero" },
  { id: 10, percentage: 21, degree: 14, className: "ten" },
  { id: 20, percentage: 30, degree: 32, className: "twenty" },
  { id: 30, percentage: 36, degree: 51, className: "thirty" },
  { id: 40, percentage: 42, degree: 72, className: "forty" },
  { id: 50, percentage: 50, degree: 90, className: "fifty" },
  { id: 60, percentage: 58, degree: 108, className: "sixty" },
  { id: 70, percentage: 64, degree: 129, className: "seventy" },
  { id: 80, percentage: 70, degree: 148, className: "eighty" },
  { id: 90, percentage: 79, degree: 166, className: "ninty" },
  { id: 100, percentage: 100, degree: 180, className: "hundred" },
];*/
export const Meter: FC<ProfileProps> = (/*{ profileState: { data } }*/) => {
  //const [value, setValue] = useState(0);

  /*useEffect(() => {
    const brand = data?.brand?.items?.[0];
    if (brand) {
      let tempValue = 0;
      if (brand.description?.length) tempValue = 10;
      if (brand.toneVoice?.[0]) tempValue = 20;
      if (brand.name) tempValue = 40;
      if (brand.pillars?.[0]?.length) tempValue = 50;
      if (brand.pillars?.[1]?.length) tempValue = 60;
      if (brand.pillars?.[2]?.length) tempValue = 70;
      if (brand.pillars?.[3]?.length) tempValue = 80;
      if (brand.internalMission?.length) tempValue = 90;
      if (brand.strapLine) tempValue = 100;
      setValue(tempValue);
    }
  }, [data]);*/

  /*const { percentage, degree } = useMemo(
    () => PercentageMapper.find((e) => e.id === value) || PercentageMapper[0],
    [value]
  );*/
  return (
    <div className="brand-dashboard__items brand-profile-items">
      <div className="brand-dashboard__item title">Brand profile</div>
      <div className="brand-dashboard__item">
        <div className="brand-dashboard__top">
          <div className="brand-dashboard__top-title">Brand identity</div>
        </div>
        <img
          className="brand-dashboard__item-scheme"
          alt=""
          src="/images/brand-profile-img.svg"
        />
        <div className="brand-dashboard__text">
          <p>
            <span>Strap line:</span> Human and AI Intelligence - Unlocking
            potential.
          </p>
          <p>
            <span>Mission Statement:</span> Our mission is to empower businesses
            to reach new heights by leveraging the power of human and artificial
            intelligence.
          </p>
          <p>
            <span>Brand Pillars:</span>
          </p>
          <p>
            <span>Curious</span> - We are driven by the latest in technological
            and human advances and are constantly searching for a better way to
            do things.
          </p>
          <p>
            <span>Human</span> - We believe no matter how advanced the
            technology, its impact is determined by the human interaction with
            it. We believe the advancement of ai technology will help facilitate
            the next stage of human evolution.
          </p>
          <p>
            <span>Simplicity</span> - Whilst new technology is complicated by
            nature, we believe the key lies in defining and communicating the
            opportunity in simplistic terms.
          </p>
          <p>
            <span>Positive Impact</span> - We care about how human and
            artificial intelligence can merge to create a positive impact to the
            world.
          </p>
          <p>
            <span>Brand tone of voice:</span> Conversational
          </p>
        </div>
        <div className="brand-dashboard__item-button-wrap">
          <button className="brand-dashboard__item-button">Edit brand</button>
        </div>
      </div>
      <div className="brand-dashboard__item">
        <div className="brand-dashboard__form">
          <div className="brand-dashboard__form-group">
            <div className="brand-dashboard__form-label">
              Link TikTok account
            </div>
            <input type="text" className="brand-dashboard__form-input" />
          </div>
          <div className="brand-dashboard__form-group">
            <div className="brand-dashboard__form-label">Brand website</div>
            <input type="text" className="brand-dashboard__form-input" />
          </div>
          <div className="brand-dashboard__form-group">
            <div className="brand-dashboard__form-label">
              Brand instagram handle
            </div>
            <input type="text" className="brand-dashboard__form-input" />
          </div>
          <div className="brand-dashboard__form-group">
            <div className="brand-dashboard__form-label">
              Brand facebook page
            </div>
            <input type="text" className="brand-dashboard__form-input" />
          </div>
          <div className="brand-dashboard__form-group">
            <div className="brand-dashboard__form-label">
              Brand linkedin page
            </div>
            <input type="text" className="brand-dashboard__form-input" />
          </div>
          <div className="brand-dashboard__form-group">
            <div className="brand-dashboard__form-label">
              Brand Twitter handle
            </div>
            <input type="text" className="brand-dashboard__form-input" />
          </div>
        </div>
        <div className="brand-dashboard__item-button-wrap">
          <button className="brand-dashboard__item-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default withProfile(Meter);
