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
  const DateList = data?.map(
    (x) => x.datetime.slice(5, 10) + " " + x.datetime.slice(11, 13) + "시"
  );
  const AvgPriceList = data?.map((x) => x.averagePrice);
  const RegNumList = data?.map((x) => x.registeredNumber);

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
              graphDataDate={DateList}
              graphDataAvgPrice={AvgPriceList}
              graphDataRegNum={RegNumList}
            />
          ) : (
            //모바일 화면 일시, 6시간마다의 값
            <Graph
              graphDataDate={mobileWeekData(DateList)}
              graphDataAvgPrice={mobileWeekData(AvgPriceList)}
              graphDataRegNum={mobileWeekData(RegNumList)}
            />
          )
        ) : (
          //최근 24시간 날짜, 평균값, 등록건수
          <Graph
            graphDataDate={filterData(DateList, 24, 1)}
            graphDataAvgPrice={filterData(AvgPriceList, 24, 1)}
            graphDataRegNum={filterData(RegNumList, 24, 1)}
          />
        )}
      </>
    </>
  );
};

export default GraphContainer;
