import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        overflow: hidden;
    }

    body {
        background-color: #1E192C;
        width: 100vw;
        height: 100vh;
        color: #ffffff;
    }
`;
