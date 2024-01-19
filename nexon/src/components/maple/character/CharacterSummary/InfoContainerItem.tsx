import React from "react";
import styled from "styled-components";

type InfoItemPropsType = {
  titles: string[];
  values: string[];
};

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

const InfoContainerItem: React.FC<InfoItemPropsType> = ({ titles, values }) => {
  return (
    <InfoItemBox>
      {titles.map((v, i) => {
        return (
          <>
            <InfoItemTitle>{v}</InfoItemTitle>
            <InfoItemValue style={{ background: v === "LEVEL" ? "#B4CB32" : "#ABABAB"}}>{values[i]}</InfoItemValue>
          </>
        );
      })}
    </InfoItemBox>
  );
};

export default InfoContainerItem;
