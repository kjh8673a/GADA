import React from "react";
import CenteredBox from "../../../style/CenteredBox";
import CharacterSummary from "../character/CharacterSummary/CharacterSummary";
import PartyInfo from "./PartyInfo";

const CharacterParty = () => {
  return (
    <CenteredBox>
      <CharacterSummary />
      <PartyInfo />
    </CenteredBox>
  );
};

export default CharacterParty;
