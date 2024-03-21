import { applyColor } from '@src/styles-utils/functions';
import { ColorEnum } from '@src/styles-utils/themes';
import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.footer`
    height: 20px;
    ${applyColor(ColorEnum.secondary)}
`;

const Footer: React.FC = () => {
    return <FooterTag></FooterTag>;
};

export default Footer;
