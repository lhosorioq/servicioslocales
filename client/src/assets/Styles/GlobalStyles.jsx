import {createGlobalStyle} from "styled-components"

const GlobalStyled = createGlobalStyle`

:root{
    --azul-claro: #7CBFBF;
    --azul-oscuro: #396666;
    --gris-oscuro: #4C5057;
    --gris-claro: #f1f1f1;
    --salmon: #E78F6D;
    --negro: #000;
    --blanco: #fff;
    --primary-color: #f1f1f1;
    --secondary-color: #d7dbdf;
    --border-color: #000000;
    --background-light-color-2: rgba(199, 197, 110, 0.288);
    --white-color: #F6EDD8;
    --fondocolor: #afadadd6;
    --colorlogo: #396666;
    --lineas: #ffffff;
    
} 

*{
    margin: 0;
    padding: 0;
    box-sizing: border box;
}

body{
    background-color: var(--primary-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        color: #000000;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}

span{
    color: var(--black-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}

.contenedor{
    max-width: 980px;
    margin: auto;
}
.sl-navbar{
    background-color: var(--verde-claro) !important;
    font-size: 1rem !important;
}
.sl-navbar a{
    color: #fafafa !important;
    font-size: 1.2rem !important;
}
.sl-navbarItem div{
    color: #fafafa !important;
    font-size: 1rem !important;
}
.sl-navbar-search{
    background-color: var(--verde-oscuro) !important;
    font-size: 1rem !important;
}
.sl-footer{
    background-color: var(--gris-oscuro) !important;
    font-size: 1rem !important;
}
`;
export default GlobalStyled