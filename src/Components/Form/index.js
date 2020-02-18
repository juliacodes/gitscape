import React, { useState } from 'react';
import { FormContainer } from './styles';
import axios from 'axios';

const Form = props => {
    const [query, setQuery] = useState('');
    //const [language, setLanguage] = useState('');

    let handleSubmit = event => {
        event.preventDefault();
        axios
            .get(
                `https://api.github.com/search/repositories?q=${query}+language:javascript&sort=stars&order=desc`
                // call for users
                //https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000
            )
            .then(resp => {
                props.onSubmit(resp.data.items);
                console.log(resp.data.items);
                setQuery('');
                // setLanguage('');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M15.4763 14.3165L12.7479 11.6102C13.807 10.2897 14.3199 8.61357 14.1811 6.92652C14.0423 5.23947 13.2624 3.6697 12.0018 2.54C10.7412 1.41029 9.09566 0.806519 7.40355 0.852821C5.71143 0.899123 4.10137 1.59198 2.90442 2.78894C1.70746 3.98589 1.0146 5.59595 0.968299 7.28807C0.921997 8.98018 1.52577 10.6257 2.65548 11.8863C3.78518 13.147 5.35495 13.9268 7.042 14.0656C8.72905 14.2044 10.4051 13.6915 11.7257 12.6324L14.432 15.3388C14.5004 15.4077 14.5817 15.4624 14.6713 15.4997C14.7609 15.5371 14.8571 15.5563 14.9541 15.5563C15.0512 15.5563 15.1474 15.5371 15.237 15.4997C15.3266 15.4624 15.4079 15.4077 15.4763 15.3388C15.6088 15.2016 15.6829 15.0184 15.6829 14.8276C15.6829 14.6369 15.6088 14.4537 15.4763 14.3165V14.3165ZM7.59996 12.6324C6.5818 12.6324 5.5865 12.3305 4.73992 11.7648C3.89335 11.1992 3.23353 10.3952 2.84389 9.45451C2.45426 8.51385 2.35231 7.47877 2.55094 6.48017C2.74958 5.48157 3.23987 4.5643 3.95982 3.84434C4.67977 3.12439 5.59705 2.6341 6.59565 2.43547C7.59425 2.23683 8.62933 2.33878 9.56999 2.72841C10.5106 3.11805 11.3146 3.77787 11.8803 4.62444C12.446 5.47102 12.7479 6.46632 12.7479 7.48448C12.7479 8.8498 12.2055 10.1592 11.2401 11.1246C10.2747 12.09 8.96528 12.6324 7.59996 12.6324V12.6324Z'
                    fill='black'
                />
            </svg>

            <input
                type='text'
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder='search by keyword'
                required
            />
            {/* <input
                type='text'
                value={language}
                onChange={event => setLanguage(event.target.value)}
                placeholder='language'
                required
            /> */}
            <button type='submit'>Search</button>
        </FormContainer>
    );
};

export default Form;
