import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterExp } from "../../../../atoms/maple/characterExpState";
import {
  drawExpBar,
  drawLevelLine,
  drawXScale,
  getXCoords,
  handleMouseMove,
  initCanvasSize,
} from "../../../../hooks/maple/useExpGraph";
import { getExpHistory } from "../../../../api/CharacterBasic";
import GraphHoverItem from "./GraphHoverItem";

const GraphCanvas = styled.canvas`
  border-radius: 10px;
  border: 1.5px solid #ccc;
`;

const Graph = () => {
  const [data, setData] = useRecoilState(atomCharacterExp);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [props, setProps] = useState({ character_level: 0, exp: 0, date: ""});
  const [isHover, setIsHover] = useState(false);

  // 히스토리 조회
  useEffect(() => {
    getExpHistory("은월").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [setData]);

  // 그래프 생성
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const [w, h] = initCanvasSize(canvas, 0.8, 0.8);
    const m = 30;

    const xCoords = getXCoords(w, m, data.data.length);

    const expArr = data.data.map((v) => +v.character_exp_rate);
    const barWidth = 24;
    drawExpBar(ctx, xCoords, h, m, barWidth, expArr, "#5cb85c");

    const levelArr = data.data.map((v) => v.character_level);
    const lineWidth = 3;
    const radius = 4;
    drawLevelLine(ctx, xCoords, h, m, lineWidth, radius, levelArr, "orange");

    const dateArr = data.data.map((v) => v.character_level > 0 ? v.date.slice(8, 10) + "일" : "");
    const fontSize = 14;
    drawXScale(ctx, w, h, m, xCoords, lineWidth, fontSize, dateArr, "#666a7a");

    return () => {
      ctx.clearRect(0, 0, w, h);
    };
  }, [data]);

  // hover 기능
  useEffect(() => {
    setIsHover(() => {
      const canvas = canvasRef.current as HTMLCanvasElement;
      if (canvas.offsetLeft + 10 < xy.x && canvas.offsetLeft + canvas.offsetWidth - 10 > xy.x) {
        if (
          canvas.offsetTop + 10 < xy.y &&
          canvas.offsetTop + canvas.offsetHeight - 10 > xy.y
        ) {
          const width = canvas.offsetWidth - 2 * 30;
          const intervalX = width / 8
          let x = canvas.offsetLeft + 30 + intervalX * 0.5;
          for (let i=0; i<7; i++) {
            x += intervalX
            if (xy.x < x) {
              setProps({
                character_level: data.data[6 - i].character_level,
                exp: data.data[6 - i].exp,
                date: data.data[6 -i].date,
              })
              break;
            }
          }
          return true;
        }
      }
      return false;
    });
  }, [xy]);

  return (
    <>
      <GraphCanvas
        ref={canvasRef}
        onMouseMove={(event) => handleMouseMove(event, setXY)}
      ></GraphCanvas>
      {isHover && <GraphHoverItem x={xy.x} y={xy.y} character_level={props.character_level} exp={props.exp} date={props.date}/>}
    </>
  );
};

export default Graph;
