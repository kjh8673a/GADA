import React from 'react';
import styled from 'styled-components';
import { TSearchCharacter } from '../../@types/SearchTypes';

interface Props {
  data: TSearchCharacter;
}

const StyledBox = styled.div`
  background: no-repeat url("${process.env.PUBLIC_URL}/assets/search_character_bg.svg");
  background-position: center;
`;

const SearchCharacterItem: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <img src={data.characterImage} alt={"character image"}/>
    </StyledBox>
  );
};

export default SearchCharacterItem;