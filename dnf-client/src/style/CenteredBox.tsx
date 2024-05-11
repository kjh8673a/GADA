import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  direction?: "column" | "row";
  clickHandler?: () => void;
  gap: number;
}

interface CenteredDivProps {
  $direction: "column" | "row";
  $gap: number;
}

const CenteredDiv = styled.div<CenteredDivProps>`
  max-width: 1140px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.$direction};
  padding: 10px 0px;
  gap: ${(props) => props.$gap}px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CenteredBox: React.FC<Props> = ({
  children,
  direction = "column",
  clickHandler,
  gap,
}) => {
  if (clickHandler) {
    return (
      <CenteredDiv $direction={direction} onClick={clickHandler} $gap={gap}>
        {children}
      </CenteredDiv>
    );
  }

  return (
    <CenteredDiv $direction={direction} $gap={gap}>
      {children}
    </CenteredDiv>
  );
};

export default CenteredBox;
