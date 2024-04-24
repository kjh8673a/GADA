import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

interface Props {
  graphDataDate: (string | number)[];
  graphDataAvgPrice: (string | number)[];
  graphDataRegNum: (string | number)[];
}

const StyledBox = styled.div`
  box-sizing: border-box;
  // border: 1px solid white;
  gap: 15px;
  width: 100%;
  height: 50%;
  color: #e2e0e0;
  cursor: context-menu;
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Header = styled.div`
  font-size: 1.2rem;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
);
ChartJS.defaults.color = "#999999";

const History: React.FC<Props> = ({
  graphDataDate,
  graphDataAvgPrice,
  graphDataRegNum,
}) => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const, // - 같은 선상(index) 에 있는 값들 툴팁 다 보여줌
      // mode: 'point' as const,// - 특정 지점에 마우스를 호버하였을 때, 해당 툴팁 보여줌
      axis: "x" as const, // mode 가 index 일 때, 같은 선상이 x축인지 y축인지
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = graphDataDate?.reverse();

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "평균가",
        data: graphDataAvgPrice?.reverse(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        type: "bar" as const,
        label: "등록건수",
        data: graphDataRegNum?.reverse(),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };
  return (
    <StyledBox>
      <Chart type="line" options={options} data={data} />
    </StyledBox>
  );
};

export default History;
