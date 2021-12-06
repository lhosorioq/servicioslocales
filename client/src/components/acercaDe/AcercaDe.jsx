import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MainLayout } from '../../assets/Styles/Layouts'
import styled from 'styled-components'
import Title from '../Titulos/Title'
import TarjetasMision from './TarjetasMision'


const AcercaDe = () => {
    return (
        <Container>
            <MainLayout>
            <EquipoStyled >
                <Title title={'Acerca De'} span={'Acerca De'} />
                <div className="equipos">
                        <Row>
                            <Col md={8} >
                            <TarjetasMision 
                            title={'MISION'} 
                            paragraph={'Somos un grupo de emprendedores que por medio del conocimiento en Programacion, llevamos las ideas en proyectos.Empezamos una carrera por lineas separadas, que con el paso del tiempo se fueron uniendo hasta formar un gran  Tecnologo en Electronica, Tecnologo en Alimentos, Bachillere e ingenieros de Sistemas, nos unimos formando un excelente grupo interdisciplinario aportando los mejores conocimientos en cada area de experiencia y llevandolo al mundo del desarrollo, para la creacion de empresa. '}
                            
                        />
                            
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col md={8} >
                            <TarjetasMision 
                            title={'VISION'} 
                            paragraph={'Seguiremos brindando una mejor cooperación entre nuestros proveedores y usuario mediante la innovación, manteniendo nuestra eficiencia y excelencia, siempre teniendo en cuenta las necesidades de nuestros clientes.'}
                            
                        />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8} >
                            <TarjetasMision 
                            title={'hISTORIA'} 
                            paragraph={'Empezamos una carrera por lineas separadas, que con el paso del tiempo se fueron uniendo hasta formar un gran G5. Tecnologo en Electronica, Tecnologo en Alimentos, Bachillere e ingenieros de Sistemas, nos unimos formando un excelente grupo interdisciplinario aportando los mejores conocimientos en cada area de experiencia y llevandolo al mundo del desarrollo, para la creacion de empresa. '}
                            
                        />
                            </Col>

                            
                        </Row>
                        <Row>
                            <Col md={8} >
                            <TarjetasMision 
                            title={'QUIENES SOMOS'} 
                            paragraph={'Somos un grupo de Emprendedores que por medio del conocimiento en desarrollo Web logramos plasmar una idea personal en un gran proyecto, para el beneficio de todas las comunidades en el país. '}
                            
                        />
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
