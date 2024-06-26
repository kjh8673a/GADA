import React from "react";
import styled from "styled-components";
import { BasicPropsType } from "../../../../@types/maple/CharacterBasicTypes";

const InfoItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 4px;
`;

const InfoItemTitle = styled.div`
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 8px;
  margin-bottom: 2px;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InfoItemValue = styled.div<{ $isClickable: boolean }>`
  height: 2rem;
  margin: 1%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 3px #000;
  font-family: "Inria Sans";
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.5rem;

  ${(props) =>
    props.$isClickable &&
    `&:hover {
      cursor: pointer;
      font-weight: 600;
    }`}
`;

const InfoContainerItem: React.FC<BasicPropsType> = ({ id, titles, values, handleClick }) => {
  return (
    <InfoItemBox>
      {titles.map((v, i) => {
        return (
          <React.Fragment key={v}>
            <InfoItemTitle>{v}</InfoItemTitle>
            <InfoItemValue
              key={id[i]}
              style={{ background: v === "LEVEL" ? "#B4CB32" : "#ABABAB" }}
              $isClickable={v === "GUILD"}
              onClick={v === "GUILD" ? handleClick : () => {}}
            >
              {values[i]}
            </InfoItemValue>
          </React.Fragment>
        );
      })}
    </InfoItemBox>
  );
};

export default InfoContainerItem;

