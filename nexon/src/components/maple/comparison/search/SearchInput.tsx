import StyledInput from "../../../../style/StyledInput";

interface Props {
  value: string;
  changeHandler: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, changeHandler }) => {
  return <StyledInput $width={160} $align="center" onChange={(e) => changeHandler(e.target.value)} value={value} />;
};

export default SearchInput;

