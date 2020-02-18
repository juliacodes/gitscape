import React, { useState } from 'react';
import Form from './Components/Form';
import CardList from './Components/CardList';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Styling/theme';
import { GlobalStyles } from './Styling/global';
import { Layout, Container } from './Styling/styles';
import Nav from './Components/Nav';

const App = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const [cards, setCards] = useState([]);

    let addNewCard = cardInfo => {
        setCards(cards.concat(cardInfo));
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Layout>
                <GlobalStyles />
                <Nav />
                <Container>
                    <button onClick={toggleTheme}>Toggle theme</button>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <p>Lorem Ipsum</p>
                    <em>hello</em>
                    <Form onSubmit={addNewCard} />
                    <CardList cards={cards} />
                </Container>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
