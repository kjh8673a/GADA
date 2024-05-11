import React from "react";
import styled from "styled-components";
import { GraphHoverItemPropsType } from "../../../../@types/maple/CharacterExpTypes";

const GraphHoverBox = styled.div`
  color: white;
  position: absolute;
  display: grid;
  grid-template-areas: 
    "data3 data3 data3 data3 data3 data3"
    "color1 data1 data1 data1 data1 data1"
    "color2 data2 data2 data2 data2 data2";
  width: 160px;
  height: 6%;
  padding: 0.5%;
  background-color: #3d444c;
  border-radius: 10px;
  opacity: 0.8;
`;

const GraphHoverItem: React.FC<GraphHoverItemPropsType> = ({ x, y, exp, character_level, date }) => {
  return <GraphHoverBox style={{ left: x + 5, top: y + 5 }}>
    <div style={{gridArea: "data3", fontSize: "12px" }}>Date {date}</div>
    <div style={{gridArea: "color1", backgroundColor: "orange", width: "15px", height: "15px", borderRadius: "50%"}}></div>
    <div style={{gridArea: "data1", fontSize: "12px" }}>Level {character_level}</div>
    <div style={{gridArea: "color2", backgroundColor: "#B4CB32", width: "15px", height: "15px"}}></div>
    <div style={{gridArea: "data2", fontSize: "12px"}}>Exp {exp.toLocaleString("ko-kr")}</div>
  </GraphHoverBox>;
};

export default GraphHoverItem;
