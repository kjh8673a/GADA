import React from "react";
import styled from "styled-components";
import { TGraphData } from "../../../@types/Auction/AuctionItemTypes";
import Graph from "./Graph";
import { useMediaQuery } from "react-responsive";
import useAuctionGraph from "../../../hooks/useAuctionGraph";

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
  const {
    filterData,
    mobileWeekData,
    handleClickWeek,
    handleClickDay,
    change,
  } = useAuctionGraph();

  // 화면이 770px일때 확인해주는 mediaquery hook. npm 설치 react-response
  const isWeb = useMediaQuery({
    query: "(min-width:770px)",
  });

  //최근 7일 1시간마다 날짜, 평균값, 등록건수
  const dateList = data?.map(
    (x) => x.datetime.slice(5, 10) + " " + x.datetime.slice(11, 13) + "시"
  );
  const avgPriceList = data?.map((x) => x.averagePrice);
  const totalCountList = data?.map((x) => x.totalItemCount);
  const lowerPriceList = data?.map((x) => x.lowerPrice);
  const upperPriceList = data?.map((x) => x.upperPrice);
  const soldLowerPriceList = data?.map((x) => x.soldLowerPrice);
  const soldUpperPriceList = data?.map((x) => x.soldUpperPrice);
  return (
    <>
      <StyledBox>
        <StyledBtn onClick={handleClickWeek}>최근 7일</StyledBtn>
        <StyledBtn onClick={handleClickDay}>최근 24시간</StyledBtn>
      </StyledBox>
      <>
        {change ? (
          isWeb ? (
            //최근 7일 1시간마다 날짜, 평균값, 등록건수
            <Graph
              graphDataDate={dateList}
              graphDataAvgPrice={avgPriceList}
              graphDataRegNum={totalCountList}
              graphDataUpper={upperPriceList}
              graphDataLower={lowerPriceList}
              graphDataSoldUpper={soldUpperPriceList}
              graphDataSoldLower={soldLowerPriceList}
            />
          ) : (
            //모바일 화면 일시, 6시간마다의 값
            <Graph
              graphDataDate={mobileWeekData(dateList)}
              graphDataAvgPrice={mobileWeekData(avgPriceList)}
              graphDataRegNum={mobileWeekData(totalCountList)}
              graphDataUpper={mobileWeekData(upperPriceList)}
              graphDataLower={mobileWeekData(lowerPriceList)}
              graphDataSoldUpper={mobileWeekData(soldUpperPriceList)}
              graphDataSoldLower={mobileWeekData(soldLowerPriceList)}
            />
          )
        ) : (
          //최근 24시간 날짜, 평균값, 등록건수
          <Graph
            graphDataDate={filterData(dateList, 24, 1)}
            graphDataAvgPrice={filterData(avgPriceList, 24, 1)}
            graphDataRegNum={filterData(totalCountList, 24, 1)}
            graphDataUpper={filterData(upperPriceList, 24, 1)}
            graphDataLower={filterData(lowerPriceList, 24, 1)}
            graphDataSoldUpper={filterData(soldUpperPriceList, 24, 1)}
            graphDataSoldLower={filterData(soldLowerPriceList, 24, 1)}
          />
        )}
      </>
    </>
  );
};

export default GraphContainer;
