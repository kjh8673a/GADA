import styled from "styled-components";

const StyledBox = styled.div<{ $position: "left" | "right" }>`
  position: fixed;
  top: 112px;
  ${(props) => props.$position}: 4px;
  width: 140px;
  height: 600px;
  background-color: #eee;
`;

interface Props {
  position: "left" | "right";
}

const AdBoxVertical: React.FC<Props> = ({ position }) => {
  return <StyledBox $position={position}></StyledBox>;
};

export default AdBoxVertical;

