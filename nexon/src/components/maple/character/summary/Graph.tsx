import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterExp } from "../../../../atoms/maple/characterExpState";
import { drawExpBar, drawLevelLine, drawXScale, getXCoords, initCanvasSize } from "../../../../hooks/maple/useExpGraph";

const GraphCanvas = styled.canvas`
  border-radius: 20px;
`;

const Graph = () => {
  const datas = useRecoilValue(atomCharacterExp);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const [w, h] = initCanvasSize(canvas, 0.8, 0.8);
    const m = 20;
    
    const xCoords = getXCoords(w, m, datas.dates.length);

    const expArr = datas.dates.map((v) => +v.character_exp_rate);
    const barWidth = 24;
    drawExpBar(ctx, xCoords, h, m, barWidth, expArr, "green");

    const levelArr = datas.dates.map((v) => v.character_level);
    const lineWidth = 3;
    const radius = 4;
    drawLevelLine(ctx, xCoords, h, m, lineWidth, radius, levelArr, "orange");

    const dateArr = datas.dates.map((v) => v.date.slice(5, 10));
    const fontSize = 13;
    drawXScale(ctx, w, h, m, xCoords, lineWidth, fontSize, dateArr, "black");

    return (() => {
      ctx.clearRect(0, 0, w, h);
    });

  }, [datas])


  return <GraphCanvas ref={canvasRef}></GraphCanvas>;
};

export default Graph;
