import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ColorText } from "../../style/CharacterStat";
import { TPopularItem } from "../../@types/Auction/PopularItemTypes";
import { ITEM_TYPE_COLOR } from "../../@types/Character/CommonTypes";

interface Props {
  data: { read(): TPopularItem | undefined };
}

const StyledBox = styled.div`
  box-sizing: border-box;
  width: 350px;
  padding: 10px;
  gap: 5px;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  font-weight: bold;
`;

const PopularItem = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  gap: 10px;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-bg-color);
  }
`;

const Rank = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  background-color: var(--primary-bg-color);
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const ItemImg = styled.img``;

const PopularItems: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const itemList = data.read()?.data?.ranking.map((v, i) => {
    return (
      <PopularItem
        key={i}
        onClick={() => navigate(`/auction/item?itemId=${v.itemId}`)}
      >
        <Rank>{v.rank}</Rank>
        <ItemImg src={v.itemImage} alt={"item image"} />
        <ColorText color={ITEM_TYPE_COLOR[v.itemRarity]}>
          {v.itemName}
        </ColorText>
      </PopularItem>
    );
  });
  return (
    <StyledBox>
      <Header>최근 3시간 인기 검색 아이템</Header>
      {itemList}
    </StyledBox>
  );
};

export default PopularItems;
