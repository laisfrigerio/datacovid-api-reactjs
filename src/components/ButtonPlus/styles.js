import styled from 'styled-components';
import theme from '../../styles/theme';

const ButtonPlus = styled.div`
    width: 100%;
    height: 150px;

    button {
        height: 60px;
        width: 60px;
        border-radius: 60px;
        background-color: ${theme.colors.secundaryColor};
        font-size: 50px;
        color: ${theme.colors.mainColor};
        border: 3px solid ${theme.colors.mainColor};
        outline: none;

        &:hover {
            color: ${theme.colors.secundaryColor};
            background-color: ${theme.colors.mainColor};
            cursor: pointer;
            box-shadow: 4px 3px 2px rgba(192, 201, 184);
        }
    }
`;

export default ButtonPlus;