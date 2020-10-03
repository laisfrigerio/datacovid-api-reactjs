import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
    * { padding: 0; margin: 0; }
    html, body, #root, .app{
        height: 100%;
        background-color: ${theme.colors.bgColor};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .flex-just-alig-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flex-just-center {
        display: flex;
        justify-content: center;
    }
`;

export default GlobalStyle;