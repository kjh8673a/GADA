import React from "react";
import styled from "styled-components";
import { MATCH_COLOR } from "../@types/maple/WeaponTypes";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const StyledLogo = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 4px;
`;

interface StyledTitleProps {
  $highlight: string | undefined;
}

const StyledTitle = styled.h3<StyledTitleProps>`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => (props.$highlight ? MATCH_COLOR[props.$highlight] : "#fff")};
`;

interface Props {
  title: string;
  highlight?: string;
  logo?: string;
}

const OptionTitle: React.FC<Props> = ({ title, highlight, logo }) => {
  return (
    <StyledBox>
      <StyledLogo src={logo} />
      <StyledTitle $highlight={highlight}>{title}</StyledTitle>
    </StyledBox>
  );
};

export default OptionTitle;
