import React from "react";
import ComponentBox from "../../common/ComponentBox";
import Avatar from "./Avatar";
import { useRecoilValue } from "recoil";
import { atomCharacterAvatar } from "../../../atoms/characterState";
import Loading from "../../common/Loading";
import Creature from "./Creature";

const AvatarCreature = () => {
  const data = useRecoilValue(atomCharacterAvatar);
  return (
    <ComponentBox>
      {data ? (
        <>
          <Avatar />
          <Creature />
        </>
      ) : (
        <Loading
          text={
            "최근 1년이내 접속기록이 없는 캐릭터는 아바타&크리쳐를 조회할 수 없습니다."
          }
          play={false}
        />
      )}
    </ComponentBox>
  );
};

export default AvatarCreature;
