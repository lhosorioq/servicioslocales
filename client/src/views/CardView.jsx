import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Container, Card, Row, Col, Button,} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { URL } from '../libs/url';
import styled from 'styled-components';
import Icon from '../components/Icons/Icons'

function CardView() {
    
    const { id } = useParams();
    const uri = URL + `/proveedor/imagen/`;
    const [proveedor, setProveedor] = useState(null)

    const loadProveedor = async (param) => {
        await Axios.get(`/user/proveedor/${id}`)
            .then((response) => {
                setProveedor(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        return proveedor;
    };

    useEffect(() => {
        if (!proveedor) {
            loadProveedor()
        }
    })

    if (proveedor) {
        return (
            <Container>
                <h1>{proveedor.nombre}</h1>
                <FuenteH3Styled >
                <h3>{proveedor.msg_description}</h3>
                </FuenteH3Styled>
                <Row>
                    <Col>
                    <Card
                    style={{ width: '30rem' }}
                    className="mb-4 shadow p-3 mb-5 bg-white rounded"
                    >
                    <Card.Img variant="top" src={uri + proveedor._id} />
                    <Card.Body>
                        <Card.Title> {proveedor.nombre} </Card.Title>
                        <Card.Text> {proveedor.msg_description} </Card.Text>
                        <Card.Text> Servicio: {proveedor.actividad} </Card.Text>
                        
                        <Card.Text> Ciudad: {proveedor.ciudad} </Card.Text>
                        <Card.Text>
                            {' '}
                            Departamento: {proveedor.departamento}{' '}
                        </Card.Text>
                        <Button variant="outline-primary">Likes: {proveedor.likes}</Button>&nbsp;&nbsp;
                        <Button variant="outline-danger">DisLikes: {proveedor.doesnotlikes}</Button>
                    </Card.Body>
                </Card>

                    </Col>
                    <Col>
                    <Card
                    style={{ width: '45rem' }}
                    className="mb-4 shadow p-3 mb-5 bg-white rounded"
                >
                    <Card.Body>
                        
                        <Card.Text> Servicio: {proveedor.actividad} </Card.Text>
                        <Card.Text> Email: {proveedor.mail} </Card.Text>
                        <Card.Text>
                            {' '}
                            Direccion: {proveedor.direccion}{' '}
                        </Card.Text>
                        <Card.Text> Telefono: {proveedor.telefono1} </Card.Text>
                        <Card.Text> Telefono: {proveedor.telefono2} </Card.Text>
                        <Card.Text> Descripcion: {proveedor.msg_description} </Card.Text>
                        <ColorIconosStyled>
                        <Card.Text><Icon className="fac fab fa-telegram-plane"></Icon> <a href={proveedor.telegram} target="_blank"> {proveedor.telegram}</a> </Card.Text>
                        <Card.Text><Icon className="what fab fa-whatsapp"></Icon> <a href={proveedor.whatsapp} target="_blank">{proveedor.whatsapp}</a> </Card.Text>
                        <Card.Text><Icon className="fac fab fa-twitter"></Icon> <a href={proveedor.twitter}target="_blank">{proveedor.twitter}</a> </Card.Text>
                        <Card.Text><Icon className="fac fab fa-facebook-f"></Icon><a href={proveedor.facebook} target="_blank"> {proveedor.facebook}</a> </Card.Text>
                        <Card.Text><Icon className="fac fab fa-linkedin"></Icon> <a href={proveedor.linkedin}target="_blank">{proveedor.linkedin}</a> </Card.Text>
                        <Card.Text><Icon className="inst fab fa-instagram"></Icon> <a href={proveedor.onstagram}target="_blank">{proveedor.onstagram}</a> </Card.Text>
                        </ColorIconosStyled>
                        
                    </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>
            
            
        );
    }
    
    return (
        <Container>
        <h1>Esperando</h1>
        </Container>
    )
    
}

const FuenteH3Styled = styled.div`
font-family: 'Raleway', sans-serif;
`;

const ColorIconosStyled = styled.div`
    .fac{
        color: #1877F2;
        
    }
    .what{
        color: #3CB371
    }
    .inst{
        color: #BA55D3
    }
`;

export default CardView;
