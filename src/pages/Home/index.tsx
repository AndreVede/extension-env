import Color from 'colorjs.io/types/src';
import React from 'react';
import styled, { useTheme } from 'styled-components';

const Title = styled.h1`
    color: ${(p) => p.theme.theme.primary.toString()};
`;

const Home: React.FC = () => {
    const theme = useTheme();

    return (
        <>
            <Title>Test DEMO</Title>
            <p>This is a DEMO</p>

            <span>theme</span>
            {Object.entries(theme.theme).map(([key, value]) => {
                const color = value as Color;
                return <div key={key} style={{ background: color.toString(), width: '10px', height: '10px', margin: '2px' }}></div>;
            })}

            <span>fonts</span>
            {Object.entries(theme.fonts).map(([key, value]) => {
                const color = value as Color;
                return <div key={key} style={{ background: color.toString(), width: '10px', height: '10px', margin: '2px' }}></div>;
            })}
        </>
    );
};

export default Home;
