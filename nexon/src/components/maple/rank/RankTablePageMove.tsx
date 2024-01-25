import React from "react";
import styled from "styled-components";
import useRanking from "../../../hooks/maple/useRanking";

const StyledBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
`;

const PageMoveBox = styled.div<{ page: number; type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: ${(props) =>
    props.page === 1 && props.type === "left" ? "gray;" : "white;"}
  border: ${(props) =>
    props.page === 1 && props.type === "left" ? "gray" : "#3d444c"} solid 3px;
  ${(props) =>
    props.page === 1 && props.type === "left"
      ? "cursor: auto;"
      : "cursor: pointer;"}
  background-color: ${(props) =>
    props.page === 1 && props.type === "left"
      ? "white;"
      : "#3d444c;"}
  padding: 5px;
`;

const RankTablePageMove = () => {
  const { page, pageMoveClickHandler } = useRanking();
  return (
    <StyledBox>
      <PageMoveBox
        onClick={() => pageMoveClickHandler(-1)}
        page={page}
        type={"left"}
      >
        ◀ 이전{" "}
      </PageMoveBox>
      <PageMoveBox
        onClick={() => pageMoveClickHandler(1)}
        page={page}
        type={"right"}
      >
        다음 ▶
      </PageMoveBox>
    </StyledBox>
  );
};

export default RankTablePageMove;
