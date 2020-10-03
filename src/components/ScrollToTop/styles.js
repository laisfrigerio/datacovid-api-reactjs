import styled from 'styled-components';
import theme from '../../styles/theme';

const ScrollToTop = styled.div`
    position: fixed;
    right: 10px;
    bottom: 10px;

    button {
        height: 50px;
        width: 50px;
        background-color: ${theme.colors.mainColor};
        color: ${theme.colors.secundaryColor};
        font-size: 20px;
        border-radius: 30px;
        outline: none;
        border: 2px solid ${theme.colors.secundaryColor};
        cursor: pointer;

        &:hover {
            border: 2px solid ${theme.colors.worldHover};
        }
    }

    .icon {
        font-size: 30px;
    }
`;

export default ScrollToTop;