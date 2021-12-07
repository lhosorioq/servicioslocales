import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {
    Card,
    Col,
    Row,
    ProgressBar,
    Modal,
    Button,
} from 'react-bootstrap';
import DataEmprendedorComp from '../components/proveedor/DataEmprendedorComp';
import Title from '../components/Titulos/Title';
import Swal from 'sweetalert2';
import { URL } from '../libs/url';
import { MainLayout } from '../assets/Styles/Layouts';

function DataEmprendedorView() {
    const [emprendedor, setEmprendedor] = useState(null);
    const [show, setShow] = useState(false);
    const id = sessionStorage.getItem('id');
    const [url, setUrl] = useState(`${URL}/proveedor/imagen/${id}`);

    const reload = () => {
        // window.location.reload() // Esto con el fin de que se actualice la imagen cunado es cambiada buscar otro metodo
        url === `${URL}/proveedor/imagen/${id}`
            ? setUrl(`${URL}/user/proveedorimg/${id}`)
            : setUrl(`${URL}/proveedor/imagen/${id}`);
    };

    const cambiar = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        await Axios.get(`/proveedor/find/${id}`, {
            headers: { Authorization: token },
        })
            .then((response) => {
                setEmprendedor(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        return emprendedor;
    };

    const loadEmprendedor = async () => {
        if (!emprendedor) {
            const token = 'Bearer ' + sessionStorage.getItem('token');
            await Axios.get(`/proveedor/find/${id}`, {
                headers: { Authorization: token },
            })
                .then((response) => {
                    setEmprendedor(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            return emprendedor;
        }
    };

    const handleClose = () => {
        setShow(false);
    };

    const eliminar = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        await Axios.delete(`/proveedor/delete/${id}`, {
            headers: { Authorization: token },
        })
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: response.data.mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                });
                sessionStorage.clear();
                window.location.href = '/';
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        loadEmprendedor();
    });

    if (emprendedor) {
        return (
            
                <MainLayout>
                    <Row>
                        <Title
                            title={'Datos Proveedor'}
                            span={'Datos Proveedor'}
                        />
                    </Row>
                    <Row style={{ marginTop: '100px' }}>
                        <Col>
                            <Card
                                className="mb-4 shadow p-3 mb-5 bg-white rounded"
                                style={{ width: '25rem' }}
                            >
                                <Card.Img variant="top" src={url} />
                                <Card.Body>
                                    <Card.Title>
                                        {' '}
                                        {emprendedor.nombre}{' '}
                                    </Card.Title>
                                    <Card.Text>
                                        {' '}
                                        {emprendedor.msg_description}{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        {' '}
                                        Servicio: {emprendedor.actividad}{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        {' '}
                                        Ciudad: {emprendedor.ciudad}{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        {' '}
                                        Me gusta: {emprendedor.likes}{' '}
                                    </Card.Text>

                                    <Link to={`/card/${emprendedor._id}`}>
                                        Ver mas...
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <DataEmprendedorComp
                                emprendedor={emprendedor}
                                loadEmprendedor={() => cambiar()}
                                url={() => reload()}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            md={{ span: 2, offset: 10 }}
                            className="d-grid gap-2"
                            style={{ marginBottom: '50px', marginTop: '20px' }}
                        >
                            <i
                                className="fas fa-user-slash"
                                onClick={() => setShow(true)}
                            >
                                {' '}
                                Eliminar Cuenta
                            </i>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Eliminar Emprendedor</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Esta seguro que desea eliminar su cuenta de
                            Emprendedor {emprendedor.nombre}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={() => eliminar()}>
                                Eliminar
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Cancelar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </MainLayout>
        
        );
    }
    return (
        <div className="container" style={{ height: '500px', marginTop: '20px' }}>
            <h2>Cargando Datos</h2>
            <ProgressBar animated now={45} />
        </div>
    );
}

export default DataEmprendedorView;
