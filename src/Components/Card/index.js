import React from 'react';
import { CardWrap, CardCont } from './styles';
const Card = props => {
    return (
        <CardWrap>
            <CardCont>
                <h4>{props.name}</h4>
                <p>{props.updated_at}</p>
                <p>{props.description}</p>
            </CardCont>
        </CardWrap>
    );
};

export default Card;
