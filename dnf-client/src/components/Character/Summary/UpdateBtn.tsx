import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import useCharacter from "../../../hooks/useCharacter";
import { useRecoilValue } from "recoil";
import { atomCharacterBasic, atomLoading } from "../../../atoms/characterState";

interface StyledProps {
  $activate: boolean;
  $isLoading: boolean;
}

const StyledBox = styled.div<StyledProps>`
  width: 25px;
  height: 25px;
  background-image: url("${process.env.PUBLIC_URL}/assets/update_icon${(
    props
  ) => (props.$activate ? "" : "_gray")}.png");
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${(props) => (props.$isLoading ? "rotate" : "")} 1s linear infinite
    running;
  &:hover {
    cursor: ${(props) => (props.$activate ? "pointer" : "")};
  }
`;

const UpdateBtn = () => {
  const [searchParams] = useSearchParams();
  const { updateClickHandler, getTimeDiffer } = useCharacter();
  const data = useRecoilValue(atomCharacterBasic);
  const loading = useRecoilValue(atomLoading);
  const [_activate, _setIsActivate] = useState<boolean>(true);

  useEffect(() => {
    _setIsActivate(
      getTimeDiffer(data.updatedTime!) === "방금전" ? false : true
    );
  }, [data]);

  return (
    <StyledBox
      $isLoading={loading}
      $activate={_activate}
      onClick={() =>
        updateClickHandler(
          _activate,
          searchParams.get("server")!,
          searchParams.get("character")!
        )
      }
    />
  );
};

export default UpdateBtn;
