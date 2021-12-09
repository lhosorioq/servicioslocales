import {createGlobalStyle} from "styled-components"

const GlobalStyled = createGlobalStyle`

:root{
    --primario-claro: #7CBFBF;
    --primario-oscuro: #396666;
    --gris-oscuro: #4C5057;
    --gris-claro: #f1f1f1;
    --salmon: #E78F6D;

    --primary-color: #f1f1f1;
    --secondary-color: #d7dbdf;
    --border-color: #000000;
    --background-light-color-2: rgba(199, 197, 110, 0.288);
    --white-color: #F6EDD8;
    --fondocolor: #afadadd6;
    --colorlogo: #396666;
    --lineas: #ffffff;
    --botton: #e7906dc0;
    --negro: #000;
    --blanco: #fff;
}

        



*{
    margin: 0;
    padding: 0;
    box-sizing: border box;
}

body{
    background-color: var(--gris-claro);
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

    color: var(--gris-oscuro);
    font-family: 'Raleway', sans-serif;

    span{
        font-size: 4rem;
        color: #000000;
        /* font-family: 'Raleway', sans-serif; */
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
    color: var(--blanco);
    font-size: 1.2rem;
    padding-bottom: .6rem;
    font-family: 'Raleway', sans-serif;
}

h2{
    color: var(--negro);
    font-size: 4rem;
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
}

.contenedor{
    max-width: 980px;
    margin: auto;
}
.sl-navbar{
    background-color: var(--primario-claro) !important;
    font-size: 1rem !important;
    z-index: 2;
    
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
    background-color: var(--primario-oscuro) !important;
    font-size: 1rem !important;
    z-index:1;
}
.sl-footer{
    background-color: var(--gris-oscuro) !important;
    font-size: 1rem !important;
}
`;
export default GlobalStyled