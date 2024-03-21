import { css } from 'styled-components';
import { ColorEnum } from './themes';

export function applyColor(color: ColorEnum) {
    return css`
        color: ${(p) => p.theme.fonts[color].toString()};
        background: ${(p) => p.theme.theme[color].toString()};
    `;
}

export function flexCenter(flexDirection = 'column', justifyContent = 'center', alignContent = 'center') {
    return css`
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: center;
        align-content: ${alignContent};
    `;
}

export function flexStretch(flexDirection = 'column', justifyContent = 'flex-start', alignContent = 'center') {
    return css`
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: stretch;
        align-content: ${alignContent};
    `;
}
