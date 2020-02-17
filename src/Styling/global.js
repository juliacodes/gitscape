import { createGlobalStyle } from 'styled-components';
import 'circular-std';

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

  h1, h2{
    font-weight: 900;
    font-size: 42px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    padding: 0;
    margin: 30px 0;
    color: ${({ theme }) => theme.heading};
  }

  h2{
    font-size: 32px;
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
    font-weight: 900;
    font-size: 13px;
    line-height: 10px;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.paragraph};
    text-transform: uppercase;
    font-style: normal;
  }
`;
