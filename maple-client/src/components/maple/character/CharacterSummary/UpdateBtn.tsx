import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isUpdated } from "../../../../atoms/maple/characterUpdateState";
import useCharacterUpdate from "../../../../hooks/maple/useCharacterUpdate";
import { useParams } from "react-router-dom";

const StyledBox = styled.div`
  padding: 10px;
  background-color: #2d638b;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #5685a8;
  }
`;

const DeactivatedBox = styled.div`
  padding: 10px;
  background-color: #858585;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: context-menu;
`;

const UpdateBtn = () => {
  const params = useParams();
  const _isUpdated = useRecoilValue(isUpdated);
  const { onClickHandler } = useCharacterUpdate();
  if (_isUpdated) {
    return <DeactivatedBox>갱신됨</DeactivatedBox>;
  } else {
    return (
      <StyledBox onClick={() => onClickHandler(params.Charactername as string)}>
        갱신
      </StyledBox>
    );
  }
};

export default UpdateBtn;
