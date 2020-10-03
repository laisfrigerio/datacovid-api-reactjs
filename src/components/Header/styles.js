import styled from 'styled-components';
import theme from '../../styles/theme';

const Header = styled.header`
    min-height: 80px;
    width: 100%;
    max-height: 110px;
    background-color: ${theme.colors.secundaryColor};
    text-align: center;
    border-bottom: 5px solid ${theme.colors.mainColor};
    position: fixed;
    z-index: 2;
    display: inline-flex;
    justify-content: center;
    padding-top: 20px;
    top: 0;
    left: 0;

    a {
        /* Logo */
        color: ${theme.colors.mainColor};
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        height: fit-content;

        &:hover {
            color: ${theme.colors.worldHover};
        }
    }

    h1 {
        display: inline-flex;
    }

    p {
        color: ${theme.colors.mainColor};
        margin-top: 17px;
        width: min-content;
        font-weight: bold;
        font-size: 20px;
    }
`;

export default Header;