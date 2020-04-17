import styled from 'styled-components';
import { QUERIES } from '../../Styling/styles';

export const CardListCont = styled.div`
    columns: 1;
    padding: 10px 0;
    column-gap: 40px;

    @media (${QUERIES.large}) {
        columns: 2;
        column-gap: 40px;
        padding: 30px 0;
    }
`;
