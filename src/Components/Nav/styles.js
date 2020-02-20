import styled from 'styled-components';
import Logo from '../../Images/logo.png';

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
