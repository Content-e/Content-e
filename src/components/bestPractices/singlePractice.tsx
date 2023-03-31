import { useHistory } from "react-router-dom";
import "./bestPractices.css";
import { AuthRoutes } from "utils";
import { FC, useEffect, useState } from "react";
import { BestPractices as IBestPractice } from "API";
import { Storage } from "aws-amplify";
import classNames from "classnames";

interface Props {
  practice: IBestPractice;
  showDots?: boolean;
  showDetails?: boolean;
  onClick?: (id: string) => void;
}
export const SinglePractice: FC<Props> = ({
  practice,
  showDots,
  onClick,
  showDetails,
}) => {
  const [practiceImage, setPracticeImage] = useState<string>();
  const history = useHistory();

  const getImagePath = async (): Promise<void> => {
    const { urlPath } = practice;
    if (urlPath) {
      try {
        const url = await Storage.get(urlPath);
        fetch(url).then((res) => {
          if (res.status === 200) setPracticeImage(url);
        });
      } catch (err) {
        console.log("Error", err);
        setPracticeImage(undefined);
      }
    }
  };

  useEffect(() => {
    getImagePath();
  }, [practice]);

  return (
    <div
      className={classNames("best-practices-container", {
        "best-practices-full": showDetails,
      })}
      onClick={(): void => onClick?.(practice.id)}
    >
      <div
        className={classNames("best-practices-wrapper", {
          "best-practices-full-wrapper": showDetails,
        })}
      >
        <div className="best-practices-header">
          <div className="best-practices-label">{practice.headLine}</div>
          {showDots && (
            <img
              onClick={(): void => history.push(AuthRoutes.BestPractices)}
              src="/images/morevert.svg"
            />
          )}
        </div>
        <div className="best-practice-body">
          <div className="best-practice-image-wrapper">
            <div className="best-practice-image">
              {practiceImage && <img src={practiceImage} alt="pratice image" />}
            </div>
          </div>
          <div className="best-practice-description">
            {practice.description.replaceAll(/<\/?[^>]+(>|$)/gi, "")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePractice;
