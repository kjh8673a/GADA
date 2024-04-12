import React, { useMemo } from "react";
import styled from "styled-components";
import { TSearchAuctionItem } from "../../../@types/SearchTypes";
import { useNavigate } from "react-router-dom";
import { ColorText } from "../../../style/CharacterStat";
import { ITEM_TYPE_COLOR } from "../../../@types/Character/CommonTypes";

interface Props {
  data: TSearchAuctionItem;
}

const StyledBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid #325c65;
  background-color: var(--secondary-bg-color);
  width: 32%;
  padding: 20px;
  gap: 15px;

  &:hover {
    border: 2px solid #fd9a19;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemImg = styled.img<{ $color: string }>`
  border: 1px solid ${(props) => props.$color};
  border-radius: 10px;
`;

const Tag = styled.div<{ $color: string }>`
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.$color};
  text-align: center;
`;

const AuctionSearchItem: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const elementsMemo = useMemo(() => {
    return (
      <>
        <Wrapper>
          <ItemImg
            src={data.itemImage}
            alt={"item image"}
            $color={ITEM_TYPE_COLOR[data.itemRarity]}
            width={40}
          />
          <ColorText color={ITEM_TYPE_COLOR[data.itemRarity]}>
            {data.itemName}
          </ColorText>
        </Wrapper>
        <Wrapper>
          <Tag $color={"#426775"}>{data.itemTypeDetail}</Tag>
          {data.inAuction && <Tag $color={"#7d3131"}>매물</Tag>}
        </Wrapper>
      </>
    );
  }, [data]);

  return (
    <StyledBox onClick={() => navigate(`/auction/item?itemId=${data.itemId}`)}>
      {elementsMemo}
    </StyledBox>
  );
};

export default AuctionSearchItem;
