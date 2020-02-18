import React from 'react';
import { Container } from '../../Styling/styles';
import { CardCont } from './styles';
const Card = props => {
    return (
        <Container style={{ margin: '1em' }}>
            <CardCont>
                <h1 key={props.id}>{props.repoName}</h1>
                <p>{props.userName}</p>
                <p>{props.description}</p>
                <p>Forks: {props.forks}</p>
                <p>stars: {props.stars}</p>
                <p>issues: {props.issues}</p>
            </CardCont>
        </Container>
    );
};

export default Card;
