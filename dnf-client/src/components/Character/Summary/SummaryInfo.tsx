import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterBasic } from "../../../atoms/characterState";
import ContentItem from "./ContentItem";
import ContentTopItem from "./ContentTopItem";
import useCharacter from "../../../hooks/useCharacter";

const StyledBox = styled.div`
  z-index: 2;
  min-width: 300px;
  min-height: 230px;
  background-color: rgba(64, 64, 64, 0.7);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px black solid;
  border-bottom: 1px black solid;
  color: #dbc68d;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(122, 122, 122, 0) 38.6%,
      rgba(0, 0, 0, 0.12) 100%
    ),
    #102c55;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #497d93;
  padding: 1px 0px;
`;

const Content = styled.div`
  margin: 10px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const UpdatedText = styled.div`
  color: gray;
  align-self: end;
  font-size: 0.8rem;
`;

const SummaryInfo = () => {
  const data = useRecoilValue(atomCharacterBasic);
  const { getTimeDiffer } = useCharacter();
  return (
    <StyledBox>
      <Header>내 정보</Header>
      <Content>
        <ContentTopItem characterName={data.characterName!} />
        <UpdatedText>{`최근 업데이트: ${getTimeDiffer(
          data.updatedTime!
        )}`}</UpdatedText>
        <ContentItem title={"명성"} value={data.fame ? data.fame.toString() : "0"} />
        <ContentItem title={"서버"} value={data.serverName!} />
        <ContentItem title={"직업 랭킹"} value={data.jobRanking! + "위"} />
        <ContentItem title={"모험단"} value={data.adventureName!} />
        <ContentItem title={"길드"} value={data.guildName!} />
      </Content>
    </StyledBox>
  );
};

export default SummaryInfo;
