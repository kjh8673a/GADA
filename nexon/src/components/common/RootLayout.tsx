import React from 'react';
import Maple from '../maple/Maple';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Container } from '../../style/style';

const RootLayout = () => {
    return (
        <Container>
            <Header/>
                <Outlet />
            <Footer />
        </Container>
    )
}

export default RootLayout;

