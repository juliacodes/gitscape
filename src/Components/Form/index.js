import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
    const [query, setQuery] = useState('');
    const [language, setLanguage] = useState('');
    const [results, setResults] = useState([]);

    let handleSubmit = event => {
        event.preventDefault();

        axios
            .get(
                `https://api.github.com/search/repositories?q=${query}+language:${language}&sort=stars&order=desc`
                // call for users
                //https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000
            )
            .then(resp => {
                props.onSubmit(resp.data.items[0]);
                console.log(resp.data.items);
                for (let i = 0; i < 10; i++) {
                    setResults(results => [
                        ...results,
                        {
                            id: resp.data.items[i].id,
                            repoName: resp.data.items[i].name,
                            userName: resp.data.items[i].owner.login,
                            description: resp.data.items[i].description,
                            forks: resp.data.items[i].forks,
                            issues: resp.data.items[i].open_issues,
                            stars: resp.data.items[i].stargazers_count,
                            link: resp.data.items[i].git_url
                        }
                    ]);
                }
                setQuery('');
                setLanguage('');
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
            <div>
                {results.map(result => (
                    <>
                        <h1 key={result.id}>{result.repoName}</h1>
                        <p>{result.userName}</p>
                        <p>{result.description}</p>
                        <p>Forks: {result.forks}</p>
                        <p>stars: {result.stars}</p>
                        <p>issues: {result.issues}</p>
                    </>
                ))}
            </div>
        </form>
    );
};

export default Form;
