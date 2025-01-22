import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'SF Pro Display', sans-serif;
    background: linear-gradient(135deg, rgba(0, 255, 68, 0.79), rgb(0, 0, 0)); 
    color: #ffffff;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensure the body takes up the full height */
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
