import styled from "styled-components";

interface Props {
  inputRef?: React.RefObject<HTMLInputElement>;
  $width: number;
  $height?: number;
  value?: string;
  type?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  $align?: "center" | "left";
  $marginTop?: number;
}

const StyledBox = styled.input<Props>`
  width: ${(props) => props.$width}px;
  margin: 0 24px;
  ${(props) => props.$marginTop? `margin-top: ${props.$marginTop}px;`:""}
  padding: ${(props) => (props.$height ? props.$height : "10")}px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  text-align: ${(props) => props.$align || "left"};
  box-sizing: border-box;

  &:focus {
    border-color: #007bff; /* 포커스되었을 때 테두리 색상 변경 */
    outline: none; /* 기본 포커스 효과 제거 */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* 포커스 시 그림자 효과 */
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`;

const StyledInput: React.FC<Props> = ({
  $width,
  $height,
  value,
  type,
  onChange,
  onKeyDown,
  placeholder,
  $align,
  inputRef,
  defaultValue,
  $marginTop,
}) => {
  const selectAllText = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <>
      <StyledBox
        $width={$width}
        $height={$height}
        value={value}
        defaultValue={defaultValue}
        type={type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={selectAllText}
        placeholder={placeholder}
        $align={$align}
        ref={inputRef}
        $marginTop={$marginTop}
      />
    </>
  );
};

export default StyledInput;
