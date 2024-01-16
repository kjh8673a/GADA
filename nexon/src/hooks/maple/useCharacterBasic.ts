import { useRecoilState } from "recoil";
import { atomCharacterBasic } from "../../atoms/maple/characterBasicState";

const useCharacterBasic = () => {
  const [characterBasic, setCharacterBasic] = useRecoilState(atomCharacterBasic);

  return { characterBasic, setCharacterBasic };
};

export default useCharacterBasic;

