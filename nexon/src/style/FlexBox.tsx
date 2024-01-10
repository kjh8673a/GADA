import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
`;

interface Props {
  children: React.ReactNode;
}

const FlexBox: React.FC<Props> = ({ children }) => {
  return <FlexDiv>{children}</FlexDiv>;
};

export default FlexBox;

