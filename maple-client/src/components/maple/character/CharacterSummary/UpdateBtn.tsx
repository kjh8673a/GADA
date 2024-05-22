import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isUpdated } from "../../../../atoms/maple/characterUpdateState";
import useCharacterUpdate from "../../../../hooks/maple/useCharacterUpdate";
import { useParams } from "react-router-dom";

const StyledBox = styled.div<{ $bgColor: string }>`
  padding: 10px;
  background-color: ${(props) => props.$bgColor};
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
  const [isClick, setIsClick] = useState<boolean>(false);
  const { onClickHandler } = useCharacterUpdate();
  useEffect(() => {
    setIsClick(false);
  }, [_isUpdated]);
  if (_isUpdated) {
    return <DeactivatedBox>갱신</DeactivatedBox>;
  } else {
    return !isClick ? (
      <StyledBox
        $bgColor={"#2d638b"}
        onClick={() => {
          onClickHandler(params.Charactername as string);
          setIsClick(true);
        }}
      >
        갱신
      </StyledBox>
    ) : (
      <StyledBox $bgColor={"#b4cb32"}>갱신중</StyledBox>
    );
  }
};

export default UpdateBtn;
