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
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.$direction};
  gap: 15px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CenteredBox: React.FC<Props> = ({
  children,
  direction = "column",
  clickHandler,
}) => {
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
