import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '@src/styles-utils/global-style';
import styled, { ThemeProvider } from 'styled-components';
import { themeDefault } from '@src/styles-utils/themes';
import { flexStretch } from '@src/styles-utils/functions';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';

const Main = styled.main`
    ${flexStretch('column')}
`;

const Layout: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={themeDefault}>
                <Header />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Layout;
