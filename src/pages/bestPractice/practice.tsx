import { BestPractices as IBestPractice } from "API";
import SinglePractice from "components/bestPractices/singlePractice";
import { getActiveBestPractice } from "hooks";
import { useState, useEffect, Fragment } from "react";
import "./practice.css";

export default function BestPractice() {
  const { getActivePractice, data, loading } = getActiveBestPractice();
  const [practices, setPractices] = useState<Array<IBestPractice | null>>([]);
  const [selectedPractice, setSelectedPractice] = useState<IBestPractice>();

  const handleClick = (id: string): void => {
    const selected = practices.find((e) => e?.id === id);
    if (selected) setSelectedPractice(selected);
  };

  useEffect(() => {
    getActivePractice({ variables: { active: "true" } });
  }, []);

  useEffect(() => {
    if (!loading && data?.[0]) setPractices(data);
  }, [data, loading]);

  return (
    <>
      <div className="campaign-brief-header-container">
        <div className="campaign-brief-details-text">Best practices</div>
        {selectedPractice && (
          <div
            className="back-btn"
            onClick={(): void => setSelectedPractice(undefined)}
          >
            <span className="back-btn-text">Back</span>
          </div>
        )}
      </div>
      {selectedPractice ? (
        <SinglePractice practice={selectedPractice} showDetails />
      ) : (
        <div className="best-practice-table">
          {practices.map((singlePractice, index) => {
            const key = `bestPractice---${singlePractice?.id || index}`;
            if (singlePractice)
              return (
                <SinglePractice
                  practice={singlePractice}
                  key={key}
                  onClick={handleClick}
                />
              );
            return <Fragment key={key} />;
          })}
        </div>
      )}
    </>
  );
}
