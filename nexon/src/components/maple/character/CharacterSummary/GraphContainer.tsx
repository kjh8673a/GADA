import React from "react";
import styled from "styled-components";
import Graph from "./Graph";

const GraphBox = styled.div`
  margin: 10%;
  margin-left: 10%;
  margin-right: 0%;
  width: 60%;
  padding: 2.5%;
  border-radius: 0.625rem;
  background: #3d444c;
  display: flex;
  flex-direction: column;
`;

const GraphBoxTitle = styled.div`
  color: #b4cb32;
  font-family: "Inria Sans";
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8%;
  align-self: start;
`;

const GraphContainer = () => {
  return (
    <GraphBox>
      <GraphBoxTitle>EXP HISTORY</GraphBoxTitle>
      <Graph />
    </GraphBox>
  );
};

export default GraphContainer;
