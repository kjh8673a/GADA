import styled from "styled-components";
import PetList from "./PetList";

const StyledBox = styled.div`
  width: 100%;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--custom-shadow);
  margin-top: 8px;
  border-radius: 4px;
  padding: 16px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

const PetWeapons = () => {
  return (
    <StyledBox>
      <StyledTitle>펫 장비</StyledTitle>
      <PetList />
    </StyledBox>
  );
};

export default PetWeapons;

