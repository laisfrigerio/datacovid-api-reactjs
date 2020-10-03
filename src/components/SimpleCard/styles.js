import styled from 'styled-components';
import theme from '../../styles/theme';

const Card = styled.article`
    min-height: 260px;
    max-height: 350px;
    width: 300px;
    min-width: 300px;
    background-color: ${theme.colors.secundaryColor};
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 4px solid ${theme.colors.secundaryColor};

    &:hover {
        border: 4px solid ${theme.colors.mainColor};
        box-shadow: 4px 3px 2px rgba(192, 201, 184);
    }

    h1 {
        margin-block-start: 0px;
        color: ${theme.colors.secundaryColor};
    }

    .big-name {
        font-size: 20px;
        padding-bottom: 10px;
    }

    .header-card {
        width: 100%;
        min-height: 50px;
        background-color: ${theme.colors.mainColor};
        padding-top: 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        color: ${theme.colors.secundaryColor};

        h2 {
            margin-left: 15px;
        }
    }

    @media only screen and (max-width: 414px) {
        width: 90%;
        margin-left: 0px;
    }
`;

export default Card;