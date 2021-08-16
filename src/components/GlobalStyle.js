import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box
    }

    body{
        background: #1d1d1d;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }

    h2{
            font-weight: lighter;
            font-size: 4rem;
        }

    h3{
        color:white;
    }

    h4{
        font-size:bold;
        color: #23d997;
    }

    a{
        font-size: 1.1.rem;
    }

    span{
        font-size:bold;
        color: #23d997;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%normal;
    }
`;

export default GlobalStyle;