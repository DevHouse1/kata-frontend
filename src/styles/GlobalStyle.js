import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
  }

  h1, h2, h3 {
    color: #333;
  }

  p {
    color: #555;
  }
  nav {
    display: flex;
    justify-content: center;
  }
  nav ul {
    display: flex;
    width: 200px;
    justify-content: space-around;
    list-style: none;
  }
`;

export default GlobalStyles;
