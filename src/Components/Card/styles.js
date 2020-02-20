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
    height: 200px;
    position: relative;
    display: flex;
`;

export const LeftContent = styled.div`
    width: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        align-self: unset;
    }
`;

export const RightContent = styled.div`
    position: absolute;
    right: -45px;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Count = styled.div`
    width: 70px;
    padding: 1px 6px;
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.overlay};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
