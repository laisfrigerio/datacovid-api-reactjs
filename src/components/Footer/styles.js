import styled from 'styled-components';
import theme from '../../styles/theme';

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 70px;
    background-color: ${theme.colors.mainColor};

    p {
        font-size: 12px;
        color: ${theme.colors.secundaryColor};
        margin-top: 30px;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.secundaryColor};

        &:hover {
            color: ${theme.colors.darkMainColor};
        }
    }
`;

export default Footer;