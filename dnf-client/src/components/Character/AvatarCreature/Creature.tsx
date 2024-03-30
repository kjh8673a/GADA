import React from "react";
import styled from "styled-components";
import { Line } from "../../../style/dnfContainer";
import { useRecoilValue } from "recoil";
import { atomCharacterCreature } from "../../../atoms/characterState";
import ArtifactItem from "./CreatureItem";
import { ITEM_TYPE_COLOR } from "../../../@types/Character/CommonTypes";
import { ColorText } from "../../../style/CharacterStat";

const StyledBox = styled.div`
  box-sizing: border-box;
  min-width: 250px;
  min-height: 270px;
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  font-size: 1.2rem;
  align-self: center;
  color: #dbc68d;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const Container = styled.div`
  box-sizing: border-box;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

const Creature = () => {
  const data = useRecoilValue(atomCharacterCreature);
  return (
    <StyledBox>
      <Header>크리처</Header>
      <Line />
      <Container>
        {data.itemName ? (
          <>
            <ArtifactItem
              itemImage={data.itemImage!}
              slotColor={ITEM_TYPE_COLOR[data.itemRarity!]}
              detail={data.detail!}
            />
            {data.artifact!.length > 0 ? (
              <Wrapper>
                {data.artifact?.map((v, i) => (
                  <ArtifactItem
                    key={i}
                    itemImage={v.itemImage}
                    slotColor={v.slotColor.toLowerCase()}
                    detail={v.detail!}
                  />
                ))}
              </Wrapper>
            ) : (
              <ColorText color={"gray"}>{"장착 중인 아티팩트가 없습니다."}</ColorText>
            )}
          </>
        ) : (
          <ColorText color={"gray"}>{"장착 중인 크리처가 없습니다."}</ColorText>
        )}
      </Container>
    </StyledBox>
  );
};

export default Creature;
