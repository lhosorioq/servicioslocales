import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MainLayout } from '../../assets/Styles/Layouts'
import styled from 'styled-components'
import Title from '../Titulos/Title'
import TarjetasMision from './TarjetasMision'
import  logo  from '../../assets/img/logosl.png'
import  utp  from '../../assets/img/utp.png'
import  mintic  from '../../assets/img/mintic.png'

const AcercaDe = () => {
    return (
        <Container className="contenedor">
            <MainLayout>
            <EquipoStyled >
                <Title title={'Acerca De'} span={'Acerca De'} />
                <Row>
                    <Col md={4}>
                        <img src={mintic} width="100%"  alt="" />
                    </Col>
                    <Col md={4}>
                        <img src={utp} width="100%"  alt="" />
                    </Col>
                    <Col md={4}>
                        <img src={logo} width="100%"  alt="" />
                    </Col>
                </Row>
                <div className="equipos">
                        <Row>
                            <Col md={9} >
                            <TarjetasMision 
                            paragraph={'Somos un grupo de emprendedores que por medio del conocimiento en Programacion, llevamos las ideas en proyectos.Empezamos una carrera por lineas separadas, que con el paso del tiempo se fueron uniendo hasta formar un gran  Tecnologo en Electronica, Tecnologo en Alimentos, Bachillere e ingenieros de Sistemas, nos unimos formando un excelente grupo interdisciplinario aportando los mejores conocimientos en cada area de experiencia y llevandolo al mundo del desarrollo, para la creacion de empresa. '}
                            title={'MISION'} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={9} >
                            <TarjetasMision 
                            paragraph={'Seguiremos brindando una mejor cooperación entre nuestros proveedores y usuario mediante la innovación, manteniendo nuestra eficiencia y excelencia, siempre teniendo en cuenta las necesidades de nuestros clientes.'}
                            title={'VISION'} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={9} >
                            <TarjetasMision 
                            paragraph={'Empezamos una carrera por lineas separadas, que con el paso del tiempo se fueron uniendo hasta formar un gran G5. Tecnologo en Electronica, Tecnologo en Alimentos, Bachillere e ingenieros de Sistemas, nos unimos formando un excelente grupo interdisciplinario aportando los mejores conocimientos en cada area de experiencia y llevandolo al mundo del desarrollo, para la creacion de empresa. '}
                            title={'HISTORIA'} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={9} >
                            <TarjetasMision 
                            paragraph={'Somos un grupo de Emprendedores que por medio del conocimiento en desarrollo Web logramos plasmar una idea personal en un gran proyecto, para el beneficio de todas las comunidades en el país. '}
                            title={'QUIENES SOMOS'} />
                            </Col>
                        </Row>
                </div>
            </EquipoStyled>
        </MainLayout>
        </Container>
    )
}

const EquipoStyled = styled.section`
    .equipos{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:3000px){
            flex-direction: column;
        }
        @media screen and (max-width:2000px){
            grid-template-columns: repeat(1, 1fr);
        }
        @media screen and (max-width:1230px){
            grid-template-columns: repeat(1, 1fr);
        }
        @media screen and (max-width:855px){
            grid-template-columns: repeat(1, 1fr);
        }
        
    }

`;

export default AcercaDe
