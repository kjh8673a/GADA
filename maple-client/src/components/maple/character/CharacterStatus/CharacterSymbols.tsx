import styled from "styled-components";
import SymbolList from "./SymbolList";
import { useRecoilValue } from "recoil";
import { IWeaponTypes } from "../../../../@types/maple/WeaponTypes";
import { atomCharacterWeapon } from "../../../../atoms/maple/characterWeaponState";
import SymbolStats from "./SymbolStats";

const StyledBox = styled.div`
  width: 280px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--custom-shadow);
  border-radius: 4px;
  padding: 16px 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 1140px) {
    width: 100%;
  }
`;

const StyledTitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

const CharacterSymbols = () => {
  const { symbols } = useRecoilValue<IWeaponTypes>(atomCharacterWeapon);

  return (
    <StyledBox>
      <StyledTitle>심볼</StyledTitle>
      <SymbolStats />
      <SymbolList symbols={symbols} />
    </StyledBox>
  );
};

export default CharacterSymbols;

