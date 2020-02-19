import styled from 'styled-components';
import { COLORS } from '../../Styling/styles';

export const FormContainer = styled.form`
    background-color: ${({ theme }) => theme.overlay};
    height: 70px;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 12px;
    padding: 10px 20px;
    position: relative;

    .search {
        margin-right: 15px;

        path {
            fill: ${({ theme }) => theme.search};
        }
    }

    input {
        height: 35px;
        border: none;
        background-color: ${({ theme }) => theme.overlay};
        width: 100%;
        outline: none;
    }
`;
export const FilterCont = styled.div`
    width: auto;
    height: 100%;
    border-left: 1px solid ${({ theme }) => theme.lines};
    padding-left: 30px;
    position: absolute;
    right: 130px;
`;

export const Filter = styled.svg`
    height: 100%;
    margin-right: 20px;
    path {
        fill: ${({ theme }) => theme.paragraph};
    }
`;

export const FilterDrop = styled.div`
    position: absolute;
    width: 140px;
    height: 190px;
    background-color: ${({ theme }) => theme.overlay};
    margin-top: 10px;
    right: 0;
    border-radius: 8px;
    padding: 20px 15px;

    p {
        color: ${({ theme }) => theme.heading};
        font-size: 17px;
        margin: 20px 0;
    }
`;

export const Search = styled.button`
    position: absolute;
    right: 20px;
    height: 40px;
    width: 90px;
    border-radius: 6px;
    background-color: ${COLORS.pink};
    color: white;
    border: none;
    outline: none;
`;
