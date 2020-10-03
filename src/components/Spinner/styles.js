import styled from 'styled-components';
import theme from '../../styles/theme';

const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    min-height: 86%;
    display: flex;
    align-items: center;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${theme.colors.mainColor};
        border-radius: 50%;
        animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${theme.colors.mainColor} transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
        }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }

        @keyframes loading-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

export default Spinner;