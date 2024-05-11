<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomtalismanInfo } from "../../../atoms/talismanItemState";
import ItemInfoExplain from "./ItemInfoExplain";

interface StyledProps {
  $rarityColor: boolean;
=======
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomtalismanInfo } from "../../../atoms/ItemInfoState";
import ItemInfoExplain from "./ItemInfoExplain";
import { ITEM_TYPE_COLOR } from "../../../@types/Character/CommonTypes";
import Loading from "../../common/Loading";

interface StyledProps {
  $rarityColor: string;
>>>>>>> dnf/release
}

const StyledBox = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
  background-color: black;
  border-radius: 5px;
  margin-top: 3%;
  margin-bottom: 3%;
<<<<<<< HEAD
=======

  @media (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
>>>>>>> dnf/release
`;
const NameBox = styled.div`
  position: relative;
  display: flex;
  padding-top: 2%;
  margin-left: 1%;
  padding-left: 2%;
  margin-right: 1%;
  padding-bottom: 2%;
  height: 12%;
  border-bottom: 1px solid #455a64;
`;
<<<<<<< HEAD
const ItemImg = styled.img`
  position: relative;
  transform: scale(0.8);
  border: 2px solid #b727ba;
=======
const ItemImg = styled.img<StyledProps>`
  position: relative;
  transform: scale(0.8);
  border: 2px solid ${(props) => props.$rarityColor};
>>>>>>> dnf/release

  border-radius: 1px;
`;
const NameDiv = styled.div<StyledProps>`
  margin-left: 2%;
  margin-top: 1%;
<<<<<<< HEAD

  color: ${(props) => (props.$rarityColor ? "white" : "#b727ba")};
`;
const RarityDiv = styled.div<StyledProps>`
  text-align: right;
  color: ${(props) => (props.$rarityColor ? "white" : "#b727ba")};
=======
  color: ${(props) => props.$rarityColor};
`;
const RarityDiv = styled.div<StyledProps>`
  text-align: right;
  color: ${(props) => props.$rarityColor};
>>>>>>> dnf/release
`;
const RarityBox = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  padding-top: 2%;
  padding-bottom: 2%;
  line-height: 130%;
  border-bottom: 1px solid #455a64;
`;

<<<<<<< HEAD
=======
const AddTalisman = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 3%;
  border-top: 1px solid #455a64;
`;

>>>>>>> dnf/release
const ItemBox = styled.div`
  text-align: right;
  color: #70694c;
`;

const ItemInfo = () => {
  const data = useRecoilValue(atomtalismanInfo);
<<<<<<< HEAD
  const [rarity, setRarity] = useState<boolean>(true);
  useEffect(() => {
    if (data.detail?.itemRarity === "유니크") {
      setRarity(false);
    }
  }, [data]);
  return (
    <StyledBox>
      {data.itemId === undefined ? (
        <StyledBox></StyledBox>
      ) : (
        <>
          <NameBox>
            <ItemImg src={data.itemImage}></ItemImg>
            <NameDiv $rarityColor={rarity}>{data.itemName}</NameDiv>
          </NameBox>
          <RarityBox>
            <RarityDiv $rarityColor={rarity}>
=======
  const rarityColor = ITEM_TYPE_COLOR[data.detail?.itemRarity!];
  return (
    <StyledBox>
      {data.itemId === undefined ? (
        <Loading text={"아이템을 클릭해주세요."} play={false} />
      ) : (
        <>
          <NameBox>
            <ItemImg src={data.itemImage} $rarityColor={rarityColor}></ItemImg>
            <NameDiv $rarityColor={rarityColor}>{data.itemName}</NameDiv>
          </NameBox>
          <RarityBox>
            <RarityDiv $rarityColor={rarityColor}>
>>>>>>> dnf/release
              {data.detail?.itemRarity}
            </RarityDiv>
            <ItemBox>레벨제한 {data.detail?.itemAvailableLevel}</ItemBox>
          </RarityBox>
          <ItemInfoExplain
            value={data.detail?.itemExplainDetail}
<<<<<<< HEAD
          ></ItemInfoExplain>
=======
            add={false}
          ></ItemInfoExplain>
          {data.detail?.talismanInfo! != null ? (
            <AddTalisman>
              <ItemInfoExplain
                value={data.detail?.talismanInfo.explain}
                add={true}
              ></ItemInfoExplain>
            </AddTalisman>
          ) : (
            ""
          )}
>>>>>>> dnf/release
        </>
      )}
    </StyledBox>
  );
};

export default ItemInfo;
