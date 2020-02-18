import styled from 'styled-components';
import { COLORS } from '../../Styling/styles';

export const FormContainer = styled.form`
    background-color: ${({ theme }) => theme.overlay};
    height: 60px;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 12px;
    padding: 10px 20px;
    position: relative;

    svg {
        margin-right: 15px;
    }

    input {
        height: 35px;
        border: none;
        background-color: ${({ theme }) => theme.overlay};
        width: auto;
        outline: none;
    }

    button {
        position: absolute;
        right: 20px;
        height: 40px;
        width: 90px;
        border-radius: 6px;
        background-color: ${COLORS.pink};
        color: white;
        border: none;
    }
`;
