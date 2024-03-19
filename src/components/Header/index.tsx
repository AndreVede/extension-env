import React from 'react';
import styled from 'styled-components';

const HeaderTag = styled.header`
    height: 20px;
    background: ${(p) => p.theme.theme.primary.toString()};
`;

const Header: React.FC = () => {
    return <HeaderTag></HeaderTag>;
};

export default Header;
