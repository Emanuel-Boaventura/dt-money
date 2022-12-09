import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${p => p.theme.green500};
  }

  body{
    background-color: ${p => p.theme.gray800};
    color: ${p => p.theme.gray100};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

`