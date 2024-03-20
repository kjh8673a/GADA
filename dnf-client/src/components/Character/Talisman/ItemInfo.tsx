import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomtalismanInfo } from "../../../atoms/talismanItemState";
import ItemInfoExplain from "./ItemInfoExplain";

interface StyledProps {
  $rarityColor: boolean;
}

const StyledBox = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
  background-color: black;
  border-radius: 5px;
  margin-top: 3%;
  margin-bottom: 3%;
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
const ItemImg = styled.img`
  position: relative;
  transform: scale(0.8);
  border: 2px solid #b727ba;

  border-radius: 1px;
`;
const NameDiv = styled.div<StyledProps>`
  margin-left: 2%;
  margin-top: 1%;

  color: ${(props) => (props.$rarityColor ? "white" : "#b727ba")};
`;
const RarityDiv = styled.div<StyledProps>`
  text-align: right;
  color: ${(props) => (props.$rarityColor ? "white" : "#b727ba")};
`;
const RarityBox = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  padding-top: 2%;
  padding-bottom: 2%;
  line-height: 130%;
  border-bottom: 1px solid #455a64;
`;

const ItemBox = styled.div`
  text-align: right;
  color: #70694c;
`;

const ItemInfo = () => {
  const data = useRecoilValue(atomtalismanInfo);
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
              {data.detail?.itemRarity}
            </RarityDiv>
            <ItemBox>레벨제한 {data.detail?.itemAvailableLevel}</ItemBox>
          </RarityBox>
          <ItemInfoExplain
            value={data.detail?.itemExplainDetail}
          ></ItemInfoExplain>
        </>
      )}
    </StyledBox>
  );
};

export default ItemInfo;
