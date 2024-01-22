import { useCallback } from "react";
import { getCharacterBasicInfo } from "./../../api/Character/Basic";
import { useRecoilState } from "recoil";
import { atomCharacterBasic } from "../../atoms/maple/characterBasicState";

const useCharacterBasic = () => {
  const [characterBasic, setCharacterBasic] =
    useRecoilState(atomCharacterBasic);

  const getCharacterBasic = useCallback(
    (characterName: string) => {
      getCharacterBasicInfo(characterName)
        .then(({ data, status }) => {
          if (status === 200) {
            setCharacterBasic(data);
          }
        })
        .catch((res) => {
          if (res.response.status === 404) {
            console.log("존재하지 않는 ID입니다.");
          }
        });
    },
    [setCharacterBasic]
  );

  return { characterBasic, setCharacterBasic, getCharacterBasic };
};

export default useCharacterBasic;
