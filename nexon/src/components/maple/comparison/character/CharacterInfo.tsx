import styled from "styled-components";
import { ICharacterBasic } from "../../../../@types/maple/CharacterBasicTypes";

const StyledBox = styled.div`
  width: calc((100% - 64px - 64px) / 2);
  box-sizing: border-box;
  display: flex;
`;

const StyledStatBox = styled.p`
  width: 100%;
  background-color: black;
  margin: 0;
  padding: 24px 16px;
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
  console.log(data);

  return (
    <StyledBox>
      {type === "left" && <StyledStatBox />}
      <StyledImgBox
        src={data?.character_image || `${process.env.PUBLIC_URL}/assets/question-mark.png`}
        alt="character_image"
      />
      {type === "right" && <StyledStatBox />}
    </StyledBox>
  );
};

export default CharacterInfo;

