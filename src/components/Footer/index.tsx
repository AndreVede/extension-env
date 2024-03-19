import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.footer`
    height: 20px;
    background: ${(p) => p.theme.theme.secondary.toString()};
`;

const Footer: React.FC = () => {
    return <FooterTag></FooterTag>;
};

export default Footer;
