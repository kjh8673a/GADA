import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { atomFetchError } from "../../atoms/common/fetchErrorState";
import FetchCharacterError from "./FetchCharacterError";

const StyledBox = styled.div`
  width: 100%;
`;

interface Props {
  children: React.ReactNode;
  errorMsg: string;
}

const FetchErrorBoundary: React.FC<Props> = ({ children }) => {
  const hasError = useRecoilValue(atomFetchError);

  if (hasError) {
    return (
      <StyledBox>
        <FetchCharacterError />
      </StyledBox>
    );
  }

  return <>{children}</>;
};

export default FetchErrorBoundary;

