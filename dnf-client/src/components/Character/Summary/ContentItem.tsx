import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  value: string;
}

interface StyledProps {
  color: string;
}

const Wrapper = styled.div`
  display: flex;
`;

const StyledBox = styled.div<StyledProps>`
  width: 50%;
  color: ${(props) => props.color};
`;

const ContentItem: React.FC<Props> = ({ title, value }) => {
  return (
    <Wrapper>
      <StyledBox color={"#dbc68d"}>{title}</StyledBox>
      <StyledBox color={"#78C82F"}>{value}</StyledBox>
    </Wrapper>
  );
};

export default ContentItem;
