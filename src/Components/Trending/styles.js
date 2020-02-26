import styled from 'styled-components';
import { RightContainer } from '../../Styling/styles';

export const TrendingCont = styled(RightContainer)`
    padding: 30px 15px 30px 15px;
    width: 300px;
    height: fit-content;

    hr {
        width: 100%;
        margin-left: 0;
    }

    h3 {
        margin: 30px 0 0 0;
        font-size: 17px;
    }

    p {
        margin: 15px 0 5px 0;
        max-height: 60px;
        overflow: hidden;
        align-self: unset;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 40px;
    }
`;

export const UserIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 7px 7px 0;
`;
