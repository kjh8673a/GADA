import styled from "styled-components";
import { IWeaponData } from "../../../../@types/maple/WeaponTypes";
import WeaponOptionBox from "./WeaponOptionBox";
import WeaponSummaryBox from "./WeaponSummaryBox";
import WeaponPotentialOptionBox from "./WeaponPotentialOptionBox";

const StyledBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 340px;
  top: 0;
  right: 56px;
  background-color: #2b2c2a;
  z-index: 3;
  border-radius: 16px;
  border: 2px solid #777;
  padding-bottom: 8px;
`;

interface Props {
  data?: IWeaponData | undefined;
}

const WeaponBoxDetail: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <WeaponSummaryBox data={data} />
      <WeaponOptionBox
        item_equipment_part={data?.item_equipment_part}
        totalOption={data?.item_total_option}
        baseOption={data?.item_base_option}
        exceptionalOption={data?.item_exceptional_option}
        addOption={data?.item_add_option}
        starforceOption={data?.item_starforce_option}
        golden_hammer_flag={data?.golden_hammer_flag === "적용"}
        cuttable_count={data?.cuttable_count}
      />
      <WeaponPotentialOptionBox
        title="잠재옵션"
        potential1={data?.potential_option_1}
        potential2={data?.potential_option_2}
        potential3={data?.potential_option_3}
      />
      <WeaponPotentialOptionBox
        title="추가 잠재옵션"
        potential1={data?.additional_potential_option_1}
        potential2={data?.additional_potential_option_2}
        potential3={data?.additional_potential_option_3}
      />
    </StyledBox>
  );
};

export default WeaponBoxDetail;

