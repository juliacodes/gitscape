import styled from 'styled-components';
import { QUERIES } from '../../Styling/styles';

export const Hamburger = styled.svg`
    position: absolute;
    top: 45px;
    left: 20px;
    display: block;

    @media (${QUERIES.large}) {
        display: none;
    }
`;
