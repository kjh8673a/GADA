import styled from "styled-components";

export const InfoBox = styled.div`
  margin: 10% 5%;
  padding: 1%;
  display: grid;
  grid-template-rows: 3fr 7.5fr;
  border-radius: 0.625rem;
  background-color: var(--secondary-bg-color);
`;

export const InfoBoxHeader = styled.div`
  margin: 2%;
  margin-bottom: 0%;
  display: grid;
  grid-template-area
`;

export const InfoBoxHeaderTitle = styled.div`
  color: #b4cb32;
  font-family: "Inria Sans";
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CharacterName = styled.div`
  color: #fff;
  font-family: "Zen Old Mincho";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 32px;
`;

export const BookmarkButton = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  color: #fff;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PartyButton = styled.button`
  justify-self: end;
  color: #fff;
  width: 8rem;
  height: 40px;
  border: none;
  text-align: center;
  text-shadow: 3px 3px 3px #000;
  font-family: "Inria Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  border-radius: 0.5rem;
  background: #2d638b;
  box-shadow: var(--custom-shadow);

  &:hover {
    cursor: pointer;
    font-weight: 800;
  }
`;

export const InfoBoxBody = styled.div`
  margin: 1%;
  margin-bottom: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
