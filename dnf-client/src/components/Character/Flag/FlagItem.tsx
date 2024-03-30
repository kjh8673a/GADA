import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterFlag } from "../../../atoms/characterState";
import { atomFlagInfo } from "../../../atoms/ItemInfoState";
import { ITEM_TYPE_COLOR } from "../../../@types/CharacterTypes";
import ContentItem from "../Summary/ContentItem";
import useFlag from "../../../hooks/useFlag";
import { atomFlagState } from "../../../atoms/flagState";

interface StyledProps {
  $rarityColor: string;
}

const StyledBox = styled.div``;
const TalismanImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.55);
  cursor: pointer;
  border: 2px double ${(props) => props.$rarityColor};
  border-radius: 1px;
  margin-top: 56.8%;
  margin-left: 46%;
`;

const Content = styled.div`
  position: absolute;
  margin-top: 140%;
  margin-left: 17%;
  width: 100%;
`;

const FlagName = styled.div<StyledProps>`
  position: absolute;
  color: ${(props) => props.$rarityColor};
  margin-top: 5%;
  justify-content: center;
  margin-left: 50%;
  transform: translate(-50%, 0%);
`;

const StyledContentItem = styled.div`
  margin-bottom: 1.5%;
`;

const TalismanItem = () => {
  const data = useRecoilValue(atomCharacterFlag);
  const flagState = useRecoilValue(atomFlagState);
  useFlag(data);
  const setFlagInfo = useSetRecoilState(atomFlagInfo);
  const rarityColor = ITEM_TYPE_COLOR[data.itemRarity!];
  return (
    <StyledBox>
      <FlagName $rarityColor={rarityColor}>{data.itemName}</FlagName>
      <TalismanImg
        src={data.itemImage}
        alt={"talisman Image"}
        $rarityColor={rarityColor}
        onClick={() => {
          // console.log("휘장");
          // console.log(data);
          setFlagInfo(data);
        }}
      ></TalismanImg>
      <Content>
        <StyledContentItem>
          <ContentItem
            title={"모험가 명성"}
            value={"+" + flagState["모험가 명성"]}
          />
        </StyledContentItem>
        <StyledContentItem>
          <ContentItem
            title={"피해 증가"}
            value={"+" + flagState["공격력 증가"]}
          />
        </StyledContentItem>
        <StyledContentItem>
          <ContentItem title={"버프력"} value={"+" + flagState["버프력"]} />
        </StyledContentItem>
      </Content>
    </StyledBox>
  );
};

export default TalismanItem;
