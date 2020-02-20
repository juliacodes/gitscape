import React from 'react';
import Moment from 'react-moment';
import {
    CardWrap,
    CardCont,
    RightContent,
    LeftContent,
    Count,
    Language
} from './styles';
var numeral = require('numeral');
const Card = props => {
    return (
        <CardWrap>
            <CardCont>
                <LeftContent>
                    <a href={props.html_url}>
                        <h4>{props.name}</h4>
                    </a>
                    <Moment format='MMMM Do, YYYY' withTitle>
                        {props.updated_at}
                    </Moment>
                    <p>{props.description}</p>
                    <Language>{props.language}</Language>
                </LeftContent>
                <RightContent>
                    <Count>
                        <svg
                            width='15'
                            height='14'
                            viewBox='0 0 15 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M7.17713 0.935129C7.31396 0.513996 7.90975 0.513995 8.04659 0.935128L9.30518 4.80869C9.36638 4.99702 9.54189 5.12454 9.73991 5.12454H13.8128C14.2556 5.12454 14.4397 5.69117 14.0815 5.95144L10.7864 8.34543C10.6262 8.46183 10.5592 8.66815 10.6204 8.85649L11.879 12.73C12.0158 13.1512 11.5338 13.5014 11.1756 13.2411L7.88054 10.8471C7.72033 10.7307 7.50339 10.7307 7.34318 10.8471L4.04814 13.2411C3.6899 13.5014 3.20789 13.1512 3.34473 12.73L4.60332 8.85649C4.66452 8.66815 4.59748 8.46183 4.43727 8.34543L1.14223 5.95144C0.78399 5.69117 0.968099 5.12454 1.4109 5.12454H5.4838C5.68183 5.12454 5.85734 4.99702 5.91853 4.80869L7.17713 0.935129Z'
                                fill='#FEF499'
                            />
                        </svg>

                        <p>{numeral(props.stargazers_count).format('0a')}</p>
                    </Count>
                    <Count>
                        <svg
                            width='12'
                            height='12'
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M5.43201 7.44939H6.57476V8.59214H5.43201V7.44939ZM5.43201 2.87837H6.57476V6.30663H5.43201V2.87837ZM5.99767 0.0214844C2.84367 0.0214844 0.289612 2.58125 0.289612 5.73526C0.289612 8.88926 2.84367 11.449 5.99767 11.449C9.15739 11.449 11.7172 8.88926 11.7172 5.73526C11.7172 2.58125 9.15739 0.0214844 5.99767 0.0214844ZM6.00339 10.3063C3.4779 10.3063 1.43237 8.26075 1.43237 5.73526C1.43237 3.20977 3.4779 1.16424 6.00339 1.16424C8.52887 1.16424 10.5744 3.20977 10.5744 5.73526C10.5744 8.26075 8.52887 10.3063 6.00339 10.3063Z'
                                fill='#8C69EE'
                            />
                        </svg>

                        <p>{numeral(props.open_issues).format('0a')}</p>
                    </Count>
                    <Count>
                        <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M6.68752 11.0225C6.83051 11.0225 6.96765 10.9657 7.06876 10.8646C7.16987 10.7634 7.22667 10.6263 7.22667 10.4833C7.22667 10.3403 7.16987 10.2032 7.06876 10.1021C6.96765 10.001 6.83051 9.94416 6.68752 9.94416C6.54453 9.94416 6.40739 10.001 6.30628 10.1021C6.20517 10.2032 6.14837 10.3403 6.14837 10.4833C6.14837 10.6263 6.20517 10.7634 6.30628 10.8646C6.40739 10.9657 6.54453 11.0225 6.68752 11.0225V11.0225ZM7.24447 8.96451C7.602 9.09582 7.90175 9.34905 8.09095 9.67962C8.28015 10.0102 8.34666 10.3969 8.27878 10.7717C8.2109 11.1465 8.01298 11.4853 7.71986 11.7285C7.42674 11.9717 7.05721 12.1037 6.67634 12.1013C6.29546 12.0989 5.92765 11.9621 5.63767 11.7152C5.34768 11.4683 5.15411 11.1269 5.09103 10.7513C5.02795 10.3757 5.0994 9.98985 5.29281 9.66172C5.48622 9.3336 5.78918 9.08423 6.14837 8.95751V8.39301C6.14837 8.35311 6.14999 8.31322 6.15268 8.27386C6.13655 8.20274 6.10615 8.13564 6.06334 8.07661C6.02052 8.01758 5.96618 7.96784 5.90359 7.93042L4.23976 6.93568C3.99971 6.79209 3.80099 6.5887 3.66303 6.34536C3.52506 6.10203 3.45256 5.82708 3.4526 5.54736V4.46042C3.09272 4.33323 2.78939 4.08291 2.59623 3.7537C2.40307 3.42449 2.33251 3.03758 2.39704 2.66138C2.46156 2.28518 2.65701 1.9439 2.94883 1.69787C3.24065 1.45184 3.61006 1.31689 3.99175 1.31689C4.37345 1.31689 4.74285 1.45184 5.03468 1.69787C5.3265 1.9439 5.52194 2.28518 5.58647 2.66138C5.65099 3.03758 5.58044 3.42449 5.38728 3.7537C5.19412 4.08291 4.89079 4.33323 4.53091 4.46042V5.54736C4.53094 5.64059 4.55515 5.73221 4.60117 5.81329C4.64719 5.89437 4.71345 5.96213 4.79347 6.00995L6.4573 7.00523C6.54209 7.05604 6.62204 7.11451 6.69615 7.17992C6.77043 7.11448 6.85056 7.05601 6.93553 7.00523L8.59936 6.00995C8.67939 5.96213 8.74564 5.89437 8.79166 5.81329C8.83768 5.73221 8.86189 5.64059 8.86193 5.54736V4.46689C8.49943 4.34311 8.19259 4.09474 7.99603 3.76596C7.79947 3.43719 7.72593 3.04934 7.78849 2.67143C7.85106 2.29352 8.04567 1.95006 8.3377 1.70217C8.62973 1.45429 9.00024 1.31805 9.38329 1.3177C9.76334 1.31754 10.1313 1.45121 10.4226 1.69526C10.714 1.93931 10.9101 2.27816 10.9765 2.65235C11.043 3.02654 10.9755 3.41218 10.786 3.74162C10.5965 4.07106 10.2971 4.32325 9.94024 4.45395V5.54736C9.94028 5.82708 9.86777 6.10203 9.72981 6.34536C9.59184 6.5887 9.39313 6.79209 9.15307 6.93568L7.48924 7.93096C7.42666 7.96838 7.37231 8.01811 7.3295 8.07715C7.28668 8.13618 7.25629 8.20328 7.24015 8.2744C7.24285 8.31376 7.24447 8.35365 7.24447 8.39301V8.96451V8.96451ZM3.99175 3.47431C4.13474 3.47431 4.27188 3.41751 4.37299 3.3164C4.4741 3.21529 4.53091 3.07815 4.53091 2.93516C4.53091 2.79217 4.4741 2.65503 4.37299 2.55392C4.27188 2.45281 4.13474 2.396 3.99175 2.396C3.84876 2.396 3.71162 2.45281 3.61051 2.55392C3.5094 2.65503 3.4526 2.79217 3.4526 2.93516C3.4526 3.07815 3.5094 3.21529 3.61051 3.3164C3.71162 3.41751 3.84876 3.47431 3.99175 3.47431ZM9.38329 3.47431C9.52628 3.47431 9.66342 3.41751 9.76453 3.3164C9.86564 3.21529 9.92244 3.07815 9.92244 2.93516C9.92244 2.79217 9.86564 2.65503 9.76453 2.55392C9.66342 2.45281 9.52628 2.396 9.38329 2.396C9.2403 2.396 9.10316 2.45281 9.00205 2.55392C8.90094 2.65503 8.84414 2.79217 8.84414 2.93516C8.84414 3.07815 8.90094 3.21529 9.00205 3.3164C9.10316 3.41751 9.2403 3.47431 9.38329 3.47431Z'
                                fill='#F86E6E'
                            />
                        </svg>

                        <p>{numeral(props.forks).format('0a')}</p>
                    </Count>
                </RightContent>
            </CardCont>
        </CardWrap>
    );
};

export default Card;
