import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
    const [query, setQuery] = useState('');
    const [language, setLanguage] = useState('');

    let handleSubmit = event => {
        event.preventDefault();

        axios
            .get(
                `https://api.github.com/search/repositories?q=${query}+language:${language}&sort=stars&order=desc`
            )
            .then(resp => {
                props.onSubmit(resp.data.items[0]);
                setQuery('');
                setLanguage('');
                console.log(resp.data.items[0]);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder='Search'
                required
            />
            <input
                type='text'
                value={language}
                onChange={event => setLanguage(event.target.value)}
                placeholder='language'
                required
            />
            <button type='submit'>Add card</button>
        </form>
    );
};

export default Form;
