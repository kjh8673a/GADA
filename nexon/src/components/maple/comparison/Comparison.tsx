import styled from "styled-components";
import CenteredBox from "../../../style/CenteredBox";
import SearchBox from "./search/SearchBox";
import ComparisonData from "./ComparisonData";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../../common/Loading";
import DeferredComponent from "../../common/DeferredComponent";

const StyledTitle = styled.h2`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 800;
`;

const Comparison = () => {
  const { characters } = useParams();
  return (
    <CenteredBox>
      <StyledTitle>캐릭터 비교</StyledTitle>
      <SearchBox />
      {characters && (
        <Suspense
          fallback={
            <DeferredComponent>
              <Loading text="캐릭터 정보를 불러오고 있습니다." />
            </DeferredComponent>
          }
        >
          <ComparisonData characters={characters} />
        </Suspense>
      )}
    </CenteredBox>
  );
};

export default Comparison;

