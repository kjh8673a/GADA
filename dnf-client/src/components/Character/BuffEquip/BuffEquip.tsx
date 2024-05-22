import React from "react";
import ComponentBox from "../../common/ComponentBox";
import { useRecoilValue } from "recoil";
import { atomCharacterBuffEquip } from "../../../atoms/characterState";
import BuffSkillInfo from "./BuffSkillInfo";
import Loading from "../../common/Loading";
import BuffEquipItem from "./BuffEquipItem";
import BuffAvartarItem from "./BuffAvartarItem";
import BuffCreatureItem from "./BuffCreatureItem";

const BuffEquip = () => {
  const data = useRecoilValue(atomCharacterBuffEquip);
  return (
    <ComponentBox flexDirection={"column"}>
      {data ? (
        data.skillInfo?.option?.level ? (
          <>
            <BuffSkillInfo skillInfo={data.skillInfo} />
            {data.equipment?.map((v, i) => {
              return <BuffEquipItem key={i} data={v} />;
            })}
            {data.avatar?.map((v, i) => {
              return <BuffAvartarItem key={i} data={v} />;
            })}
            {data.creature?.map((v, i) => {
              return <BuffCreatureItem key={i} data={v} />;
            })}
          </>
        ) : (
          <Loading
            text={
              "최근 1년이내 접속기록이 없는 캐릭터는 버프 강화 장비를 조회할 수 없습니다."
            }
            play={false}
          />
        )
      ) : (
        <Loading text={"장착된 버프 강화 장비가 없습니다."} play={false} />
      )}
    </ComponentBox>
  );
};

export default BuffEquip;
