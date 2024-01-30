import StyledInput from "../../../../style/StyledInput";

interface Props {
  value: string;
  placeholder: string;
  changeHandler: (value: string) => void;
  enterHandler?: (e: React.KeyboardEvent) => void;
}

const SearchInput: React.FC<Props> = ({ value, placeholder, changeHandler, enterHandler }) => {
  return (
    <StyledInput
      $width={160}
      $align="center"
      placeholder={placeholder}
      onChange={(e) => changeHandler(e.target.value)}
      onKeyDown={enterHandler}
      value={value}
    />
  );
};

export default SearchInput;

