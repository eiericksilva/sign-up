import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        background-color: #1E192C;
        width: 100%;
        height: 100vh;
        color: #ffffff;
    }
`;
