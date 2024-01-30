import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "../../style/style";
import styled from "styled-components";

// header, nav, footer는 고정px
// header: 64px & nav: 40px & footer: 120px;
const OutletPositioner = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px - 40px - 120px);
  height: 100%;
  padding: 8px 0;
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

