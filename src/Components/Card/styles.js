import styled from 'styled-components';

export const CardWrap = styled.div`
    width: 100%;
    display: inline-block;
    background-color: ${({ theme }) => theme.overlay};
    border-radius: 25px;
    padding: 15px 28px;
    margin-bottom: 20px;
`;

export const CardCont = styled.div`
    height: 160px;
`;
