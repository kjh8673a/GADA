import styled from "styled-components";
import { ICharacterBasic } from "../../../../@types/maple/CharacterBasicTypes";
import BasicStatBox from "./BasicStatBox";

const StyledBox = styled.div`
  width: calc((100% - 64px - 64px) / 2);
  box-sizing: border-box;
  display: flex;
`;

const StyledImgBox = styled.img`
  width: 120px;
  height: 120px;
`;

interface Props {
  type: "left" | "right";
  data: ICharacterBasic | undefined;
}

const CharacterInfo: React.FC<Props> = ({ type, data }) => {
  return (
    <StyledBox>
      {type === "left" && (
        <BasicStatBox
          align="left"
          characterName={data?.character_name}
          characterClass={data?.character_class}
          worldName={data?.world_name}
          characterLevel={data?.character_level}
          combatPower={data?.combat_power}
        />
      )}
      <StyledImgBox
        src={data?.character_image || `${process.env.PUBLIC_URL}/assets/question-mark.png`}
        alt="character_image"
      />
      {type === "right" && (
        <BasicStatBox
          align="right"
          characterName={data?.character_name}
          characterClass={data?.character_class}
          worldName={data?.world_name}
          characterLevel={data?.character_level}
          combatPower={data?.combat_power}
        />
      )}
    </StyledBox>
  );
};

export default CharacterInfo;

