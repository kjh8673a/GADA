import styled from "styled-components";

interface StyledInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<StyledInputProps>`
  width: 160px;
  margin: 0 32px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  text-align: center;

  &:focus {
    border-color: #007bff; /* 포커스되었을 때 테두리 색상 변경 */
    outline: none; /* 기본 포커스 효과 제거 */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* 포커스 시 그림자 효과 */
  }
`;

interface Props {
  value: string;
  changeHandler: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, changeHandler }) => {
  return <StyledInput onChange={(e) => changeHandler(e.target.value)} value={value} />;
};

export default SearchInput;

