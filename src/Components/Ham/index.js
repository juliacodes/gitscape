import React from 'react';
import { Hamburger } from './styles';

const UpArrow = () => {
    // const [scroll, setScroll] = useState(false);

    // window.addEventListener('scroll', handleScroll);
    // function handleScroll() {
    //     if (window.pageYOffset >= 500) {
    //         setScroll(true);
    //     } else {
    //         setScroll(false);
    //     }
    // }

    // function scrollTop() {
    //     window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    // }

    return (
        <Hamburger
            width='23'
            height='14'
            viewBox='0 0 23 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1 1H22'
                stroke='#2F2F2F'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
            />
            <path
                d='M1 7H22'
                stroke='#2F2F2F'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
            />
            <path
                d='M1 13H22'
                stroke='#2F2F2F'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
            />
        </Hamburger>
    );
};

export default UpArrow;
