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
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const, // - 같은 선상(index) 에 있는 값들 툴팁 다 보여줌
      // mode: 'point' as const,// - 특정 지점에 마우스를 호버하였을 때, 해당 툴팁 보여줌
      axis: "x" as const, // mode 가 index 일 때, 같은 선상이 x축인지 y축인지
    },
    plugins: {
      legend: {
        position: "top" as const, //범례를 어디에 보여줄 것인지
      },
    },
    scales: {
      x: {
        // display: false //x 축값 표시 default: true
        reverse: true,
      },
      y: {
        title: { //y축 값
          display: true,
          text: "평균가",
          font: {
            size: 12,
          },
        },
        type: "linear" as const,
        display: true,
        beginAtZero: true, // 항상 0부터 시작. (값이 없으면 -값부터 시작해서)
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        title: {
          display: true,
          text: "등록건수",
          font: {
            size: 12,
          },
        },
        display: true,
        position: "right" as const,
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = graphDataDate; // x축 데이타

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "평균가",
        data: graphDataAvgPrice,
        pointStyle: "circle", //포인터 스타일 변경
        // pointBorderWidth: 2, //포인터 보더사이즈
        pointRadius: 1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        type: "bar" as const, //등록건수는 추세가 있는 값이 아니기 때문에 bar차트로 설정.
        label: "등록건수",
        data: graphDataRegNum,
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
