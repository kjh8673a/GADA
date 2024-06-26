import styled from "styled-components";
import CopiableText from "./CopiableText";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  height: 140px;
  padding: 32px;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--secondary-bg-color);
  z-index: 5;

  & > div {
    margin: 2px 0;
  }
`;

const StyledDomainTitle = styled.h3`
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <StyledDomainTitle>GADA.app</StyledDomainTitle>
      <div style={{ display: "flex" }}>
        서비스 문의 : &nbsp; <CopiableText text="gadadev202@gmail.com" />
      </div>
      <div>&copy; {year} GADA All rights reserved.</div>
      <div>This site is not associated with NEXON Korea. Data sourced from NEXON OpenAPI.</div>
    </FooterContainer>
  );
};

export default Footer;

