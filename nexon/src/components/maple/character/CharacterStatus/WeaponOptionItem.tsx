import styled from "styled-components";

interface Props {
  optionName?: string;
  total?: string | undefined;
  base?: string | undefined;
  exceptional?: string | undefined;
  add?: string | undefined;
  starforce?: string | undefined;
  unit?: string;
  desc?: string | undefined;
}

interface StyledOptionProps {
  $enhanced?: boolean;
}

interface StyledExtraOptionProps {
  color?: string;
}

const StyledList = styled.li`
  color: #fff;
`;

const StyledOption = styled.span<StyledOptionProps>`
  color: ${(props) => (props.$enhanced ? "#5FECEC" : "#fff")};
`;

const StyledExtraOption = styled.span<StyledExtraOptionProps>`
  color: ${(props) => (props.color ? props.color : "fff")};
`;

const WeaponOptionItem: React.FC<Props> = ({
  optionName,
  total = 0,
  base = 0,
  exceptional = 0,
  add = 0,
  starforce = 0,
  unit = "",
  desc,
}) => {
  if (+total === 0 && desc === undefined) return null;

  if (desc) {
    return (
      <StyledList>
        <StyledOption>{desc}</StyledOption>
      </StyledList>
    );
  }

  return (
    <StyledList>
      <StyledOption $enhanced={+total > +base}>{`${optionName} : +${total}${unit}`}</StyledOption>
      {+total > +base && (
        <>
          (<StyledExtraOption>{`${+base}`}</StyledExtraOption>
          {+exceptional > 0 && <StyledExtraOption color="#AAAAFE">{`+${exceptional}`}</StyledExtraOption>}
          {+add > 0 && <StyledExtraOption color="#CAFD02">{`+${add}`}</StyledExtraOption>}
          {+starforce > 0 && <StyledExtraOption color="#FDCA00">{`+${starforce}`}</StyledExtraOption>})
        </>
      )}
    </StyledList>
  );
};

export default WeaponOptionItem;
