import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterStat } from "../../../atoms/characterState";
import { MAIN_STAT_ELEMENT_LIST, TCharacterStat } from "../../../@types/CharacterTypes";

interface Props {
  data: TCharacterStat;
}

const StyledBox = styled.span`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 10px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
`;

const StatIcon = styled.img`
  margin-right: 5px;
  align-self: center;
`;

const Text = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;

const MainStatElement: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <TitleWrapper>
        <StatIcon
          src={"/assets/statIcon/main_stat_element.png"}
          alt={"stat icon"}
        />
        <Text color={"#a0844b"}>{"공격 속성"}</Text>
      </TitleWrapper>
      <Text color={"#78C82F"}>
        {MAIN_STAT_ELEMENT_LIST.map((v, i) => {
          return v[0] + `(${data.status![v]})${i < 3 ? "/" : ""}`;
        })}
      </Text>
    </StyledBox>
  );
};

export default MainStatElement;
