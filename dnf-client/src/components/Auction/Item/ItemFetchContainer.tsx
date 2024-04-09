import React, { useEffect } from "react";
import styled from "styled-components";
import { TAuctionItem } from "../../../@types/Auction/AuctionItemTypes";
import Loading from "../../common/Loading";
import { useRecoilState } from "recoil";
import { atomAuctionItemState } from "../../../atoms/auctionState";
import History from "./History";

interface Props {
  data: { read(): TAuctionItem | undefined };
}

const ItemFetchContainer: React.FC<Props> = ({ data }) => {
  const [itemData, setItemData] = useRecoilState(atomAuctionItemState);
  useEffect(() => setItemData(data.read()), [data.read(), setItemData]);
  if (data.read()! === undefined) {
    return <Loading text="잘못된 접근입니다." play={false} />;
  }
  return <>{data.read()!.data.itemName}
  <History data={itemData?.data.history!}/>
  </>;
};

export default ItemFetchContainer;
