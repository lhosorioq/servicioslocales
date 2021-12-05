import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../../assets/Styles/Layouts';
import Title from '../Titulos/Title';
import TarjetaPerfil from './TarjetasPerfil';
import HeynarS from '../../assets/img/heynar.jpg';
import JorgeL from '../../assets/img/jorge.jpg';
import LuisHO from '../../assets/img/luigi.jpg';
import Lorena from '../../assets/img/Lorena.jpg'
import Marcela from '../../assets/img/Marcela.jpg'

function EquipoComp() {
    return (
        <InnerLayout>
            <EquipoStyled >
                <Title title={'Equipo'} span={'Equipo'} />
                <div className="equipos">
                    <TarjetaPerfil 
                        image={Lorena} 
                        title={'Leydi Lorena Garcia'} 
                        subtitulo={'Developer'}
                        paragraph={'El Frontend y el CSS es lo que siempre quiero Desarrollar  '}
                        email={'legas4884@gmail.com'}
                    />
                    <TarjetaPerfil 
                        image={Marcela} 
                        title={'Marcela Patiño Ardila'} 
                        subtitulo={'Developer'}
                        paragraph={'Apasionada al Desarrollo Frontend'}
                        email={'ardilamarcela42@gmail.com'}
                    />
                    <TarjetaPerfil 
                        image={HeynarS} 
                        title={'Heynar Soto Holguin'} 
                        subtitulo={'Product Owner'}
                        paragraph={' Diseño 3D. Me gusta el desarrollo web'}
                        email={'Email: heynar76@hotmail.com'}
                    />
                    <TarjetaPerfil 
                        image={JorgeL} 
                        title={'Jorge Luis Velasquez Vanegas'} 
                        subtitulo={'Developer'}
                        paragraph={'Tecnólogo electrónico. Apasionado de la tecnología y el desarrollo de software..'}
                        email={'Email: jorgeluisvelasquezv@gmail.com'}
                    />
                    <TarjetaPerfil 
                        image={LuisHO} 
                        title={'Luis Humberto Osorio Quiceno'}
                        subtitulo={'Scrum Master'}
                        paragraph={'Ingeniero de Sistemas Programador de sistemas de información enfocado al desarrollo de aplicaciones web.'}
                        email={'Email: lhosorio@gmail.com'}
                        
                    /> 
                </div>
            </EquipoStyled>
        </InnerLayout>
    )
}

const EquipoStyled = styled.section`
    .equipos{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:1500px){
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width:1230px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:855px){
            grid-template-columns: repeat(1, 1fr);
        }
        
    }
`;

export default EquipoComp;