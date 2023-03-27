import "./bestPractices.css";
import { FC, Fragment, useEffect, useState } from "react";
import { getActiveBestPractice } from "hooks";
import { BestPractices as IBestPractice } from "API";
import SinglePractice from "./singlePractice";

export const BestPractices: FC = () => {
  const { getActivePractice, data, loading } = getActiveBestPractice();
  const [practice, setPractice] = useState<IBestPractice>();

  useEffect(() => {
    getActivePractice({ variables: { active: "true" } });
  }, []);

  useEffect(() => {
    if (!loading && data?.[0]) setPractice(data[0]);
  }, [data, loading]);

  if (practice) return <SinglePractice practice={practice} showDots />;
  return <Fragment />;
};

export default BestPractices;
