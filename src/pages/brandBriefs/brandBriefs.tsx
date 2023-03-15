import BrandBriefTable from "components/brandBriefTable/brandBriefTable";
import { FC, useEffect, useMemo, useState } from "react";
import { BrandBriefProps, withBrandBriefs } from "state/brandBrief";
import "./brandBriefs.css";

export const BrandBriefs: FC<BrandBriefProps> = ({ data }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (data) setInput("");
  }, [data]);

  const filteredData = useMemo(
    () => data?.filter((e) => e?.BriefName?.toLowerCase().includes(input)),
    [data, input]
  );

  return (
    <div>
      <div className="brand-table-label">Brand briefs</div>
      <div className="brand-table-container">
        <div className="brand-brief-label-container">
          <input
            className="brand-search"
            placeholder="Search..."
            value={input}
            onChange={(e): void => setInput(e.target.value)}
          />
          <img src="/images/add-brief.svg" />
        </div>
        <BrandBriefTable data={filteredData} />
      </div>
    </div>
  );
};

export default withBrandBriefs(BrandBriefs);
