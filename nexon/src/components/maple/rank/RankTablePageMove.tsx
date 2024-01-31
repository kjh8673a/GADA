import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useRanking from "../../../hooks/maple/useRanking";

const StyledBox = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const PageMoveBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 4px 8px;
  box-shadow: var(--custom-shadow);
`;

const RankTablePageMove = () => {
  const { totalPage, rankPage, pageMoveClickHandler } = useRanking();
  const [pageMoveStyle, setPageMoveStyle] = useState({ left: {}, right: {} });

  useEffect(() => {
    setPageMoveStyle(() => {
      return {
        left: {
          color: rankPage === 1 ? "#000" : "white",
          border: rankPage === 1 ? "gray solid 3px" : "#3d444c solid 3px",
          cursor: rankPage === 1 ? "default" : "pointer",
          backgroundColor: rankPage === 1 ? "white" : "#3d444c",
        },
        right: {
          color: rankPage === totalPage ? "#000" : "white",
          border: rankPage === totalPage ? "gray solid 3px" : "#3d444c solid 3px",
          cursor: rankPage === totalPage ? "default" : "pointer",
          backgroundColor: rankPage === totalPage ? "white" : "#3d444c",
        },
      };
    });
  }, [rankPage, totalPage, setPageMoveStyle]);

  return (
    <StyledBox>
      <PageMoveBox onClick={() => pageMoveClickHandler(-1)} style={pageMoveStyle.left}>
        ◀ 이전
      </PageMoveBox>
      <PageMoveBox onClick={() => pageMoveClickHandler(1)} style={pageMoveStyle.right}>
        다음 ▶
      </PageMoveBox>
    </StyledBox>
  );
};

export default RankTablePageMove;

