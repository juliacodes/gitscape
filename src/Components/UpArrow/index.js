import React, { useState } from 'react';
import { UpArrowBtn } from './styles';

const UpArrow = () => {
    const [scroll, setScroll] = useState(false);

    window.addEventListener('scroll', handleScroll);
    function handleScroll() {
        if (window.pageYOffset >= 500) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    function scrollTop() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <>
            {scroll && (
                <UpArrowBtn onClick={scrollTop}>
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M12.3536 10.6464C12.1583 10.4512 11.8417 10.4512 11.6464 10.6464L6.64645 15.6464C6.28942 16.0035 5.71058 16.0035 5.35355 15.6464C4.99653 15.2894 4.99653 14.7106 5.35355 14.3536L10.9393 8.76777C11.5251 8.18198 12.4749 8.18198 13.0607 8.76777L18.6464 14.3536C19.0035 14.7106 19.0035 15.2894 18.6464 15.6464C18.2894 16.0035 17.7106 16.0035 17.3536 15.6464L12.3536 10.6464Z'
                            fill='black'
                            stroke='black'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                </UpArrowBtn>
            )}
        </>
    );
};

export default UpArrow;
