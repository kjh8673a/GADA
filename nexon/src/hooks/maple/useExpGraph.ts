// 부모의 크기에 대한 비율로 canvs 사이즈를 조정
// 텍스쳐 업스케일링
export const initCanvasSize = (
  canvas: HTMLCanvasElement,
  xScale: number,
  yScale: number
) => {
  const width = canvas.parentElement!.offsetWidth * xScale;
  const height = canvas.parentElement!.offsetHeight * yScale;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const dpr = window.devicePixelRatio;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.getContext("2d")?.scale(dpr, dpr);

  return [width, height];
};

// 각 데이터의 x좌표 계산하기
export const getXCoords = (width: number, margin: number, dataLen: number) => {
  let x = width - margin;
  const graphWidth = width - 2 * margin;
  const intervalX = graphWidth / (dataLen + 1);
  const coords = Array(dataLen).fill(null);

  for (let i = 0; i < dataLen; i++) {
    x -= intervalX;
    coords[i] = x;
  }

  return coords;
};

// 경험치 퍼센트 막대 그래프 그리기
export const drawExpBar = (
  ctx: CanvasRenderingContext2D,
  xCoords: number[],
  height: number,
  margin: number,
  barWidth: number,
  expArr: number[],
  color: string
) => {
  const y = height - margin;
  const graphHeight = height - 2 * margin;

  ctx.font = `${13}px 고딕`;
  ctx.textAlign = "center";

  let percent;
  let barHeight;
  for (let i = 0; i < expArr.length; i++) {
    barHeight = graphHeight * 0.01 * expArr[i];
    ctx.fillStyle = "black";
    percent = expArr[i] + "";
    ctx.fillText(
      percent.slice(0, percent.indexOf(".")) + "%",
      xCoords[i],
      y - barHeight - 5
    );
    ctx.fillStyle = color;
    ctx.fillRect(xCoords[i] - barWidth / 2, y - barHeight, barWidth, barHeight);
  }
};

// 캐릭터 레벨 꺾은선 그래프 그리기
export const drawLevelLine = (
  ctx: CanvasRenderingContext2D,
  xCoords: number[],
  height: number,
  margin: number,
  lineWidth: number,
  radius: number,
  levelArr: number[],
  color: string
) => {
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;

  const graphHeight = height - 2 * margin;
  let [maxV, minV] = [Math.max(...levelArr) + 5, Math.min(...levelArr) - 2];
  if (minV < 0) minV = 0;
  const numOfInterval = maxV - minV;

  // 점 찍기
  let y;
  const yCoords = Array(levelArr.length).fill(null);
  for (let i = 0; i < levelArr.length; i++) {
    y = graphHeight - (graphHeight / numOfInterval) * (levelArr[i] - minV);
    ctx.beginPath();
    ctx.arc(xCoords[i], y, radius, 0, 2 * Math.PI);
    ctx.fill();
    yCoords[i] = y;
  }

  // 점 잇기
  ctx.beginPath();
  ctx.moveTo(xCoords[0], yCoords[0]);
  for (let i = 1; i < xCoords.length; i++) {
    ctx.lineTo(xCoords[i], yCoords[i]);
    ctx.stroke();
  }

  // 레벨 텍스트 표시
  ctx.font = `${13}px 고딕`;
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  for (let i = 0; i < xCoords.length; i++) {
    ctx.fillText("" + levelArr[i], xCoords[i], yCoords[i] - 5);
  }
};

// 가로축 그리기
export const drawXScale = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  margin: number,
  xCoords: number[],
  lineWidth: number,
  fontSize: number,
  dateArr: string[],
  color: string
) => {
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = "black";
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(margin, height - margin);
  ctx.lineTo(width - margin, height - margin);
  ctx.stroke();

  ctx.font = `${fontSize}px 고딕`;
  ctx.textAlign = "center";
  for (let i = 0; i < dateArr.length; i++) {
    ctx.fillText(dateArr[i], xCoords[i], height - margin + 18);
  }
};

export const graphHoverHandler = () => {
  console.log(1);
};
