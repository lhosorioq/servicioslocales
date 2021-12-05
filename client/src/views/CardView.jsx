import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { URL } from '../libs/url';

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
                <Row>
                    <Col>
                    <Card
                    style={{ width: '20rem' }}
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
                    style={{ width: '30rem' }}
                    className="mb-4 shadow p-3 mb-5 bg-white rounded"
                >
                    
                    <Card.Body>
                        <Card.Title> {proveedor.nombre} </Card.Title>
                        <Card.Text> {proveedor.msg_description} </Card.Text>
                        <Card.Text> Servicio: {proveedor.actividad} </Card.Text>
                        <Card.Text> Email: {proveedor.mail} </Card.Text>
                        <Card.Text>
                            {' '}
                            Direccion: {proveedor.direccion}{' '}
                        </Card.Text>
                        <Card.Text> Telefono: {proveedor.telefono1} </Card.Text>
                        <Card.Text> Telefono: {proveedor.telefono2} </Card.Text>
                        <Card.Text> Descripcion: {proveedor.msg_description} </Card.Text>
                        <Card.Text> Telegram: {proveedor.telegram} </Card.Text>
                        <Card.Text> Whatsapp: {proveedor.whatsapp} </Card.Text>
                        <Card.Text> Twitter: {proveedor.twitter} </Card.Text>
                        <Card.Text> Facebook: {proveedor.facebook} </Card.Text>
                        <Card.Text> linkedin: {proveedor.linkedin} </Card.Text>
                        <Card.Text> Instagram: {proveedor.onstagram} </Card.Text>

                        
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

export default CardView;
