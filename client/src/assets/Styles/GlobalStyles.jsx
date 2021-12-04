import {createGlobalStyle} from "styled-components"

const GlobalStyled = createGlobalStyle`

:root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #d7dbdf;
    --background-dark-color: #7ac0c0;;
    --background-dark-grey: #fcfcfc;
    --border-color: #000000;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(199, 197, 110, 0.288);
    --white-color: #F6EDD8;
    --font-light-color: #000000;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --fondocolor: #afadadd6;
    --colorlogo: #396666;
    --lineas: #ffffff;

} 

*{
    margin: 0;
    padding: 0;
    box-sizing: border box;
    /* background-color: #7ac0c0; */

}

body{
    background-color: var(--background-dark-color);
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
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}

span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}





`;
export default GlobalStyled