import styled from "styled-components";
import { ITitleDataType, IWeaponDataType } from "../../../../@types/maple/WeaponTypes";
import WeaponOptionBox from "./WeaponOptionBox";
import WeaponSummaryBox from "./WeaponSummaryBox";
import WeaponPotentialOptionBox from "./WeaponPotentialOptionBox";
import WeaponStarforce from "./WeaponStarforce";

const StyledBox = styled.div<{ $offsetX: number }>`
  position: absolute;
  box-sizing: border-box;
  width: 340px;
  bottom: 0;
  right: 56px;
  background-color: #2b2c2a;
  z-index: 10;
  border-radius: 16px;
  border: 2px solid #777;
  padding-bottom: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    left: calc(100% - ${(props) => props.$offsetX}px - 80%);
    bottom: 100%;
  }
`;

interface Props {
  data?: IWeaponDataType | null | undefined;
  title?: ITitleDataType | null | undefined;
  offsetX: number;
}

const WeaponBoxDetail: React.FC<Props> = ({ data, title, offsetX }) => {
  return (
    <StyledBox $offsetX={offsetX}>
      <WeaponStarforce starforce={data ? +data?.starforce : null} scrollFlag={data?.starforce_scroll_flag === "사용"} />
      <WeaponSummaryBox data={data} title={title} />
      <WeaponOptionBox
        item_equipment_part={data?.item_equipment_part || "칭호"}
        totalOption={data?.item_total_option}
        baseOption={data?.item_base_option}
        exceptionalOption={data?.item_exceptional_option}
        addOption={data?.item_add_option}
        etcOption={data?.item_etc_option}
        starforceOption={data?.item_starforce_option}
        golden_hammer_flag={data?.golden_hammer_flag === "적용"}
        cuttable_count={data?.cuttable_count}
      />
      <WeaponPotentialOptionBox
        title="잠재옵션"
        grade={data?.potential_option_grade}
        potential1={data?.potential_option_1}
        potential2={data?.potential_option_2}
        potential3={data?.potential_option_3}
      />
      <WeaponPotentialOptionBox
        title="추가 잠재옵션"
        grade={data?.additional_potential_option_grade}
        potential1={data?.additional_potential_option_1}
        potential2={data?.additional_potential_option_2}
        potential3={data?.additional_potential_option_3}
      />
    </StyledBox>
  );
};

export default WeaponBoxDetail;

