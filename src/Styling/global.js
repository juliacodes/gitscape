import { createGlobalStyle } from 'styled-components';
import 'circular-std';
import { COLORS } from '../Styling/styles';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.heading};
    font-family: CircularStd;
    font-weight: 400;
    transition: all 0.25s linear;
  }

  h1, h2, h3, h4{
    font-weight: 900;
    font-size: 42px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    padding: 0;
    color: ${({ theme }) => theme.heading};
  }

  h2{
    font-size: 32px;
  }

  h3{
    font-size: 17px;
  }

  h4{
    font-size: 23px;
  }

  p{
    color: ${({ theme }) => theme.paragraph};
    font-size: 14px;
    margin: 10px 0;
    line-height: 15px;
    letter-spacing: 0.01em;
    align-self: center;
  }

  em{
    display: block;
    font-weight: 900;
    font-size: 12px;
    line-height: 10px;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.paragraph};
    text-transform: uppercase;
    font-style: normal;
  }

  hr{
    background-color: ${({ theme }) => theme.lines};
    height: 2px;
    border: none;
    margin: 0 20px;
  }

  a {
      text-decoration: none;
  }

  .active{
      background-color: ${COLORS.lightGreen};
      
      h3{
          color: ${COLORS.green} !important;
      }

  }
`;
