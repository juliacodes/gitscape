import React, { useState } from 'react';
import Form from './Components/Form';
import CardList from './Components/CardList';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Styling/theme';
import { GlobalStyles } from './Styling/global';
import {
    Container,
    Layout,
    MainContainer,
    RightContainer
} from './Styling/styles';
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
                <RightContainer>
                    <Container
                        style={{
                            flexDirection: 'row',
                            alignItems: 'baseline',
                            margin: '30px 15px 0 15px'
                        }}
                    >
                        <svg
                            width='16'
                            height='15'
                            viewBox='0 0 16 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            style={{ marginRight: 10 }}
                        >
                            <g clip-path='url(#clip0)'>
                                <path
                                    d='M7.85033 1.45696C7.98617 1.03887 8.57766 1.03887 8.71351 1.45696L9.96301 5.30254C10.0238 5.48952 10.198 5.61611 10.3946 5.61611H14.4381C14.8777 5.61611 15.0605 6.17865 14.7048 6.43704L11.4336 8.81374C11.2745 8.9293 11.208 9.13413 11.2687 9.32111L12.5182 13.1667C12.6541 13.5848 12.1755 13.9324 11.8199 13.6741L8.54865 11.2974C8.3896 11.1818 8.17423 11.1818 8.01518 11.2974L4.74393 13.674C4.38828 13.9324 3.90976 13.5848 4.04561 13.1667L5.29511 9.32111C5.35586 9.13413 5.28931 8.9293 5.13026 8.81374L1.85901 6.43704C1.50336 6.17865 1.68614 5.61611 2.12575 5.61611H6.16923C6.36583 5.61611 6.54007 5.48952 6.60082 5.30254L7.85033 1.45696Z'
                                    stroke='#898989'
                                    stroke-width='1.43663'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0'>
                                    <rect
                                        x='0.729095'
                                        y='0.128662'
                                        width='15.1056'
                                        height='14.3663'
                                        fill='white'
                                    />
                                </clipPath>
                            </defs>
                        </svg>

                        <h4 style={{ fontSize: 19 }}>Featured Repos</h4>
                    </Container>
                    <hr />
                </RightContainer>

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
