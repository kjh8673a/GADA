import React from "react";
import styled from "styled-components";
import { TSearchAuction } from "../../../@types/SearchTypes";
import Loading from "../../common/Loading";
import AuctionSearchItem from "./AuctionSearchItem";

interface Props {
  data: { read(): TSearchAuction | undefined };
  input: string;
}

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const AuctionSearchFetchContainer: React.FC<Props> = ({ data, input }) => {
  if (data.read()!.data!.items.length > 0) {
    return (
      <StyledBox>
        {data.read()!.data!.items.map((v, i) => {
          return <AuctionSearchItem key={i} data={v} />;
        })}
      </StyledBox>
    );
  } else {
    return (
      <Loading text={`"${input}" 에 대한 검색결과가 없습니다.`} play={false} />
    );
  }
};

export default AuctionSearchFetchContainer;
