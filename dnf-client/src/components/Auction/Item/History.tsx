import React from "react";
import styled from "styled-components";
import { THistoryItem } from "../../../@types/Auction/AuctionItemTypes";
import HistoryItem from "./HistoryItem";

interface Props {
  data: THistoryItem[];
}

const StyledBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  color: #e2e0e0;
  cursor: context-menu;
`;

const Header = styled.div`
  font-size: 1.2rem;
`;

const StyledTable = styled.div`
  box-sizing: border-box;
  border: 2px solid var(--secondary-bg-color);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
`;

const StyledTHead = styled.div`
  box-sizing: border-box;
  padding: 7px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: var(--secondary-bg-color);
`;

const History: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <Header>최근 거래 내역</Header>
      <div style={{ fontSize: "0.8rem"}}>- 최신순으로 최대 20개까지 보여줍니다.</div>
      <StyledTable>
        <StyledTHead>
          <div>거래 시간</div>
          <div>개수</div>
          <div>단위 가격</div>
          <div>거래 금액</div>
        </StyledTHead>
        {data?.map((v, i) => {
          return (
            <HistoryItem
              data={v}
              key={i}
              $borderTop={i < 1 ? "":"2px solid var(--secondary-bg-color)"}
            />
          );
        })}
      </StyledTable>
    </StyledBox>
  );
};

export default History;
