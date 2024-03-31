import styled from "styled-components";
import CopySvg from "../../style/CopySvg";
import copy from "copy-to-clipboard";

interface Props {
  text: string;
}

const StyledBox = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    color: skyblue;
    cursor: pointer;
  }
`;

const StyledText = styled.span`
  margin-right: 4px;
  &:hover {
    color: skyblue;
    cursor: pointer;
  }
`;

const CopiableText: React.FC<Props> = ({ text }) => {
  const copyText = () => {
    copy(text);
    alert("클립보드에 복사되었습니다.");
  };

  return (
    <StyledBox onClick={copyText}>
      <StyledText>{text} </StyledText>
      <CopySvg size={12} />
    </StyledBox>
  );
};

export default CopiableText;