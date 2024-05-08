import React from "react";
import styled from "styled-components";
import { THistoryItem } from "../../../@types/Auction/AuctionItemTypes";

interface Props {
  data: THistoryItem;
  $borderTop: string;
}

const StyledBox = styled.div<{ $borderTop: string }>`
  box-sizing: border-box;
  padding: 7px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-top: ${(props) => props.$borderTop};
  align-items: center;

  &:hover{
    color: #fd9a19;
  }
`;

const HistoryItem: React.FC<Props> = ({ data, $borderTop }) => {
  return (
    <StyledBox $borderTop={$borderTop}>
      <div>{data.soldDate.slice(2,)}</div>
      <div>{Number(data.count).toLocaleString("ko-kr")}</div>
      <div>{Number(data.unitPrice).toLocaleString("ko-kr")}</div>
      <div>{Number(data.price).toLocaleString("ko-kr")}</div>
    </StyledBox>
  );
};

export default HistoryItem;
