import styled from "styled-components";
import { ISymbolDataType } from "../../../../@types/maple/WeaponTypes";
import SymbolItem from "./SymbolItem";

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  width: 100%;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
`;

interface Props {
  symbols: ISymbolDataType[] | null | undefined;
}

const SymbolList: React.FC<Props> = ({ symbols }) => {
  const MAX_LEN = 4;
  const symbolItems = [];

  for (let i = 0; i < MAX_LEN; i++) {
    symbolItems.push(
      <StyledLi key={i}>
        <SymbolItem key={i * 3 + 0} data={symbols ? symbols[i * 3 + 0] : null} />
        <SymbolItem key={i * 3 + 1} data={symbols ? symbols[i * 3 + 1] : null} />
        <SymbolItem key={i * 3 + 2} data={symbols ? symbols[i * 3 + 2] : null} />
      </StyledLi>
    );
  }

  return <StyledUl>{symbolItems}</StyledUl>;
};

export default SymbolList;

