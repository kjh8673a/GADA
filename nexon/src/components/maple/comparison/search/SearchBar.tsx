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

  const handleSearch = () => {
    if (!_nameLeft || !_nameRight) {
      navigate("/comparison");
      return;
    }
    if (_nameLeft.length * _nameRight.length === 0) {
      navigate("/comparison");
      return;
    }

    navigate(`/comparison/${_nameLeft || ""}&${_nameRight || ""}`);
  };

  return (
    <StyledBox>
      <SearchInput value={_nameLeft} changeHandler={_setNameLeft} />
      <StyledButton onClick={handleSearch}>캐릭터 비교하기</StyledButton>
      <SearchInput value={_nameRight} changeHandler={_setNameRight} />
    </StyledBox>
  );
};

export default SearchBar;

