import React from 'react';

const Card = props => {
    return (
        <div style={{ margin: '1em' }}>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.owner.login}</h2>
            </div>
        </div>
    );
};

export default Card;
