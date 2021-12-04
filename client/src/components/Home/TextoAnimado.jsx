import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function TextoAnimado() {
    return (
        <Contenedor>Servicios</Contenedor>
    )
}

const animation = keyframes`
0% { opacity: 0; transform:translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);  }
25% { opacity: 1; transform:translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
/* 50% { opacity:  0; transform:translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);  }  */
75% { opacity: 1; transform:translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);  }
100% { opacity: 0; transform:translateY(-100) skewY(10deg) skewX(10deg) rotateZ(10deg); filter: blur(10px);  }
`

const Contenedor = styled.span`
    display: inline-block;
    animation-name: ${ animation };
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
`