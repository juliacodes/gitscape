/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import {
    FormContainer,
    Search,
    FilterCont,
    Filter,
    FilterDrop
} from './styles';
import axios from 'axios';

const Form = props => {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState(false);
    const [sort, setSort] = useState('stars');
    const [order, setOrder] = useState('desc');

    //const [language, setLanguage] = useState('');

    let handleSubmit = event => {
        event.preventDefault();
        axios
            .get(
                `https://api.github.com/search/repositories?q=${query}+language:javascript&sort=${sort}&order=${order}`
                // user call 🌙 https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000
            )
            .then(resp => {
                props.onSubmit(resp.data.items);
                console.log(resp.data.items);
                // setQuery('');
            })
            .catch(error => {
                console.log(error);
            });
    };

    let handleSort = () => {
        let currentOrder = '';
        setSort('stars');

        order === 'asc'
            ? (setOrder('desc'), (currentOrder = 'desc'))
            : (setOrder('asc'), (currentOrder = 'asc'));

        axios
            .get(
                `https://api.github.com/search/repositories?q=${query}+language:javascript&sort=stars&order=${currentOrder}`
            )
            .then(resp => {
                props.onSubmit(resp.data.items);
                console.log(resp.data.items);
            })
            .catch(error => {
                console.log(error);
            });
    };

    let handleTrending = () => {
        // https://github.com/huchenme/github-trending-api
    };

    let handleFilter = () => {
        filter ? setFilter(false) : setFilter(true);
    };

    let handleRecent = () => {
        let sortUpdated = 'updated';
        setSort('updated');

        axios
            .get(
                `https://api.github.com/search/repositories?q=${query}+language:javascript&sort=${sortUpdated}&order=desc`
            )
            .then(resp => {
                props.onSubmit(resp.data.items);
                console.log(resp.data.items);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <svg
                className='search'
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
            <FilterCont onClick={handleFilter}>
                <Filter
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick=''
                >
                    <path
                        d='M6.79618 15.6787C6.79618 16.0016 7.05516 16.2624 7.37616 16.2624H12.1619C12.4829 16.2624 12.7419 16.0016 12.7419 15.6787V12.104H6.79618V15.6787ZM16.4826 3.20361H3.05546C2.60862 3.20361 2.32957 3.69058 2.5539 4.07906L6.59008 10.9367H12.9517L16.9878 4.07906C17.2085 3.69058 16.9295 3.20361 16.4826 3.20361V3.20361Z'
                        fill='#C8C8C8'
                    />
                </Filter>
                {filter && (
                    <FilterDrop>
                        <em>sort by</em>
                        <p onClick={handleRecent}>Most Recent</p>
                        <p onClick={handleSort}>Most Stars</p>
                        <p onClick={handleSort}>Least Stars</p>
                        <p>Trending</p>
                    </FilterDrop>
                )}
            </FilterCont>
            <Search type='submit'>Search</Search>
        </FormContainer>
    );
};

export default Form;
