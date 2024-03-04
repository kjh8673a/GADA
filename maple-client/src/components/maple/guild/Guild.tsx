import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GuildBasicInfo } from "../../../@types/maple/GuildTypes";
import styled from "styled-components";
import GuildSkill from "./GuildSkill";
import GuildMember from "./GuildMember";
import GuildInfo from "./GuildInfo";
import { useGuild } from "../../../hooks/maple/useGuild";

const Container = styled.div`
  display: flex;
  border: 1px solid;
  max-width: 1140px;
  border-style: inset;
  margin: 10px auto 0;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
`;

const GuildExplain = styled.div`
  display: flex;
  width: 100%;
  margin: 4px;
`;

const GuildDescription = styled.div`
  display: block;
  width: 50%;
`;
const Explain = styled.div`
  padding: 4px 0px 4px 8px;
`;
const GuildMemberList = styled.div`
  display: flex;
  max-width: 1140px;
`;

const NoLineContainer = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 20px auto 0;
  flex-direction: column;
  justify-content: center;
`;

const GuildSkillAndPoint = styled.div`
  display: block;
  width: 50%;
`;

const Guild = () => {
  const { getGuild } = useGuild();
  const { worldName, name } = useParams<{ worldName?: string; name?: string }>();
  const [guildInfo, setGuildInfo] = useState<GuildBasicInfo>();

  useEffect(() => {
    if (worldName && name) {
      getGuild(name, worldName).then((res) => {
        setGuildInfo(res);
      });
    }
  }, [worldName, name]);

  return (
    <>
      <Container>
        <GuildExplain>
          <GuildDescription>
            <Explain>
              '{guildInfo?.world_name}' 서버의 {guildInfo?.guild_name} 길드
            </Explain>
            <Explain>길드레벨 : {guildInfo?.guild_level}</Explain>
            <Explain>길드 마스터 : {guildInfo?.guild_master_name}</Explain>
            <Explain>길드원수 : {guildInfo?.guild_member_count}</Explain>
          </GuildDescription>
          <GuildSkillAndPoint>
            <Explain>길드 포인트 : {guildInfo?.guild_point}</Explain>
            <Explain>
              길드 노블 스킬
              <GuildSkill skill={guildInfo?.guild_noblesse_skill} />
            </Explain>
          </GuildSkillAndPoint>
        </GuildExplain>
      </Container>
      <NoLineContainer>
        <GuildMemberList>길드원 목록</GuildMemberList>
        <GuildInfo />
      </NoLineContainer>
      <GuildMember name={guildInfo?.guild_name} worldName={guildInfo?.world_name} />
    </>
  );
};

export default Guild;
