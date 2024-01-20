import styled from "styled-components";
import { ISymbolDataType } from "../../../../@types/maple/WeaponTypes";

interface StyledBoxProps {
  $nodata: boolean;
}

const StyledBox = styled.div<StyledBoxProps>`
  width: 25%;
  border-radius: 8px;
  height: 100%;
  background-color: green;
  margin-bottom: 4px;
  opacity: ${(props) => (props.$nodata ? "0.6" : "1")};
`;

interface StyledIconProps {
  $img: string | undefined | null;
  $type: string;
}

const StyledIcon = styled.div<StyledIconProps>`
  width: 100%;
  height: 54px;
  background-image: url(${(props) => props.$img || `${process.env.PUBLIC_URL}/assets/question-mark.png`});
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #444448;
  border: 2px solid
    ${(props) => (props.$type === "아케인심볼" ? "#ffab26" : props.$type === "어센틱심볼" ? "#26a0ff" : "#eee")};
  border-radius: 8px 8px 0 0;
  box-sizing: border-box;
`;

const StyledLevelBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2px 8px;
  background-color: #252533;
  color: #ffbb34;
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  border-left: 1px solid #555;
  border-right: 1px solid #555;
`;

const StyledTypeBox = styled.div`
  width: 100%;
  background-color: #555555;
  box-sizing: border-box;
  padding: 4px 8px;
  font-size: 0.6rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  color: #eeeeee;
  border-radius: 0 0 4px 4px;
  border: 1px solid #555;
`;

interface Props {
  data: ISymbolDataType | null;
}

const SymbolItem: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox $nodata={!data}>
      <StyledIcon $img={data?.symbol_icon} $type={data?.symbol_name?.split(" : ")[0] || "심볼없음"} />
      <StyledLevelBox>
        <span>Lv.</span>
        <span>{data?.symbol_level || 0}</span>
      </StyledLevelBox>
      <StyledTypeBox>{data?.symbol_name?.split(" : ")[0] || "심볼없음"}</StyledTypeBox>
    </StyledBox>
  );
};

export default SymbolItem;

