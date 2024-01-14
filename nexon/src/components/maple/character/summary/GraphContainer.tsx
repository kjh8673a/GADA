import React from "react";
import styled from "styled-components";
import Graph from "./Graph";

const GraphBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GraphContainer = () => {
  return (
    <GraphBox>
      <Graph />
    </GraphBox>
  );
};

export default GraphContainer;
