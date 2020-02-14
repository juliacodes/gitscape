import React, { useState } from 'react';
import Form from './Components/Form';
import CardList from './Components/CardList';

const App = () => {
    const [cards, setCards] = useState([]);

    let addNewCard = cardInfo => {
        setCards(cards.concat(cardInfo));
    };

    return (
        <div>
            <Form onSubmit={addNewCard} />
            <CardList cards={cards} />
        </div>
    );
};

export default App;
