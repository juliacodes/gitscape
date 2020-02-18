import React from 'react';
import { CardWrap, CardCont } from './styles';
const Card = props => {
    return (
        <CardWrap>
            <CardCont>
                <h2>{props.name}</h2>
                <p>{props.owner.login}</p>
            </CardCont>
        </CardWrap>
    );
};

export default Card;
