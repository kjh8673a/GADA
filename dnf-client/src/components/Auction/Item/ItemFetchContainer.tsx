import React, { useEffect, useState } from "react";
import { TAuctionItem } from "../../../@types/Auction/AuctionItemTypes";
import Loading from "../../common/Loading";
import History from "./History";
import RegisteredList from "./RegisteredList";
import styled from "styled-components";
import ItemHeader from "./ItemHeader";

interface Props {
  data: { read(): TAuctionItem | undefined };
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;

const ItemFetchContainer: React.FC<Props> = ({ data }) => {
  const [auctionData, setAuctionData] = useState<TAuctionItem>();
  useEffect(() => setAuctionData(data.read()), [data.read(), setAuctionData]);
  if (data.read()! === undefined) {
    return <Loading text="잘못된 접근입니다." play={false} />;
  }
  return (
    <>
      <ItemHeader itemName={auctionData?.data.itemName!} itemImage={auctionData?.data.itemImage!} itemRarity={auctionData?.data.itemRarity!}/>
      <Wrapper>
        <History data={auctionData?.data.history!} />
        <RegisteredList data={auctionData?.data.registeredList!} />
      </Wrapper>
    </>
  );
};

export default ItemFetchContainer;
