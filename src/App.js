import React, { useState } from 'react';
import Form from './Components/Form';
import CardList from './Components/CardList';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Styling/theme';
import { GlobalStyles } from './Styling/global';
import Trending from './Components/Trending';

import { Layout, MainContainer } from './Styling/styles';
import Nav from './Components/Nav';

const App = () => {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    const [cards, setCards] = useState([]);

    let addNewCard = cardInfo => {
        setCards(cardInfo);
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Layout>
                <GlobalStyles />
                <Nav onClick={toggleTheme} />
                <MainContainer>
                    <Form onSubmit={addNewCard} />
                    <h1>Discover Repositories</h1>
                    <CardList cards={cards} />
                </MainContainer>
                <Trending />
                {/* <UpArrow /> */}
            </Layout>
        </ThemeProvider>
    );
};

export default App;
