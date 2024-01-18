import styled from "styled-components";
import StarSvg from "../../../../style/StarSvg";

const StyledBox = styled.div`
  width: 100%;
  padding-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledImgBlock = styled.div`
  display: flex;
  margin: 0 4px;
`;

interface Props {
  starforce: number | null | undefined;
  scrollFlag: boolean | undefined;
}

const WeaponStarforce: React.FC<Props> = ({ starforce, scrollFlag }) => {
  if (!starforce) return null;
  const starGroup = [];

  for (let i = 0; i < 5; i++) {
    starGroup.push(
      <StyledImgBlock>
        <StarSvg fill={i * 5 + 1 <= +starforce ? (scrollFlag ? "rgb(36, 221, 250)" : "yellow") : undefined} />
        <StarSvg fill={i * 5 + 2 <= +starforce ? (scrollFlag ? "rgb(36, 221, 250)" : "yellow") : undefined} />
        <StarSvg fill={i * 5 + 3 <= +starforce ? (scrollFlag ? "rgb(36, 221, 250)" : "yellow") : undefined} />
        <StarSvg fill={i * 5 + 4 <= +starforce ? (scrollFlag ? "rgb(36, 221, 250)" : "yellow") : undefined} />
        <StarSvg fill={i * 5 + 5 <= +starforce ? (scrollFlag ? "rgb(36, 221, 250)" : "yellow") : undefined} />
      </StyledImgBlock>
    );
  }

  return <StyledBox>{starGroup}</StyledBox>;
};

export default WeaponStarforce;

