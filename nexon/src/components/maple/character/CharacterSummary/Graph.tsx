import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterExp } from "../../../../atoms/maple/characterExpState";
import {
  drawExpBar,
  drawLevelLine,
  drawXScale,
  getXCoords,
  graphHoverHandler,
  initCanvasSize,
} from "../../../../hooks/maple/useExpGraph";
import { getExpHistory } from "../../../../api/CharacterBasic";

const GraphCanvas = styled.canvas`
  border-radius: 20px;
`;

const Graph = () => {
  const [data, setData] = useRecoilState(atomCharacterExp);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    getExpHistory("은월").then((res) => {
      setData(res.data);
    });
  }, [setData]);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const [w, h] = initCanvasSize(canvas, 0.8, 0.8);
    const m = 20;

    const xCoords = getXCoords(w, m, data.data.length);

    const expArr = data.data.map((v) => +v.character_exp_rate);
    const barWidth = 24;
    drawExpBar(ctx, xCoords, h, m, barWidth, expArr, "#5cb85c");

    const levelArr = data.data.map((v) => v.character_level);
    const lineWidth = 3;
    const radius = 4;
    drawLevelLine(ctx, xCoords, h, m, lineWidth, radius, levelArr, "orange");

    const dateArr = data.data.map((v) => v.date.slice(8, 10) + "일");
    const fontSize = 14;
    drawXScale(ctx, w, h, m, xCoords, lineWidth, fontSize, dateArr, "#666a7a");

    return () => {
      ctx.clearRect(0, 0, w, h);
    };
  }, [data]);

  return (
    <GraphCanvas ref={canvasRef} onMouseEnter={graphHoverHandler}></GraphCanvas>
  );
};

export default Graph;
