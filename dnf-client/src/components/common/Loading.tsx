import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const StyledBox = styled.div`
  color: white;
`;

const Loading: React.FC<Props> = ({ text }) => {
  return <StyledBox>{text}</StyledBox>;
};

export default Loading;
