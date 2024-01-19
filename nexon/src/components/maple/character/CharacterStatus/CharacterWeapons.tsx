import styled from "styled-components";
import WeaponBox from "./WeaponBox";

import { IWeaponDataType, IWeaponTypes, WEAPON_SLOT_LIST } from "../../../../@types/maple/WeaponTypes";
import { voidStrToCamelCase } from "../../../../hooks/commonUtils";
import { useCharacterData } from "../../../../hooks/maple/useCharacterData";
import { useEffect, useMemo } from "react";
import { userNickName } from "../../../../atoms/maple/characterName";
import { useRecoilValue } from "recoil";
import { atomCharacterWeapon } from "../../../../atoms/maple/characterWeaponState";

const StyledBox = styled.div`
  width: 320px;
  box-sizing: border-box;
  padding: 8px;
  background-color: #3d454d;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CharacterWeapons = () => {
  const { getCharacterWeapons } = useCharacterData();
  const characterName = useRecoilValue<string>(userNickName);
  const myWeapons = useRecoilValue<IWeaponTypes>(atomCharacterWeapon);

  useEffect(() => {
    getCharacterWeapons(characterName ? characterName : "도적");
  }, [getCharacterWeapons]);

  const WEAPONS = useMemo(() => new Map<string, IWeaponDataType>(), [myWeapons]);

  myWeapons?.item?.item_equipment.forEach((item: IWeaponDataType) => {
    const slot = voidStrToCamelCase(item.item_equipment_slot);
    if (WEAPON_SLOT_LIST.indexOf(slot) >= 0) {
      WEAPONS.set(slot, item);
    }
  });

  return (
    <StyledBox>
      {!myWeapons && "조회된 장비가 없습니다."}
      {myWeapons && (
        <>
          {/* 첫 줄 */}
          <WeaponBox data={WEAPONS.get("반지4")} />
          <WeaponBox />
          <WeaponBox data={WEAPONS.get("모자")} />
          <WeaponBox />
          <WeaponBox data={WEAPONS.get("엠블렘")} />
          {/* 둘째 줄 */}
          <WeaponBox data={WEAPONS.get("반지3")} />
          <WeaponBox data={WEAPONS.get("펜던트")} />
          <WeaponBox data={WEAPONS.get("얼굴장식")} />
          <WeaponBox />
          <WeaponBox data={WEAPONS.get("뱃지")} />
          {/* 셋째 줄 */}
          <WeaponBox data={WEAPONS.get("반지2")} />
          <WeaponBox data={WEAPONS.get("펜던트2")} />
          <WeaponBox data={WEAPONS.get("눈장식")} />
          <WeaponBox data={WEAPONS.get("귀고리")} />
          <WeaponBox data={WEAPONS.get("훈장")} />
          {/* 넷째 줄 */}
          <WeaponBox data={WEAPONS.get("반지1")} />
          <WeaponBox data={WEAPONS.get("무기")} />
          <WeaponBox data={WEAPONS.get("상의")} />
          <WeaponBox data={WEAPONS.get("어깨장식")} />
          <WeaponBox data={WEAPONS.get("보조무기")} />
          {/* 다섯째 줄 */}
          <WeaponBox data={WEAPONS.get("포켓_아이템")} />
          <WeaponBox data={WEAPONS.get("벨트")} />
          <WeaponBox data={WEAPONS.get("하의")} />
          <WeaponBox data={WEAPONS.get("장갑")} />
          <WeaponBox data={WEAPONS.get("망토")} />
          {/* 여섯째 줄 */}
          <WeaponBox title={myWeapons.item?.title} />
          <WeaponBox />
          <WeaponBox data={WEAPONS.get("신발")} />
          <WeaponBox />
          <WeaponBox data={WEAPONS.get("기계_심장")} />
        </>
      )}
    </StyledBox>
  );
};

export default CharacterWeapons;

