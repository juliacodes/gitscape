import React, { useState } from 'react';
import Form from './Components/Form';

const App = () => {
    const [cards, setCards] = useState([]);

    let addNewCard = cardInfo => {
        setCards(cards.concat(cardInfo));
    };

    return (
        <div>
            <Form onSubmit={addNewCard} />
        </div>
    );
};

export default App;
