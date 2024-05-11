import React from 'react';
import styled from 'styled-components';
import RegisteredListItem from './RegisteredListItem';
import { TRegisteredItem } from '../../../@types/Auction/AuctionItemTypes';

interface Props {
  data: TRegisteredItem[];
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

const RegisteredList: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <Header>경매장 매물</Header>
      <div style={{ fontSize: "0.8rem"}}>- 등록 시간 기준 24시간이 지나면 유찰됩니다.</div>
      <StyledTable>
        <StyledTHead>
          <div>등록 시간</div>
          <div>개수</div>
          <div>단위 가격</div>
          <div>금액</div>
        </StyledTHead>
        {data?.map((v, i) => {
          return (
            <RegisteredListItem
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

export default RegisteredList;