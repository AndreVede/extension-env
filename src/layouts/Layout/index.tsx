import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '@src/styles-utils/global-style';

const Layout: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Outlet />
        </>
    );
};

export default Layout;
