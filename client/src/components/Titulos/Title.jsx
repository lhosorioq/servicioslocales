import React from 'react'
import styled from 'styled-components';

const Title = ({title, span}) => {
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: #7ac0c0;
        font-size: 1.5rem;
        font-weight: 500;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        @media screen and (max-width: 496px){
            font-size: 0.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 5.4rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
            top: 90%;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3rem;
            height: .33rem;
            background-color: var(--white-color);
            border-radius: 15px;
            left: 0;
            top: 90%;
        }
        span{
            font-weight: 900;
            color: rgba(25,29,43,.75);
            font-size: 3rem;
            position: absolute;
            left: 0;
            top: 40%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 4rem;
            }
            @media screen and (max-width: 496px){
                font-size: 3rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }
        }
    }
`;

export default Title
