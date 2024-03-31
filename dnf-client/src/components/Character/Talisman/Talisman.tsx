import styled from "styled-components";
import TalismanBg from "./TalismanBg";
import ItemInfo from "./ItemInfo";
import { useRecoilValue } from "recoil";
import { atomCharacterTalismans } from "../../../atoms/characterState";
import Loading from "../../common/Loading";

const StyledBox = styled.div`
  position: relative;
  width: 1140px;
  min-height: 600px;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Talisman = () => {
  const data = useRecoilValue(atomCharacterTalismans);
  return (
    <StyledBox>
      {data ? (
        <>
          <TalismanBg />
          <ItemInfo />
        </>
      ) : (
        <Loading text={"장착된 탈리스만이 없습니다."} play={false} />
      )}
    </StyledBox>
  );
};

export default Talisman;
