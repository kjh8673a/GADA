import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "../../style/style";
import styled from "styled-components";

// header, nav, footer는 고정px
// header: 40px & nav: 32px & footer: 80px;
const OutletPositioner = styled.div`
  width: 100%;
  min-height: calc(100vh - 40px - 32px - 80px);
  height: 100%;
`;

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <OutletPositioner>
        <Outlet />
      </OutletPositioner>
      <Footer />
    </Container>
  );
};

export default RootLayout;

