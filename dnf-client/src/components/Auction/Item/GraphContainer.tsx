import React, { useState } from "react";
import styled from "styled-components";
import { TGraphData } from "../../../@types/Auction/AuctionItemTypes";
import Graph from "./Graph";

interface Props {
  data: TGraphData[];
}

const StyledBox = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledBtn = styled.button`
  background-color: var(--secondary-bg-color);
  border: 1px solid #999999;
  color: #bfbfbf;
  border-radius: 2px;
  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
  }
`;
const GraphContainer: React.FC<Props> = ({ data }) => {
  const [change, setChange] = useState<boolean>(true);
  const graphWeekDate = data?.map((x) => x.datetime);
  const graphWeekAvgPrice = data?.map((x) => x.averagePrice);
  const graphWeekRegNum = data?.map((x) => x.registeredNumber);
  const graphDayDate = graphWeekDate?.slice(0, 24);
  const graphDayAvgPrice = graphWeekAvgPrice?.slice(0, 24);
  const graphDayRegNum = graphWeekRegNum?.slice(0, 24);
  const handleClickWeek = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setChange(true);
  };
  const handleClickDay = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setChange(false);
  };

  return (
    <>
      <StyledBox>
        <StyledBtn onClick={handleClickWeek}>최근 7일</StyledBtn>
        <StyledBtn onClick={handleClickDay}>최근 24시간</StyledBtn>
      </StyledBox>
      <>
        {change ? (
          <Graph
            graphDataDate={graphWeekDate}
            graphDataAvgPrice={graphWeekAvgPrice}
            graphDataRegNum={graphWeekRegNum}
          />
        ) : (
          <Graph
            graphDataDate={graphDayDate}
            graphDataAvgPrice={graphDayAvgPrice}
            graphDataRegNum={graphDayRegNum}
          />
        )}
      </>
    </>
  );
};

export default GraphContainer;
