import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import { ICharacterComparisonData } from "../../../../@types/maple/CharacterComparisionTypes";
import { useState } from "react";
import { TabNameType } from "../../../../@types/maple/ComparisonTabTypes";
import ComparisonStatus from "./ComparisonStatus";
import ComparisonWeapon from "./ComparisonWeapon";

const StyledBox = styled.div`
  width: 100%;
`;

interface Props {
  data: ICharacterComparisonData | undefined;
}

const ComparisonDetail: React.FC<Props> = ({ data }) => {
  const [tabName, setTabName] = useState<TabNameType>("STATUS");

  return (
    <StyledBox>
      <Navigation currTab={tabName} setTab={setTabName} />
      {tabName === "STATUS" && (
        <ComparisonStatus
          leftStat={data?.data?.left_character.character_stats}
          rightStat={data?.data?.right_character?.character_stats}
        />
      )}
      {tabName === "WEAPON" && (
        <ComparisonWeapon
          leftWeapons={data?.data?.left_character.character_item}
          rightWeapons={data?.data?.right_character.character_item}
        />
      )}
    </StyledBox>
  );
};

export default ComparisonDetail;

