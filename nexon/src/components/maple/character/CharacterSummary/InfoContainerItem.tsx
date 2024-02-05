import React from "react";
import styled from "styled-components";
import { BasicPropsType } from "../../../../@types/maple/CharacterBasicTypes";

const InfoItemBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 2%;
`;

const InfoItemTitle = styled.div`
  color: #fff;
  font-family: "Inria Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InfoItemValue = styled.div`
  height: 2rem;
  margin: 1%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 3px #000;
  font-family: "Inria Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.5rem;
`;

const InfoContainerItem: React.FC<BasicPropsType> = ({
  id,
  titles,
  values,
}) => {
  return (
    <InfoItemBox>
      {titles.map((v, i) => {
        return (
          <React.Fragment key={v}>
            <InfoItemTitle>{v}</InfoItemTitle>
            <InfoItemValue
              key={id[i]}
              style={{ background: v === "LEVEL" ? "#B4CB32" : "#ABABAB" }}
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
