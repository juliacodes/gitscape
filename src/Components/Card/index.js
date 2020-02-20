import React from 'react';
import Moment from 'react-moment';
import { CardWrap, CardCont } from './styles';
const Card = props => {
    return (
        <CardWrap>
            <CardCont>
                <h4>{props.name}</h4>
                <Moment format='MMMM Do, YYYY' withTitle>
                    {props.updated_at}
                </Moment>
                <p>{props.description}</p>
                <p>{props.stargazers_count}</p>
            </CardCont>
        </CardWrap>
    );
};

export default Card;
