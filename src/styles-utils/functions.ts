import { css } from 'styled-components';
import { ColorModel } from './themes';

export function applyColor(themeName: keyof ColorModel) {
    // TODO Implement
    return css``;
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
