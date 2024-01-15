import styled from "styled-components";
import { IWeaponData } from "../../../../@types/maple/WeaponTypes";
import WeaponOptionBox from "./WeaponOptionBox";
import WeaponSummaryBox from "./WeaponSummaryBox";

const StyledBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 320px;
  height: 480px;
  top: 0;
  right: 56px;
  background-color: #2b2c2a;
  z-index: 3;
  border-radius: 16px;
  border: 2px solid #777;
`;

interface Props {
  data?: IWeaponData | undefined;
}

const WeaponBoxDetail: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <StyledBox>
      <WeaponSummaryBox data={data} />
      <WeaponOptionBox
        totalOption={data?.item_total_option}
        baseOption={data?.item_base_option}
        exceptionalOption={data?.item_exceptional_option}
        addOption={data?.item_add_option}
        starforceOption={data?.item_starforce_option}
        golden_hammer_flag={data?.golden_hammer_flag === "적용"}
        cuttable_count={data?.cuttable_count}
      />
    </StyledBox>
  );
};

export default WeaponBoxDetail;
