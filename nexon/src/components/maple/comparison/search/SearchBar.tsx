import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useState } from "react";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* 호버 시 배경색 변경 */
  }
`;

interface Props {
  nameLeft: string;
  nameRight: string;
}

const SearchBar: React.FC<Props> = ({ nameLeft, nameRight }) => {
  const navigate = useNavigate();
  const [_nameLeft, _setNameLeft] = useState<string>(nameLeft);
  const [_nameRight, _setNameRight] = useState<string>(nameRight);

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    handleSearch();
  };

  const handleSearch = () => {
    if (!_nameLeft || !_nameRight) {
      navigate("/comparison");
      return;
    }
    if (_nameLeft.length * _nameRight.length === 0) {
      navigate("/comparison");
      return;
    }

    navigate(`/comparison/${_nameLeft || ""}&${_nameRight || ""}`, { replace: true });
  };

  return (
    <StyledBox>
      <SearchInput value={_nameLeft} placeholder="비교 캐릭터 입력" changeHandler={_setNameLeft} />
      <StyledButton onClick={handleSearch} tabIndex={-1}>
        캐릭터 비교하기
      </StyledButton>
      <SearchInput
        value={_nameRight}
        placeholder="비교 캐릭터 입력"
        changeHandler={_setNameRight}
        enterHandler={handleEnter}
      />
    </StyledBox>
  );
};

export default SearchBar;
