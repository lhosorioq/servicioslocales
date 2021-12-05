import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { URL } from '../libs/url';
import Swal from 'sweetalert2';

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

    const likes = async () => {

        const data = proveedor.likes + 1

        const token = 'Bearer ' + sessionStorage.getItem('token');

        await Axios.put(`/user/likes/${proveedor._id}`, data, {
            headers: { Authorization: token },
        })
            .then((response) => {
                const auth = response.data.auth;
                if (!auth) {
                    Swal.fire({
                        icon: 'error',
                        title: 'No tiene permiso para esto',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: response.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    loadProveedor();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const doesnotlikes = async () => {
        const data = proveedor.doesnotlikes + 1;

        const token = 'Bearer ' + sessionStorage.getItem('token');

        await Axios.put(`/user/likes/${proveedor._id}`, data, {
            headers: { Authorization: token },
        })
            .then((response) => {
                const auth = response.data.auth;
                if (!auth) {
                    Swal.fire({
                        icon: 'error',
                        title: 'No tiene permiso para esto',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: response.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    loadProveedor();
                }
            })
            .catch((err) => {
                console.log(err);
            });
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
                        <Card.Text> Telefono: {proveedor.telefono1} </Card.Text>
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
