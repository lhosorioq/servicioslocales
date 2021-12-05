import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Container, Card } from 'react-bootstrap';
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
                <Card
                    style={{ width: '20rem' }}
                    className="mb-4 shadow p-3 mb-5 bg-white rounded"
                >
                    <Card.Img variant="top" src={uri + proveedor._id} />
                    <Card.Body>
                        <Card.Title> {proveedor.nombre} </Card.Title>
                        <Card.Text> {proveedor.msg_description} </Card.Text>
                        <Card.Text> Servicio: {proveedor.actividad} </Card.Text>
                        <Card.Text> Email: {proveedor.mail} </Card.Text>
                        <Card.Text>
                            {' '}
                            Direccion: {proveedor.direccion}{' '}
                        </Card.Text>
                        <Card.Text> Telefono: {proveedor.telefono} </Card.Text>
                        <Card.Text> Ciudad: {proveedor.ciudad} </Card.Text>
                        <Card.Text>
                            {' '}
                            Departamento: {proveedor.departamento}{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
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
