import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "../../style/style";
import styled from "styled-components";
import RouterTrackerForGA from "./RouterTrackerForGA";
import AdBoxVertical from "../adsense/AdBoxVertical";

// header, nav, footer는 고정px
// header: 64px & nav: 40px & footer: 120px;
const OutletPositioner = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px - 40px - 120px);
  padding: 8px 0;
  box-sizing: border-box;
`;

const RootLayout = () => {
  return (
    <RouterTrackerForGA>
      {/* <AdBoxVertical position="left" /> */}
      <Container>
        <Header />
        <OutletPositioner>
          <Outlet />
        </OutletPositioner>
        <Footer />
      </Container>
      {/* <AdBoxVertical position="right" /> */}
    </RouterTrackerForGA>
  );
};

export default RootLayout;

