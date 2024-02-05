import ComparisonDetail from "./ComparisonDetail/ComparisonDetail";
import CharacterBox from "./character/CharacterBox";
import useFetch from "../../../hooks/useFetch";
import { ICharacterComparisonData } from "../../../@types/maple/CharacterComparisionTypes";
import { getCharacterComparisonData } from "../../../api/Character/Camparison";
import { useMemo } from "react";
import { convertObjToSnakeCaseObj } from "../../../hooks/commonUtils";
import FetchErrorBoundary from "../../common/FetchErrorBoundary";

interface Props {
  characters: string;
}

const ComparisonData: React.FC<Props> = ({ characters }) => {
  const result = useFetch<ICharacterComparisonData, string>(getCharacterComparisonData, characters || "");
  const convertedResult = useMemo(() => {
    return convertObjToSnakeCaseObj(result);
  }, [result]);

  if (!characters || !convertedResult) return null;

  return (
    <>
      <FetchErrorBoundary errorMsg="조회할 캐릭터를 확인해주세요.">
        <CharacterBox data={convertedResult} />
        <ComparisonDetail data={convertedResult} />
      </FetchErrorBoundary>
    </>
  );
};

export default ComparisonData;

