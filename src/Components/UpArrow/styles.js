import styled from 'styled-components';

export const UpArrowBtn = styled.button`
    position: fixed;
    left: 73vw;
    bottom: 40px;
    background-color: ${({ theme }) => theme.overlay};
    border: none;
    border-radius: 10px;
    height: 46px;
    width: 46px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);
    outline: none;

    :hover {
        path {
            fill: ${({ theme }) => theme.lines};
            stroke: ${({ theme }) => theme.lines};
        }
    }

    path {
        fill: ${({ theme }) => theme.search};
        stroke: ${({ theme }) => theme.search};
        transition-duration: 0.2s;
    }
`;
