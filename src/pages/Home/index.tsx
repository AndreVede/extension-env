import Card from '@src/components/Card';
import { flexCenter } from '@src/styles-utils/functions';
import { ColorEnum } from '@src/styles-utils/themes';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: ${(p) => p.theme.theme.primary.toString()};
`;

const Row = styled.div`
    ${flexCenter('row')}
    gap: 5px;
    margin: 5px;
`;

const Home: React.FC = () => {
    return (
        <>
            <Title>Test DEMO</Title>
            <p>This is a DEMO</p>
            <Row>
                {Object.keys(ColorEnum).map((color) => {
                    return (
                        <Card color={color as ColorEnum} key={color}>
                            <h2>Test</h2>
                        </Card>
                    );
                })}
            </Row>
        </>
    );
};

export default Home;
