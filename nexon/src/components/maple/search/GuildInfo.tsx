import React, { useEffect } from "react";
import { GuildType } from "../../../@types/maple/GuildTypes";
import styled from "styled-components";
import DashedLine from "../../common/DashedLine";
import GuildSkill from "../guild/GuildSkill";
import GuildMember from "../guild/GuildMember";

interface Props {
  guild: GuildType | undefined;
}

const Container = styled.div`
  display: flex;
  border: 1px solid;
  border-style: inset;
  margin: 10px 0px 0px 0px;
  flex-direction: column;
`;

const GuildExplain = styled.div`
  padding: 8px;
  display: flex;
  width: 100%;
`;

const GuildDescription = styled.div`
  display: block;
  width: 50%;
`;

const GuildSkillAndPoint = styled.div`
  display: block;
  width: 50%;
`;

const GuildInfo: React.FC<Props> = ({ guild }) => {
  useEffect(() => {
    console.log(guild);
  }, [guild]);
  return (
    <Container>
      <GuildExplain>
        <GuildDescription>
          <div>
            '{guild?.world_name}' 서버의 {guild?.guild_name} 길드
          </div>
          <div>길드레벨 : {guild?.guild_level}</div>
          <div>길드 마스터 : {guild?.guild_master_name}</div>
          <div>길드원수 : {guild?.guild_member_count}</div>
        </GuildDescription>
        <GuildSkillAndPoint>
          <div>길드 포인트 : {guild?.guild_point}</div>
          <div>
            길드 노블 스킬
            {/* <GuildSkill skill={guild?.guild_noblesse_skill} /> */}
          </div>
        </GuildSkillAndPoint>
      </GuildExplain>
      <DashedLine />
      {/* <GuildMember name={guild?.guild_name} worldName={guild?.world_name} /> */}
    </Container>
  );
};

export default GuildInfo;

