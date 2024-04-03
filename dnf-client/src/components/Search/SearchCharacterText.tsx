import React from "react";
import styled from "styled-components";

interface Props {
  serverName: string;
  characterName: string;
  jobGrowName: string;
  level: number;
}

const StyledBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  width: 100%;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0px 0px 10px 10px;
  }
`;

const ServerText = styled.div`
  color: #87e49c;
`;

const NicknameText = styled.div``;

const SearchCharacterText: React.FC<Props> = ({
  serverName,
  characterName,
  jobGrowName,
  level,
}) => {
  return (
    <StyledBox>
      <ServerText>{serverName}</ServerText>
      <NicknameText>{`Lv. ${level} ${characterName}`}</NicknameText>
      <NicknameText>{`[${jobGrowName}]`}</NicknameText>
    </StyledBox>
  );
};

export default SearchCharacterText;
