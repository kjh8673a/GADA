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
`;

const SymbolStats = () => {
  const stats = useRecoilValue(atomCharacterSymbolStats);

  return (
    <StyledUl>
      {stats.symbol_hp > 0 && <StyledLi>HP +{stats.symbol_hp}</StyledLi>}
      {stats.symbol_dex > 0 && <StyledLi>DEX +{stats.symbol_dex}</StyledLi>}
      {stats.symbol_force > 0 && <StyledLi>FORCE +{stats.symbol_force}</StyledLi>}
      {stats.symbol_str > 0 && <StyledLi>STR +{stats.symbol_str}</StyledLi>}
      {stats.symbol_int > 0 && <StyledLi>INT +{stats.symbol_int}</StyledLi>}
      {stats.symbol_luk > 0 && <StyledLi>LUK +{stats.symbol_luk}</StyledLi>}
    </StyledUl>
  );
};

export default SymbolStats;
