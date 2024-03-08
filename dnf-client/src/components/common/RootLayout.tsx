import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export const Container = styled.div`
  display : flex;
  flex-direction : column;
  min-height: 100vh;
`

// header, nav, footer는 고정px
// header: 64px & nav: 40px & footer: 120px;
const OutletPositioner = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px - 40px - 120px);
  padding: 15px 0;
  box-sizing: border-box;
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