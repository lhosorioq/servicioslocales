import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Col, Row, Card, CardImg, ProgressBar } from 'react-bootstrap';

import { URL } from '../libs/url';
import { MainLayout } from '../assets/Styles/Layouts';
import Title from '../components/Titulos/Title';
import DataClienteComp from '../components/tablas/DataClienteComp';

export const DataClienteView = () => {
    const [cliente, setCliente] = useState(null);
    const id = sessionStorage.getItem('id');
    const uri = URL + `/user/imagen/`;
    const token = 'Bearer ' + sessionStorage.getItem('token');

    const loadCliente = async () => {
        if (!cliente) {
            await Axios.get(`/user/${id}`, {
                headers: { Authorization: token },
            })
                .then((response) => {
                    const auth = response.data.auth;
                    if (!auth) {
                        Swal.fire({
                            icon: 'error',
                            title: response.data.mensaje,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        setTimeout(() => {
                            sessionStorage.clear();
                            window.location.href = '/';
                        }, 1500);
                    }
                    setCliente(response.data.register);
                })
                .catch((err) => {
                    console.log(err);
                });
            return cliente;
        }
    };

    useEffect(() => {
        loadCliente();
    });

    if (cliente) {
        return (
            <MainLayout>
                <Title title={'Datos de Cliente'} span={'Datos de Clientes'} />
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <Row>
                    <Col md={4}>
                        <Card className="mb-4 shadow mb-5 rounded">
                            <CardImg variant="top" src={uri + cliente._id} />
                            <Card.Body>
                                <Card.Text>{cliente.nombre}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={8}>
                        <DataClienteComp
                            cliente={cliente}
                            loadCliente={() => loadCliente()}
                        />
                    </Col>
                </Row>
            </MainLayout>
        );
    }
    return (
        <div
            className="container"
            style={{ height: '500px', marginTop: '20px' }}
        >
            <h2>Cargando Datos</h2>
            <ProgressBar animated now={45} />
        </div>
    );
};
