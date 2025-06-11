import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Lato", sans-serif;
        font-weight: 600;
        font-style: normal;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background:rgb(8, 13, 19);
        color: #fff;
    }
`;