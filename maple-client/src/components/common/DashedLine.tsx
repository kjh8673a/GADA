import styled from "styled-components";

const StyledBox = styled.div`
  width: 100%;
  height: 1px;
  box-sizing: border-box;
  border-bottom: 1px dashed #777;
`;

const DashedLine = () => {
  return <StyledBox />;
};

export default DashedLine;
