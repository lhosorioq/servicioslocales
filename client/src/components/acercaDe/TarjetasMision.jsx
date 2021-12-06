import React from 'react'
import styled from 'styled-components';

function TarjetasMision({title, paragraph,}) {
    return (
        <ServiceCardStyled >
            <div className="container">
                
                <h4>{title}</h4>
                <p>{paragraph}</p>
                
            </div>
        </ServiceCardStyled >
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--blanco);
    border-left: 1px solid var(--blanco);
    border-top: 8px solid #7ac0c0;
    border-right: 1px solid var(--blanco);
    border-bottom: 1px solid var(--blanco);
    transition: all .4s ease-in-out;
    box-shadow: 0 15px 14px rgb(0 42 177 / 15%);
    &:hover{
        border-top: 8px solid var(--primario-oscuro);
        transform: translateY(3px);
    }
    .container{
        padding: 3rem;
        h4{
            color: var(--font-light-color);
            font-size: 2rem;
            padding: 1rem 0;
            position: relative;
            font-family: 'Raleway', sans-serif;

            &::after{
                content: "";
                width: 4rem;
                background-color: var(--primario-oscuro);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        
        }
        p{
            padding: 1rem 0;
            font-size: 1rem;
            font-family: 'Raleway', sans-serif;
            
    }
    
`;

export default TarjetasMision;