import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterExp } from "../../../../atoms/maple/characterExpState";

const GraphCanvas = styled.canvas`
  width: 85%;
  height: 85%;
  border-radius: 20px;
`;

const Graph = () => {
  const datas = useRecoilValue(atomCharacterExp);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const [w, h] = [canvas.width, canvas.height];

    // 그래프 테두리
    const m = 20;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.moveTo(m, h - m);
    ctx.lineTo(w - m, h - m);
    ctx.stroke();

    // 기본 설정
    let startX = w - m;
    let startY = h - m;
    const totalWidth = w - 2 * m;
    const totalHeight = h - 2 * m;
    const barWidth = 20;
    const intervalX = totalWidth / (datas.dates.length + 1);

    // 경험치 퍼센트 막대 그래프 그리기
    ctx.fillStyle = "green";
    for (const data of datas.dates) {
      startX -= intervalX;
      let barHeight = totalHeight * 0.01 * +data.character_exp_rate;
      ctx.fillRect(startX - barWidth / 2, startY - barHeight, barWidth, barHeight);
    }

    // 경험치 꺾은 선 그래프 그리기
    ctx.fillStyle = "blue";
    startX = w - m;

    return (() => {
      ctx.clearRect(0, 0, w, h);
    });

  }, [datas])


  return <GraphCanvas ref={canvasRef}></GraphCanvas>;
};

export default Graph;
