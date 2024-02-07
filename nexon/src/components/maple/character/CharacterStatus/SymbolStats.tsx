import styled from "styled-components";
import { atomCharacterSymbolStats } from "../../../../atoms/maple/characterWeaponState";
import { useRecoilValue } from "recoil";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const StyledUl = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 8px 0;
`;

const StyledLi = styled.li`
  color: #fff;
  font-size: 0.8rem;
  margin: 2px 0;
  display: flex;
`;

const StyledStat = styled.span`
  color: rgba(97, 255, 255, 0.8);
  margin-left: 4px;
`;

const SymbolStats = () => {
  const stats = useRecoilValue(atomCharacterSymbolStats);
  console.log(stats);

  return (
    <StyledBox>
      <StyledUl>
        <StyledLi>아케인심볼</StyledLi>
        {Object.entries(stats["아케인심볼"]).map(
          (entry) =>
            entry[1] > 0 && (
              <StyledLi>
                {entry[0].split("_")[1].toUpperCase()} <StyledStat>+{entry[1]}</StyledStat>
              </StyledLi>
            )
        )}
      </StyledUl>
      <StyledUl>
        <StyledLi>어센틱심볼</StyledLi>
        {Object.entries(stats["어센틱심볼"]).map(
          (entry) =>
            entry[1] > 0 && (
              <StyledLi>
                {entry[0].split("_")[1].toUpperCase()} <StyledStat>+{entry[1]}</StyledStat>
              </StyledLi>
            )
        )}
      </StyledUl>
    </StyledBox>
  );
};

export default SymbolStats;

