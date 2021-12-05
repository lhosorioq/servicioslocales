import React from 'react'
import styled from 'styled-components';

function Button({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--botton);
    padding: .8rem 2.5rem;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    position: relative;
    transition: all .4s ease-in-out;
    box-shadow: 0 15px 14px rgb(0 42 177 / 10%);
    
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .2;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--blanco);
    }
`;
export default Button;
