import React, { useEffect, useState } from "react";
import { useGuild } from "../../../hooks/maple/useGuild";
import { GuildMemberType } from "../../../@types/maple/GuildTypes";
import styled from "styled-components";
import Member from "../search/Member";
import FetchCharacterError from "../../common/FetchCharacterError";

interface Props {
  name: string | undefined;
  worldName: string | undefined;
}

const MemberContainer = styled.div`
  display: flex;
  margin: 20px auto 0;
  flex-wrap: wrap;
  max-width: 1140px;
  padding: 8px 0px 120px 0px;
  border-radius: 8px;
`;

const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const GuildMember: React.FC<Props> = ({ name, worldName }) => {
  const { getMember } = useGuild();
  const [member, setMember] = useState<GuildMemberType[] | undefined>();
  useEffect(() => {
    if (name && worldName) {
      getMember(name, worldName).then((res) => {
        if (res) {
          setMember(res);
        }
      });
    }
  }, [name, worldName, getMember, setMember]);

  if (member === undefined) return null;

  if (member.length === 0)
    return (
      <MemberContainer>
        <FetchCharacterError />
      </MemberContainer>
    );

  return (
    <MemberContainer>
      {member &&
        member.length > 0 &&
        member.map((_, index) => (
          <MemberBox key={index}>
            <Member member={member[index]} />
          </MemberBox>
        ))}
    </MemberContainer>
  );
};

export default GuildMember;

