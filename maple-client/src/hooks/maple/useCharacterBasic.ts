import { useCallback } from "react";
import { getCharacterBasicInfo } from "./../../api/Character/Basic";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atomCharacterBasic } from "../../atoms/maple/characterBasicState";
import { atomFetchError } from "../../atoms/common/fetchErrorState";

const useCharacterBasic = () => {
  const [characterBasic, setCharacterBasic] = useRecoilState(atomCharacterBasic);
  const setError = useSetRecoilState(atomFetchError);

  const getCharacterBasic = useCallback(
    (characterName: string) => {
      getCharacterBasicInfo(characterName)
        .then(({ data, status }) => {
          if (status === 200) {
            setCharacterBasic(data);
          }
          setError(null);
        })
        .catch((res) => {
          if (res.response?.status && res.response.status === 404) {
            setError(new Error("존재하지 않는 ID입니다."));
          } else {
            setError(new Error("정보를 가져오는 도중 오류가 발생했습니다."));
          }
        });
    },
    [setCharacterBasic, setError]
  );

  return { characterBasic, setCharacterBasic, getCharacterBasic };
};

export default useCharacterBasic;

