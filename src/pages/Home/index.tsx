import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: green;
`;

const Home: React.FC = () => {
    return (
        <>
            <Title>Test DEMO</Title>
            <p>This is a DEMO</p>
        </>
    );
};

export default Home;
