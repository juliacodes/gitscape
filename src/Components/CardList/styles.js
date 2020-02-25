import styled from 'styled-components';
import { QUERIES } from '../../Styling/styles';

export const CardListCont = styled.div`
    columns: 1;
    column-gap: 40px;
    padding: 30px 0;

    @media (${QUERIES.medium}) {
        columns: 2;
        column-gap: 40px;
    }
`;
