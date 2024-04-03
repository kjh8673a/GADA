import React from "react";
import styled from "styled-components";
import { TPopularCharacters } from "../@types/Character/CommonTypes";
import { ColorText } from "../style/CharacterStat";
import useSearch from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";

interface Props {
  data: { read(): TPopularCharacters | undefined };
}

const StyledBox = styled.div`
  box-sizing: border-box;
  width: 350px;
  padding: 10px;
  gap: 5px;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;

  @media(max-width: 400px) {
    width: 330px;
  }
`;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  font-weight: bold;
`;

const PopularCharacter = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: var(--primary-bg-color);
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Rank = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  background-color: var(--primary-bg-color);
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const PopularCharacters: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const { characterClickHandler } = useSearch();
  const characterList = () => {
    return (
      <>
        {data.read()?.data?.ranking.map((v, i) => {
          return (
            <PopularCharacter
              key={i}
              onClick={() =>
                characterClickHandler(navigate, v.characterName, v.serverName)
              }
            >
              <Wrapper>
                <Rank>{v.rank}</Rank>
                <ColorText color={"#FFFFFF"}>{v.characterName}</ColorText>
                <ColorText color={"orange"}>{v.serverName}</ColorText>
                <ColorText color={"#FFFFFF"}>{`Lv. ${v.level}`}</ColorText>
              </Wrapper>
              <Wrapper>
                <img
                  src={"/assets/fame_icon.png"}
                  alt={"fame icon"}
                />
                <ColorText color={"#FFFFFF"}>{v.fame}</ColorText>
              </Wrapper>
            </PopularCharacter>
          );
        })}
      </>
    );
  };
  return (
    <StyledBox>
      <Header>주간 인기 검색 캐릭터</Header>
      {characterList()}
    </StyledBox>
  );
};

export default PopularCharacters;
