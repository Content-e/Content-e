import { FC, /*useMemo,*/ useState, useEffect } from "react";
import { BrandBrief } from "API";
import { ISelectredRequest } from "state/brandBrief";
//import CreativeDetailsCard from "components/creativeDetailsCard/creativeDetailsCard";
//import CreatorProfileDescription from "components/creatorProfileDescription/creatorProfileDescription";
//import CreativeTikTokApproval from "components/creativeTikTokApproval/creativeTikTokApproval";
import "./creativeDetails.css";

interface Props {
  data?: Array<BrandBrief | null>;
  selectedRequest: ISelectredRequest;
  onBack: () => void;
}

export const CreativeDetails: FC<Props> = () => {
  /*const brief = useMemo(
    () => data?.find((e) => e?.id === selectedRequest.briefId),
    [data, selectedRequest]
  );*/
  /*const request = useMemo(() => {
    const req = brief?.creativeRequests?.items;
    return req?.find((e) => e?.id === selectedRequest.requestId);
  }, [brief]);*/

  const openedSidebar = false;
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [briefLimit, setBriefLimit] = useState({
    full: 15,
    short: 9,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize <= 1445) {
      setBriefLimit({ full: 10, short: 6 });
    } else {
      setBriefLimit({ full: 15, short: 9 });
    }
  }, [windowSize]);

  return (
    <div className="brand-dashboard__items creatives-items">
      <div className="brand-dashboard__item statistics-item">
        <div className="statistics-elements">
          <div className="brand-dashboard__item colored">
            <div className="brand-dashboard__bg"></div>
            <div className="brand-dashboard__item-block">
              <img
                className="brand-dashboard__item-block-icon"
                alt=""
                src="/images/doc_1_white.svg"
              />
              <div className="brand-dashboard__item-block-key">
                Creator handle
              </div>
              <div className="brand-dashboard__item-block-value">
                {openedSidebar
                  ? "@creatorhandle".length > briefLimit.short
                    ? "@creatorhandle".slice(0, briefLimit.short) + "..."
                    : "@creatorhandle"
                  : "@creatorhandle".length > briefLimit.full
                  ? "@creatorhandle".slice(0, briefLimit.full) + "..."
                  : "@creatorhandle"}
              </div>
            </div>
          </div>
          <div className="brand-dashboard__item colored">
            <div className="brand-dashboard__bg"></div>
            <div className="brand-dashboard__item-block">
              <img alt="" src="" />
              <div className="brand-dashboard__item-block-key">
                Campaign brief name
              </div>
              <div className="brand-dashboard__item-block-value">
                {openedSidebar
                  ? "Summer Campaign".length > briefLimit.short
                    ? "Summer Campaign".slice(0, briefLimit.short) + "..."
                    : "Summer Campaign"
                  : "Summer Campaign".length > briefLimit.full
                  ? "Summer Campaign".slice(0, briefLimit.full) + "..."
                  : "Summer Campaign"}
              </div>
            </div>
          </div>
          <div className="brand-dashboard__item colored">
            <div className="brand-dashboard__bg"></div>
            <div className="brand-dashboard__item-block">
              <img alt="" src="" />
              <div className="brand-dashboard__item-block-key">View count</div>
              <div className="brand-dashboard__item-block-value">1,284</div>
            </div>
          </div>
          <div className="brand-dashboard__item colored">
            <div className="brand-dashboard__bg"></div>
            <div className="brand-dashboard__item-block">
              <img alt="" src="" />
              <div className="brand-dashboard__item-block-key">
                Engagement rate
              </div>
              <div className="brand-dashboard__item-block-value">4.8%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand-dashboard__item half_1">
        <div className="brand-dashboard__top">
          <div className="brand-dashboard__top-title">Creator profile</div>
          <img
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots.svg"
          />
        </div>
        <div className="brand-dashboard__text dark short-gap">
          <p>
            I am an aspiring game designer and I work primarily on free and open
            source game projects. I also try to contribute to the Open Source
            Games movement through my own projects here and on the Open Game Art
            site. You can see more of my games here:
            https://github.com/ezran/games My username on Sourceforge is ezran,
            and you can find more information about me in my profile.
          </p>
          <ul>
            <li>These are people who have a unique set of characteristics.</li>
            <li>They stand out from the general mass.</li>
            <li>They have something that others don"t have.</li>
            <li>And this is what they appreciate and want to emphasize.</li>
            <li>
              We have chosen the brightest ones so that you can highlight them
              and focus on them.
            </li>
          </ul>
          <p>
            Currently working on a free-to-play game called Labyrinth of Lost
            Souls. Labyrinth is a very complex, nonlinear, story-driven fantasy
            RPG that has been designed to be a “game within a game” for a wide
            audience. The game is based on a fantasy world where a magical tree
            called The Tree of Souls lives and is able to bring people from all
            walks of life together. This tree has many different branches, each
            with their own unique story and character.
          </p>
          <p>
            I need to create a function that counts the number of elements in
            the list. I have been able to sort the list and then count the
            numbers of each elements, but I do not know how to count the
            elements after I sorted it. I have searched the forum and found that
            you can use the count function to count the number of items in the
            array, but this did not help
          </p>
          <p>
            The problem is that the function needs to be executed in two
            different ways, depending on the parameter passed to it. If the
            parameter is 1, it should count the number of 1s in the given list,
            if the parameter is 0, it should count how many elements are not
            equal.
          </p>
        </div>
      </div>
      <div className="brand-dashboard__item half_2">
        <div className="brand-dashboard__top">
          <div className="brand-dashboard__top-title">Creative</div>
          <img
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots.svg/"
          />
        </div>
        <div
          className={`brand-dashboard__slider
            ${openedSidebar ? "short-slider" : ""}
          `}
        >
          <div className="brand-dashboard__slider-left">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.1568 5.69757C16.4894 6.00267 16.4894 6.49733 16.1568 6.80243L10.5469 11.9476C10.2142
                12.2527 10.2142 12.7473 10.5469 13.0524L16.1568 18.1976C16.4894 18.5027 16.4894 18.9973
                16.1568 19.3024C15.8241 19.6075 15.2848 19.6075 14.9521 19.3024L9.34222 14.1573C8.34426
                13.242 8.34426 11.758 9.34222 10.8427L14.9521 5.69757C15.2848 5.39248 15.8241 5.39248
                16.1568 5.69757Z"
                fill="#005F73"
              />
            </svg>
          </div>
          <div className="brand-dashboard__slider-right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.84324 19.3024C8.51059 18.9973 8.51059 18.5027 8.84324 18.1976L14.4531 13.0524C14.7858
                12.7473 14.7858 12.2527 14.4531 11.9476L8.84324 6.80243C8.51059 6.49733 8.51059 6.00267
                8.84324 5.69757C9.1759 5.39248 9.71524 5.39248 10.0479 5.69757L15.6578 10.8427C16.6557 11.758
                16.6557 13.242 15.6578 14.1573L10.0479 19.3024C9.71524 19.6075 9.1759 19.6075 8.84324
                19.3024Z"
                fill="#005F73"
              />
            </svg>
          </div>
          <div className="brand-dashboard__slider-items">
            <div className="brand-dashboard__slider-item left-slider-item"></div>
            <div className="brand-dashboard__slider-item main-slider-item"></div>
            <div className="brand-dashboard__slider-item right-slider-item"></div>
          </div>
          <div className="brand-dashboard__slider-buttons">
            <button>approve</button>
            <button>reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeDetails;
