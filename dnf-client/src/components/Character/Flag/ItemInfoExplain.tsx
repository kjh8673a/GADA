import React from "react";
import styled from "styled-components";
import { TDetail } from "../../../@types/Character/CommonTypes";

interface Props {
  value: TDetail | undefined;
}

const StyledBox = styled.div`
  line-height: 140%;
  padding-left: 1%;
  padding-top: 1%;
  color: #999685;
`;

const TalismanItem: React.FC<Props> = ({ value }) => {
  return (
    <StyledBox>
      {value?.itemStatus!.map((obj, idx) => (
        <StyledBox key={idx}>
          {obj.name} {obj.value}
        </StyledBox>
      ))}
    </StyledBox>
  );
};

export default TalismanItem;
