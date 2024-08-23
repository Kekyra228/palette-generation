import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    width: 100%;
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #dedbd2; /* Цвет фона */
    color: #4a5759; /* Основной цвет текста */
  }

  a {
    color: #4a5759;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }


`;

export default GlobalStyles;
