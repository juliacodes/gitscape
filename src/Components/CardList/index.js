import React from 'react';
import Card from '../Card';
import { CardListCont } from './styles';

const CardList = props => (
    <CardListCont>
        {props.cards.map(card => (
            <Card {...card} />
        ))}
    </CardListCont>
);

export default CardList;
