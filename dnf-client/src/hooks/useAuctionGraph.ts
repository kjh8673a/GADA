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
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
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
const useAuctionGraph = () => {
  //GraphContainer

  const cutData = (
    value: string | number,
    idx: number,
    length: number,
    multiple: number
  ) => {
    if (length >= idx + 1) {
      if ((idx + 1) % multiple === 0) {
        return String(value); //value가 0이면 false로 반환되어 filter함수에서 값을 뱉지 않음. 그래서 String처리
      }
    }
  };
  // length: 자르고 싶은 길이 24시간이면 24, multiple: 몇 시간마다 자를 건지 6시간.
  const filterData = (
    data: (string | number)[],
    length: number,
    multiple: number
  ) => {
    const filteredData = data?.filter((value, idx) =>
      cutData(value, idx, length, multiple)
    );
    return filteredData;
  };

  //모바일화면 최근 7일 날짜, 평균값, 등록건수
  // 단 7일치 보다 값이 많을때 6시간마다 값 표시 보임. 아니면 그냥 1시간마다 값 표시
  const mobileWeekData = (data: (string | number)[]) => {
    return data?.length >= 167 ? filterData(data, data.length, 6) : data;
  };

  //최근 7일, 최근 24시간 change
  const [change, setChange] = useState<boolean>(true);

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

  //Graph
  const isWeb = useMediaQuery({
    query: "(min-width:770px)",
  });

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
        labels: {
          font: {
            size: isWeb ? 12 : 9,
          },
        },
      },
    },
    scales: {
      x: {
        // display: false //x 축값 표시 default: true
        reverse: true,
      },
      y: {
        title: {
          //y축 값
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
          text: "등록물량",
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

  const chartJSData = (
    labels: (string | number)[],
    avgData: (string | number)[],
    totalCountData: (string | number)[],
    UpperData: (string | number)[],
    LowerData: (string | number)[]
  ) => {
    const data = {
      labels,
      datasets: [
        {
          type: "line" as const,
          label: "평균가",
          data: avgData,
          pointStyle: "circle", //포인터 스타일 변경
          // pointBorderWidth: 2, //포인터 보더사이즈
          pointRadius: 1,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          yAxisID: "y",
        },
        {
          type: "line" as const,
          label: "최저가",
          data: LowerData,
          pointStyle: "circle", //포인터 스타일 변경
          // pointBorderWidth: 2, //포인터 보더사이즈
          pointRadius: 1,
          borderDash: [5, 5],
          borderColor: "rgb(255, 129, 56)",
          backgroundColor: "rgba(255, 129, 56, 0.5)",
          yAxisID: "y",
        },
        {
          type: "line" as const,
          label: "최고가",
          data: UpperData,
          pointStyle: "circle", //포인터 스타일 변경
          // pointBorderWidth: 2, //포인터 보더사이즈
          pointRadius: 1,
          borderDash: [5, 5],
          borderColor: "rgb(255, 129, 56)",
          backgroundColor: "rgba(255, 129, 56, 0.5)",
          yAxisID: "y",
        },

        {
          type: "bar" as const, //등록건수는 추세가 있는 값이 아니기 때문에 bar차트로 설정.
          label: "등록물량",
          data: totalCountData,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          yAxisID: "y1",
        },
      ],
    };
    return data;
  };

  return {
    options,
    chartJSData,
    filterData,
    mobileWeekData,
    handleClickWeek,
    handleClickDay,
    change,
  };
};

export default useAuctionGraph;
