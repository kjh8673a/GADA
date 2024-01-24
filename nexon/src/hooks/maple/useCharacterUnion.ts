import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {
  atomCharacterUnion,
  atomUnionGrid,
} from "../../atoms/maple/characterUnionState";
import { getCharacterUnion } from "../../api/Character/Union";
import { UnionBlockType } from "../../@types/maple/CharacterUnionTypes";

const useCharacterUnion = () => {
  const [characterUnion, setcharacterUnion] =
    useRecoilState(atomCharacterUnion);

  const [unionGrid, setUnionGrid] = useRecoilState(atomUnionGrid);

  const getUnion = useCallback(
    (characterName: string) => {
      getCharacterUnion(characterName).then(({ data, status }) => {
        if (status === 200) {
          setcharacterUnion(data);
          setUnionGrid((_) => {
            const grid = Array.from<Array<Array<boolean>>, Array<boolean>>(
              { length: 20 },
              () => Array.from({ length: 20 }, () => false)
            );
            data.data.union_block.forEach((v: UnionBlockType) => {
              v.block_position?.forEach((v) => {
                grid[10 - v.y][v.x + 11] = true;
              });
            });
            return grid;
          });
        }
      }).catch((res) => {
        if (res.response.status === 500) {
          console.log("Error getCharacterUnion");
        }
      });
    },
    [setcharacterUnion, setUnionGrid]
  );

  return {
    characterUnion,
    setcharacterUnion,
    unionGrid,
    setUnionGrid,
    getUnion,
  };
};

export default useCharacterUnion;
