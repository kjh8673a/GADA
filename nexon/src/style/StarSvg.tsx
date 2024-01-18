import styled from "styled-components";

const StyledSvg = styled.svg``;

interface Props {
  size?: number;
  fill?: string;
}

const StarSvg: React.FC<Props> = ({ size = 16, fill = "#fff" }) => {
  return (
    <StyledSvg width={size} height={size} fill={fill}>
      <use href={`${process.env.PUBLIC_URL}/assets/star.svg#star`} />
    </StyledSvg>
  );
};

export default StarSvg;

