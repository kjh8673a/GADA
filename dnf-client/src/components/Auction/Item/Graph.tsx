import React from "react";
import styled from "styled-components";
import useAuctionGraph from "../../../hooks/useAuctionGraph";
import { Chart } from "react-chartjs-2";

interface Props {
  graphDataDate: (string | number)[];
  graphDataAvgPrice: (string | number)[];
  graphDataRegNum: (string | number)[];
  graphDataUpper: (string | number)[];
  graphDataLower: (string | number)[];
}

const StyledBox = styled.div`
  box-sizing: border-box;
  // border: 1px solid white;
  gap: 15px;
  width: 100%;
  height: 70vh;
  color: #e2e0e0;
  cursor: context-menu;

  @media (max-width: 770px) {
    width: 100%;
    height: 50vh;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 40vh;
  }
`;

const Graph: React.FC<Props> = ({
  graphDataDate,
  graphDataAvgPrice,
  graphDataRegNum,
  graphDataUpper,
  graphDataLower,
}) => {
  const { options, chartJSData } = useAuctionGraph();

  return (
    <StyledBox>
      <Chart
        type="line"
        options={options}
        data={chartJSData(
          graphDataDate,
          graphDataAvgPrice,
          graphDataRegNum,
          graphDataUpper,
          graphDataLower
        )}
      />
    </StyledBox>
  );
};

export default Graph;
