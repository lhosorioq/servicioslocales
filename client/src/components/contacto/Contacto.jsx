import React from 'react'
import styled from 'styled-components';

const Contacto = ({title, icon, cont1, cont2}) => {
    return (
        <ContactItemStyled >
            <div className="left-content">
                { icon }
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding:1rem;
    /* background-color: var(--background-dark-grey) */
    display: flex;
    align-items: center;
    box-shadow: 0 0 5px rgb(0 0 0 / 95%);
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
        }
    }

    .right-content{
        h6{
            color: var(--);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
        }
    }
`;

export default Contacto
