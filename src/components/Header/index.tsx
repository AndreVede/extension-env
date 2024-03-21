import { applyColor } from '@src/styles-utils/functions';
import { ColorEnum } from '@src/styles-utils/themes';
import React from 'react';
import styled from 'styled-components';

const HeaderTag = styled.header`
    height: 20px;
    ${applyColor(ColorEnum.primary)}
`;

const Header: React.FC = () => {
    return <HeaderTag></HeaderTag>;
};

export default Header;
