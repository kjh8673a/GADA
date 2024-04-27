import React, { useState } from "react";
import styled from "styled-components";
import { TGraphData } from "../../../@types/Auction/AuctionItemTypes";
import Graph from "./Graph";
import { useMediaQuery } from "react-responsive";

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
  //최근 7일, 최근 24시간 change
  const [change, setChange] = useState<boolean>(true);

  //최근 7일 1시간마다 날짜, 평균값, 등록건수
  const graphWeekDate = data?.map(
    (x) => x.datetime.slice(5, 10) + " " + x.datetime.slice(11, 13) + "시"
  );
  const graphWeekAvgPrice = data?.map((x) => x.averagePrice);
  const graphWeekRegNum = data?.map((x) => x.registeredNumber);

  //최근 24시간 날짜, 평균값, 등록건수
  const graphDayDate = graphWeekDate?.slice(0, 24);
  const graphDayAvgPrice = graphWeekAvgPrice?.slice(0, 24);
  const graphDayRegNum = graphWeekRegNum?.slice(0, 24);

  //모바일 화면 일때 6시간마다 값 표시. 6의 배수로 filter
  const isquater = (value: string | number, idx: number) => {
    if ((idx + 1) % 6 === 0) {
      return value;
    }
  };
  //모바일화면 최근 7일 날짜, 평균값, 등록건수
  // 단 7일치 보다 값이 많을때 6시간마다 값 표시 보임. 아니면 그냥 1시간마다 값 표시
  const graphMobileDate =
    graphWeekDate?.length >= 167
      ? graphWeekDate?.filter((value, idx) => isquater(value, idx))
      : graphWeekDate;

  const graphMobileAvgPrice =
    graphWeekAvgPrice?.length >= 167
      ? graphWeekAvgPrice?.filter((value, idx) => isquater(value, idx))
      : graphWeekAvgPrice;

  const graphMobileRegNum =
    graphWeekRegNum?.length >= 167
      ? graphWeekRegNum?.filter((value, idx) => isquater(value, idx))
      : graphWeekRegNum;

  //최근 7일, 최근 24시간 change 함수
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

  // 화면이 767px일때 확인해주는 mediaquery hook. npm 설치 react-response
  const isWeb = useMediaQuery({
    query: "(min-width:767px)",
  });

  return (
    <>
      <StyledBox>
        <StyledBtn onClick={handleClickWeek}>최근 7일</StyledBtn>
        <StyledBtn onClick={handleClickDay}>최근 24시간</StyledBtn>
      </StyledBox>
      <>
        {change ? (
          isWeb ? (
            <Graph
              graphDataDate={graphWeekDate}
              graphDataAvgPrice={graphWeekAvgPrice}
              graphDataRegNum={graphWeekRegNum}
            />
          ) : (
            <Graph
              graphDataDate={graphMobileDate}
              graphDataAvgPrice={graphMobileAvgPrice}
              graphDataRegNum={graphMobileRegNum}
            />
          )
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
