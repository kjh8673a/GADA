import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

interface StyledProps {}

const StyldBox = styled.div<StyledProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const ComponentBox: React.FC<Props> = ({ children }) => {
  return <StyldBox>{children}</StyldBox>;
};

export default ComponentBox;
