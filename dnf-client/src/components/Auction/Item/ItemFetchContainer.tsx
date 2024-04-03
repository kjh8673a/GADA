import React, { useEffect } from "react";
import styled from "styled-components";
import { TAuctionItem } from "../../../@types/Auction/AuctionItemTypes";
import Loading from "../../common/Loading";
import { useSetRecoilState } from "recoil";
import { atomAuctionItemState } from "../../../atoms/auctionState";

interface Props {
  data: { read(): TAuctionItem | undefined };
}

const Styled = styled.div``;

const ItemFetchContainer: React.FC<Props> = ({ data }) => {
  const setData = useSetRecoilState(atomAuctionItemState);
  useEffect(() => setData(data.read()), [data.read(), setData]);
  if (data.read()! === undefined) {
    return <Loading text="잘못된 접근입니다." play={false} />;
  }
  return <Styled>{data.read()!.data.itemName}</Styled>;
};

export default ItemFetchContainer;
