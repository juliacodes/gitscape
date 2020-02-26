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
    const [scroll, setScroll] = useState(false);

    window.addEventListener('scroll', handleScroll);
    function handleScroll() {
        if (window.pageYOffset >= 500) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

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
                <h2
                    style={
                        scroll
                            ? { position: 'fixed', right: 40, bottom: 0 }
                            : { display: 'none' }
                    }
                >
                    SCROLLED DOWN
                </h2>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
