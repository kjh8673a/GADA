import React from 'react';
import styled from 'styled-components';
import GuildWaterwayTable from './GuildWaterwayTable';
import RankTablePageMove from '../RankTablePageMove';

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const GuildWaterway = () => {
  return (
    <StyledBox>
      <GuildWaterwayTable />
      <RankTablePageMove />
    </StyledBox>
  );
};

export default GuildWaterway;