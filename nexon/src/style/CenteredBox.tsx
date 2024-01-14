import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  clickHandler?: () => void;
}

const CenteredDiv = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const CenteredBox: React.FC<Props> = ({ children, clickHandler }) => {
  if (clickHandler) {
    return <CenteredDiv onClick={clickHandler}>{children}</CenteredDiv>;
  }

  return <CenteredDiv>{children}</CenteredDiv>;
};

export default CenteredBox;

