import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomFlagInfo } from "../../../atoms/ItemInfoState";
import ItemInfoExplain from "./ItemInfoExplain";
import { ITEM_TYPE_COLOR } from "../../../@types/Character/CommonTypes";
import { ColorText } from "../../../style/CharacterStat";
import Loading from "../../common/Loading";

interface StyledProps {
  $rarityColor: string;
}

const StyledBox = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
  background-color: black;
  border-radius: 10px;
  margin-top: 3%;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
  }
`;
const NameBox = styled.div`
  position: relative;
  display: flex;
  padding-top: 2%;
  margin-left: 1%;
  padding-left: 2%;
  margin-right: 1%;
  padding-bottom: 2%;
  height: 12%;
  border-bottom: 1px solid #455a64;
`;
const ItemImg = styled.img<StyledProps>`
  position: relative;
  transform: scale(0.8);
  border: 2px solid ${(props) => props.$rarityColor};

  border-radius: 1px;
`;
const NameDiv = styled.div<StyledProps>`
  margin-left: 2%;
  margin-top: 1%;
  color: ${(props) => props.$rarityColor};
`;
const RarityDiv = styled.div<StyledProps>`
  text-align: right;
  color: ${(props) => props.$rarityColor};
`;
const RarityBox = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  padding-top: 2%;
  padding-bottom: 2%;
  line-height: 130%;
  border-bottom: 1px solid #455a64;
`;

const ItemBox = styled.div`
  text-align: right;
  color: #70694c;
`;

const ItemInfo = () => {
  const data = useRecoilValue(atomFlagInfo);
  const rarityColor = ITEM_TYPE_COLOR[data.detail?.itemRarity!];
  return (
    <StyledBox>
      {data.itemId === undefined ? (
        <Loading text={"아이템을 클릭해주세요."} play={false} />
      ) : (
        <>
          <NameBox>
            <ItemImg src={data.itemImage} $rarityColor={rarityColor}></ItemImg>
            <NameDiv $rarityColor={rarityColor}>
              {"reinforce" in data ? `+${data.reinforce} ` : ""}
              {data.itemName}
            </NameDiv>
          </NameBox>
          <RarityBox>
            <RarityDiv $rarityColor={rarityColor}>
              {data.detail?.itemRarity}
            </RarityDiv>
            <ItemBox>레벨제한 {data.detail?.itemAvailableLevel}</ItemBox>
          </RarityBox>
          <ItemInfoExplain value={data.detail}></ItemInfoExplain>
        </>
      )}
    </StyledBox>
  );
};

export default ItemInfo;
