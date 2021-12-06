import React from 'react';
import styled from 'styled-components';
import FormasAnimadas from './FormasAnimadas';
import BgW from './BgSer.jpg';
import TextoAnimado from './TextoAnimado';

const Contenedor = styled.div`
    height: calc(70vh - 50px);
    display: flex;
    padding: 20px;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const LadoI = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
`;

const Titulo = styled.h1`
    width: 60%;
    font-size: 60px;
    color: black;
    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 50px;
    }
`;

const Descripcion = styled.p`
    width: 50%;
    font-size: 16px;
    margin-top: 20px;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Informacion = styled.div`
    width: 60%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    }
`;

const Button = styled.button`
    padding: 15px;
    background: linear-gradient(90deg, #0546d6, #3f89fc);
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

const Right = styled.div`
    width: 30%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const Imagen = styled.img`
    width: 100%;
    box-shadow: 0 0 5px rgb(0 0 0 / 60%);
`;

const Home = () => {
    const seguir = () => {
        window.open('https://twitter.com/ServiciosLocal1', '_blank');
    };
    return (
        <Contenedor className="contenedor">
            <LadoI>
                <Titulo>
                    {' '}
                    <TextoAnimado /> Locales
                </Titulo>
                <Descripcion>
                    Creemos que la conexión entre usarios y proveedores de
                    servicios es importante. Lo que conectamos a lo que
                    necesitas
                </Descripcion>
                <Informacion>
                    <Button
                        onClick={seguir}
                    >
                        Unete a nuestra red
                    </Button>
                </Informacion>
            </LadoI>
            <Right>
                <Imagen src={BgW} />
            </Right>
            <FormasAnimadas />
        </Contenedor>
    );
};

export default Home;
