import { createGlobalStyle } from 'styled-components';
import { flexStretch } from './functions';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    width: 500px;
    ${flexStretch('column')}
}
`;

export default GlobalStyle;
