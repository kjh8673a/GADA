import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  play: boolean;
}

const StyledBox = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1.3rem;
  line-height: normal;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const DnfLogo = styled.img`
  margin-bottom: 20px;
`;

const Loading: React.FC<Props> = ({ text, play }) => {
  const [idx, setIdx] = useState(0);
  const dots = ["", ".", "..", "..."];
  useEffect(() => {
    if (play) {
      setInterval(() => {
        setIdx((prev) => (prev + 1) % 4);
      }, 200);
    }
  }, [setIdx]);
  return (
    <StyledBox>
      <DnfLogo src={"/assets/dnf_logo.svg"} alt="dnf logo" />
      {text + dots[idx]}
    </StyledBox>
  );
};

export default Loading;
