import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterBasic } from "../../../atoms/characterState";
import ContentItem from "./ContentItem";
import ContentTopItem from "./ContentTopItem";
import useCharacter from "../../../hooks/useCharacter";
import { DnfHeader, Line } from "../../../style/dnfContainer";

const StyledBox = styled.div`
  z-index: 2;
  min-width: 300px;
  min-height: 230px;
  background-color: rgba(64, 64, 64, 0.7);
  display: flex;
  flex-direction: column;
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
      <DnfHeader>내 정보</DnfHeader>
      <Content>
        <ContentTopItem characterName={data.characterName!} />
        <UpdatedText>{`최근 업데이트: ${getTimeDiffer(
          data.updatedTime!
        )}`}</UpdatedText>
        <Line />
        <ContentItem
          title={"명성"}
          value={data.fame ? data.fame.toString() : "0"}
        />
        <ContentItem title={"서버"} value={data.serverName!} />
        <ContentItem title={"직업 랭킹"} value={data.jobRanking! + "위"} />
        <ContentItem title={"모험단"} value={data.adventureName!} />
        <ContentItem title={"길드"} value={data.guildName!} />
      </Content>
    </StyledBox>
  );
};

export default SummaryInfo;
