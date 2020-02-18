import React from 'react';

const Card = props => {
    return (
        <div style={{ margin: '1em' }}>
            <div>
                <div style={{ fontWeight: 'bold' }}>{props.id}</div>
                <div>{props.id}</div>
            </div>
        </div>
    );
};

export default Card;
