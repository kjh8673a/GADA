import styled from "styled-components";
import { atomCharacterSymbolStats } from "../../../../atoms/maple/characterWeaponState";
import { useRecoilValue } from "recoil";

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
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

  return (
    <StyledUl>
      {stats.symbol_hp > 0 && (
        <StyledLi>
          HP <StyledStat>+{stats.symbol_hp}</StyledStat>
        </StyledLi>
      )}
      {stats.symbol_dex > 0 && (
        <StyledLi>
          DEX <StyledStat>+{stats.symbol_dex}</StyledStat>
        </StyledLi>
      )}
      {stats.symbol_force > 0 && (
        <StyledLi>
          FORCE <StyledStat>+{stats.symbol_force}</StyledStat>
        </StyledLi>
      )}
      {stats.symbol_str > 0 && (
        <StyledLi>
          STR <StyledStat>+{stats.symbol_str}</StyledStat>
        </StyledLi>
      )}
      {stats.symbol_int > 0 && (
        <StyledLi>
          INT <StyledStat>+{stats.symbol_int}</StyledStat>
        </StyledLi>
      )}
      {stats.symbol_luk > 0 && (
        <StyledLi>
          LUK <StyledStat>+{stats.symbol_luk}</StyledStat>
        </StyledLi>
      )}
    </StyledUl>
  );
};

export default SymbolStats;
