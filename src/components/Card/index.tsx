import { applyColor, flexCenter } from '@src/styles-utils/functions';
import { ColorEnum } from '@src/styles-utils/themes';
import React from 'react';
import styled from 'styled-components';

interface CardContainerProps {
    readonly color: ColorEnum;
}

const CardContainer = styled.div.attrs<CardContainerProps>((p) => ({
    color: p.color,
}))`
    ${flexCenter('column', 'flex-start')}
    border-radius: 20px;
    padding: 10px 15px;

    ${(p: CardContainerProps) => applyColor(p.color)}
`;

interface CardProps {
    children?: React.ReactNode;
    color?: ColorEnum;
}

const Card = ({ children, color = ColorEnum.primary }: CardProps) => {
    return <CardContainer color={color}>{children}</CardContainer>;
};

export default Card;
