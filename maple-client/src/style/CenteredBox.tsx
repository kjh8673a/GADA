import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  direction?: "column" | "row";
  clickHandler?: () => void;
}

interface CenteredDivProps {
  $direction: "column" | "row";
}

const CenteredDiv = styled.div<CenteredDivProps>`
  max-width: 1140px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.$direction};
  margin: 0 auto;
`;

const CenteredBox: React.FC<Props> = ({ children, direction = "column", clickHandler }) => {
  if (clickHandler) {
    return (
      <CenteredDiv $direction={direction} onClick={clickHandler}>
        {children}
      </CenteredDiv>
    );
  }

  return <CenteredDiv $direction={direction}>{children}</CenteredDiv>;
};

export default CenteredBox;

