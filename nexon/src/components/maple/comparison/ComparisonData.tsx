import { useParams } from "react-router-dom";
import ComparisonDetail from "./ComparisonDetail/ComparisonDetail";
import CharacterBox from "./character/CharacterBox";
import useFetch from "../../../hooks/useFetch";
import { ICharacterComparisonData } from "../../../@types/maple/CharacterComparisionTypes";
import { getCharacterComparisonData } from "../../../api/Character/Camparison";
import { useMemo } from "react";
import { convertObjToSnakeCaseObj } from "../../../hooks/commonUtils";

const ComparisonData = () => {
  const { characters } = useParams();
  const result = useFetch<ICharacterComparisonData, string>(getCharacterComparisonData, characters || "");
  const convertedResult = useMemo(() => {
    return convertObjToSnakeCaseObj(result);
  }, [result]);

  if (
    !characters ||
    !convertedResult ||
    !convertedResult.data ||
    !convertedResult.data.left_character ||
    !convertedResult.data.right_character
  )
    return null;

  return (
    <>
      <CharacterBox data={convertedResult} />
      <ComparisonDetail data={convertedResult} />
    </>
  );
};

export default ComparisonData;
