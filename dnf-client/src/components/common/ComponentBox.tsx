import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
}

interface StyledProps {
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $flexWrap?: string;
}

const StyldBox = styled.div<StyledProps>`
  box-sizing: border-box;
  width: 100%;
  min-height: 600px;
  display: flex;
  ${(props) =>
    props.$flexDirection ? `flex-direction: ${props.$flexDirection};` : ""}
  ${(props) =>
    `justify-content: ${
      props.$justifyContent ? props.$justifyContent : "flex-start"
    };`}
  ${(props) =>
    `align-items: ${props.$alignItems ? props.$alignItems : "flex-start"};`}
  ${(props) => `flex-wrap: ${props.$flexWrap ? props.$flexWrap : "nowrap"};`}
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ComponentBox: React.FC<Props> = ({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
}) => {
  return (
    <StyldBox
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $flexWrap={flexWrap}
    >
      {children}
    </StyldBox>
  );
};

export default ComponentBox;
