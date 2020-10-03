import styled from 'styled-components';
import theme from '../../styles/theme';

const Card = styled.article`
    width: 100%;
    min-height: 250px;
    background-color: ${theme.colors.mainColor};
    color: ${theme.colors.secundaryColor};
    font-size: 25px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &:hover {
        background-color: ${theme.colors.worldHover};
    }

    p {
        margin-bottom: 10px;
    }

    .world-and-icon{
        display: inline-flex;
        align-items: center;
        margin-bottom: 20px;

        .icon{
            margin-left: 10px;
            font-size: 40px;
        }
    }

    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 360px) {
        font-size: 17px;
    }
`;

export default Card;