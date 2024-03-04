import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomCharacterSynergy, atomOptionOrder, atomSelectedCharacters } from "../../atoms/maple/characterSynergyState";
import { userNickName } from "../../atoms/maple/characterName";
import { getCharacterSynergy } from "../../api/Character/Synergy";

const useCharacterSynergy = () => {
  const [characterSynergy, setCharacterSynergy] = useRecoilState(atomCharacterSynergy);
  const characterName = useRecoilValue(userNickName);
  const [selectedCharacters, setSelectedCharacters] = useRecoilState(atomSelectedCharacters);
  const [optionOrder, setOptionOrder] = useRecoilState(atomOptionOrder);

  const getSynergy = useCallback(
    async (nxt: string[]) => {
      getCharacterSynergy(characterName, nxt)
        .then(({ data, status }) => {
          if (status === 200) {
            setCharacterSynergy(data);
          }
        })
        .catch((res) => {
          if (res.response.status === 500) {
            console.error("Error getCharacterSynergy");
          }
        });
    },
    [setCharacterSynergy, characterName]
  );

  const addSelectedHandler = (className: string) => {
    const nxt = [...selectedCharacters, className];
    getSynergy(nxt);
    setSelectedCharacters(nxt);
  };

  const deleteSelectedHandler = (index: number) => {
    const nxt = selectedCharacters.filter((_, i) => i !== index);
    getSynergy(nxt);
    setSelectedCharacters(nxt);
  };

  const clickCycleOptionHandler = (cycle: number) => {
    setOptionOrder((prev) => {
      return {
        ...prev,
        cycle,
      };
    });
  };

  const clickSkillOptionHandler = (skillType: string) => {
    if (optionOrder.skill_type.includes(skillType)) {
      setOptionOrder((prev) => {
        return {
          ...prev,
          skill_type: prev.skill_type.filter((v) => v !== skillType),
        };
      });
    } else {
      setOptionOrder((prev) => {
        return {
          ...prev,
          skill_type: skillType === "전체" ? [] : [...prev.skill_type, skillType],
        };
      });
    }
  };

  return {
    characterSynergy,
    setCharacterSynergy,
    selectedCharacters,
    setSelectedCharacters,
    getSynergy,
    addSelectedHandler,
    deleteSelectedHandler,
    optionOrder,
    setOptionOrder,
    clickCycleOptionHandler,
    clickSkillOptionHandler,
  };
};

export default useCharacterSynergy;

