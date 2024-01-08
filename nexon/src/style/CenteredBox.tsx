import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  clickHandler?: () => void;
}

const CenteredDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CenteredBox: React.FC<Props> = ({ children, clickHandler }) => {
  if (clickHandler) {
    return <CenteredDiv onClick={clickHandler}>{children}</CenteredDiv>;
  }

  return <CenteredDiv>{children}</CenteredDiv>;
};

export default CenteredBox;

