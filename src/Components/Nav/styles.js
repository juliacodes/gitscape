import styled from 'styled-components';
import Logo from '../../Images/logo.png';
import Check from '../../Images/check.png';
export const NavContent = styled.div`
    width: 20vw;
    min-width: 240px;
    max-width: 240px;
    height: 100vh;
    background-color: ${({ theme }) => theme.overlay};
    position: fixed;
`;

export const section = styled.div`
    width: 30vw;
    height: 100vh;
`;

export const LogoCont = styled.div`
    background-image: url(${Logo});
    width: 160px;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 150px;
`;

export const LinkCont = styled.div`
    width: 100%;
    height: auto;
    padding-left: 53px;
    display: flex;
    align-items: center;
    margin: 15px 0;

    :hover {
        background-color: ${({ theme }) => theme.lines};
    }

    svg {
        margin-right: 15px;
        width: 23px;
    }
    h3 {
        padding: 15px 0 15px 0;
        margin: 0;
    }
`;

export const Menu = styled.div`
    margin-top: 59px;

    em {
        padding-left: 55px;
        padding-bottom: 15px;
    }
`;

export const ToggleCont = styled.div`
    position: absolute;
    bottom: 40px;
    left: 50px;
`;

export const Input = styled.input`
    width: 140px;
    margin: 10px 0 12px 55px;
    border: none;
    outline: none;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.paragraph};
    padding: 12px 12px;
    font-weight: 900;
    font-size: 11px;

    ::placeholder {
        color: ${({ theme }) => theme.paragraph};
    }
`;

export const Checkbox = styled.div`
    margin: 10px 0 0 55px;
    display: flex;
    align-items: center;
    position: relative;

    input,
    input:checked {
        font-weight: 900;
        height: 20px;
        width: 20px;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        border: none;
        border-radius: 4px;
        outline: none;
        transition-duration: 0.3s;
        background-color: ${({ theme }) => theme.main};
        cursor: pointer;
    }

    input:checked {
        background-color: #1371e0;

        ::after {
            position: absolute;
            content: '';
            background-image: url(${Check});
            top: 6px;
            left: 4px;
            width: 16px;
            height: 20px;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }

    label {
        margin-left: 10px;
    }
`;

export const RightContent = styled.div`
    position: absolute;
    right: 0;
    height: 100%;
`;
