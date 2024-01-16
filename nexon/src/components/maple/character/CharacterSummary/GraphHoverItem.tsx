import React from "react";
import styled from "styled-components";
import { GraphHoverItemPropsType } from "../../../../@types/maple/CharacterExpTypes";

const GraphHoverBox = styled.div`
  position: absolute;
  display: grid;
  grid-template-areas: 
    "data3 data3 data3 data3 data3 data3"
    "color1 data1 data1 data1 data1 data1"
    "color2 data2 data2 data2 data2 data2";
  width: 150px;
  height: 6%;
  padding: 0.5%;
  background-color: white;
  border-radius: 10px;
  border: black 2px solid;
  opacity: 0.8;
`;

const GraphHoverItem: React.FC<GraphHoverItemPropsType> = ({ x, y, exp, character_level, date }) => {
  return <GraphHoverBox style={{ left: x + 5, top: y + 5 }}>
    <div style={{gridArea: "data3", fontSize: "12px" }}>Date {date}</div>
    <div style={{gridArea: "color1", backgroundColor: "orange", width: "15px", height: "15px", borderRadius: "50%"}}></div>
    <div style={{gridArea: "data1", fontSize: "12px" }}>Level {character_level}</div>
    <div style={{gridArea: "color2", backgroundColor: "#5cb85c", width: "15px", height: "15px"}}></div>
    <div style={{gridArea: "data2", fontSize: "12px"}}>Exp {exp}</div>
  </GraphHoverBox>;
};

export default GraphHoverItem;
