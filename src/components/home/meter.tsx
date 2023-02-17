import { FC, useMemo, useState } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import * as S from "./styles";

const PercentageMapper = [
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
];
export const Meter: FC<ProfileProps> = () => {
  const [value] = useState(30);

  const { percentage, degree } = useMemo(
    () => PercentageMapper.find((e) => e.id === value) || PercentageMapper[0],
    [value]
  );
  return (
    <S.MeterWrapper>
      <S.Heading>Brand</S.Heading>

      <S.MeterBox>
        <S.MeterCanvas percentage={percentage} degree={degree}>
          {PercentageMapper.map((e) => (
            <S.MeterNumber className={e.className} key={e.id}>
              {e.id}
            </S.MeterNumber>
          ))}
        </S.MeterCanvas>

        <S.MeterValue>{value}%</S.MeterValue>
      </S.MeterBox>
    </S.MeterWrapper>
  );
};

export default withProfile(Meter);
