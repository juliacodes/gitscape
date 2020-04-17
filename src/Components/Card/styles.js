import styled from 'styled-components';
import { QUERIES } from '../../Styling/styles';

export const CardWrap = styled.div`
    width: 100%;
    display: inline-block;
    background-color: ${({ theme }) => theme.overlay};
    border-radius: 25px;
    padding: 15px 28px;
    margin-bottom: 20px;
`;

export const CardCont = styled.div`
    height: 230px;
    position: relative;
    display: flex;
`;

export const LeftContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        align-self: unset;
        max-height: 60px;
        overflow: hidden;
    }

    @media (${QUERIES.large}) {
        width: calc(100% - 70px);
    }
`;

export const Language = styled.div`
    margin: 10px 0 0 0;
    height: auto !important;
    max-width: 72px;
    text-align: center;
    padding: 5px;
    background-color: #e8f3ff;
    color: #1581ff;
    border-radius: 5px;
    font-size: 12px;
`;

export const RightContent = styled.div`
    position: absolute;
    right: -45px;
    top: 0;
    height: 100%;
    display: none;
    flex-direction: column;
    justify-content: space-evenly;

    @media (${QUERIES.large}) {
        display: flex;
    }
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
