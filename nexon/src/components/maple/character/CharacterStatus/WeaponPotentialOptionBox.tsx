import styled from "styled-components";
import WeaponOptionItem from "./WeaponOptionItem";
import DashedLine from "../../../common/DashedLine";

const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 8px 16px;
  list-style: none;
`;

interface Props {
  title: string;
  potential2: string | null | undefined;
  potential3: string | null | undefined;
  potential1: string | null | undefined;
}

const WeaponPotentialOptionBox: React.FC<Props> = ({ title, potential1, potential2, potential3 }) => {
  if (!potential1 && !potential2 && !potential3) return null;

  const isAdditional = title !== "잠재옵션";

  return (
    <>
      <DashedLine />
      <StyledList>
        <WeaponOptionItem
          desc={title}
          logo={`${process.env.PUBLIC_URL}/assets/${isAdditional ? "letter-r.png" : "letter-e.png"}`}
          highlight={isAdditional ? "#5FECEC" : "#9966FD"}
        />
        {potential1 && <WeaponOptionItem desc={potential1} />}
        {potential2 && <WeaponOptionItem desc={potential2} />}
        {potential3 && <WeaponOptionItem desc={potential3} />}
      </StyledList>
    </>
  );
};

export default WeaponPotentialOptionBox;
