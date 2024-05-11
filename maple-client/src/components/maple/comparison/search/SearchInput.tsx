import StyledInput from "../../../../style/StyledInput";

interface Props {
  width?: number;
  margin?: number;
  value: string;
  placeholder: string;
  changeHandler: (value: string) => void;
  enterHandler?: (e: React.KeyboardEvent) => void;
}

const SearchInput: React.FC<Props> = ({ width, margin, value, placeholder, changeHandler, enterHandler }) => {
  return (
    <StyledInput
      $width={width ? width : 160}
      $margin={margin ? margin : 24}
      $align="center"
      placeholder={placeholder}
      onChange={(e) => changeHandler(e.target.value.trim())}
      onKeyDown={enterHandler}
      value={value}
    />
  );
};

export default SearchInput;

