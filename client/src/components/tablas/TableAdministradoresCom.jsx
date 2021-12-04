import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {
    Col,
    ProgressBar,
    Row,
    Table,
    Button,
    Modal,
    Container,
} from 'react-bootstrap';
import FormularioDataAdminComp from './FormularioDataAdminComp';

function TableAdministradoresCom() {
    const [admins, setAdmins] = useState(null);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const adminEditar = useRef({ nombre: '', user: '', password: '' });

    const alerta = (mensaje, icon) => {
        Swal.fire({
            icon: icon,
            title: mensaje,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const editar = (admin) => {
        adminEditar.current = admin;
        setShow1(true);
    };

    const guardarEdicion = async (values) => {

        const { nombre, user, password } = values;
        const data = { nombre, user, password };
        const token = 'Bearer ' + sessionStorage.getItem('token');
        await Axios.put(`/admin/update/${adminEditar.current._id}`, data, {
            headers: { Authorization: token },
        })
            .then((response) => {
                alerta(response.data.mensaje, 'success');
            })
            .catch((err) => {
                console.log(err);
            });
        loadAdmins();
        closeShow();
    };

    const modalRegistro = () => {
        adminEditar.current.nombre = '';
        adminEditar.current.user = '';
        adminEditar.current.password = '';
        setShow3(true);
    };
    const crearAdmin = async (values) => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        await Axios.post(`/admin/create/`, values, {
            headers: { Authorization: token },
        })
            .then((response) => {
                alerta(response.data.mensaje, 'success');
            })
            .catch((err) => {
                console.log(err);
            });
        loadAdmins();
        closeShow();
    };

    const eliminar = (values) => {
        adminEditar.current = values;
        setShow2(true);
    };

    const closeShow = () => {
        setShow1(false);
        setShow2(false);
        setShow3(false);
    };

    const loadAdmins = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');

        await Axios.get('/admin/find/', {
            headers: { Authorization: token },
        })
            .then((response) => {
                setAdmins(response.data.admins);
            })
            .catch((err) => {
                console.log(err);
            });
        return admins;
    };

    const deleteAdmin = async () => {

        const token = 'Bearer ' + sessionStorage.getItem('token');

        await Axios.delete(`/admin/delete/${adminEditar.current._id}`, {
            headers: { Authorization: token },
        })
            .then((response) => {
                alerta(response.data.mensaje, 'success');
            })
            .catch((err) => {
                console.log(err);
            });
        loadAdmins();
        closeShow();
    };

    useEffect(() => {
        if (!admins) {
            loadAdmins();
        }
    });

    if (admins) {
        return (
            <Container>
                <Row>
                    <Col
                        md={{ span: 4, offset: 8 }}
                        style={{ marginBottom: '50px' }}
                        className="d-grid gap-2"
                    >
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={() => modalRegistro()}
                        >
                            Agregar Administrador
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{admin.nombre} </td>
                                        <td>{admin.user}</td>
                                        <td>
                                            <Row>
                                                <Col
                                                    md={2}
                                                    className="d-grid gap-2"
                                                >
                                                    <i
                                                        as="button"
                                                        style={{
                                                            cursor: 'pointer',
                                                        }}
                                                        className="fas fa-edit"
                                                        onClick={() =>
                                                            editar(admin)
                                                        }
                                                    ></i>
                                                </Col>
                                                <Col
                                                    md={2}
                                                    className="d-grid gap-2"
                                                >
                                                    <i
                                                        as="button"
                                                        style={{
                                                            cursor: 'pointer',
                                                        }}
                                                        className="fas fa-trash"
                                                        onClick={() =>
                                                            eliminar(admin)
                                                        }
                                                    ></i>
                                                </Col>
                                            </Row>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    {/* Editar */}
                    <Modal size="lg" show={show1} onHide={closeShow}>
                        <FormularioDataAdminComp
                            admin={adminEditar.current}
                            tittle="Editar Administrador"
                            button="Guardar"
                            cargar={guardarEdicion}
                            closeShow={() => closeShow()}
                        />
                    </Modal>

                    {/* Eliminar */}
                    <Modal show={show2} onHide={closeShow}>
                        <Modal.Header closeButton>
                            <Modal.Title>Eliminar Emprendedor</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Esta seguro que desea eliminar el Administrador{' '}
                            {adminEditar.current.nombre}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="danger"
                                onClick={() => deleteAdmin()}
                            >
                                Eliminar
                            </Button>
                            <Button variant="primary" onClick={closeShow}>
                                Cancelar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Crear Administrador */}
                    <Modal size="lg" show={show3} onHide={closeShow}>
                        <FormularioDataAdminComp
                            admin={adminEditar.current}
                            tittle="Crear Administrador"
                            button="Registrar"
                            cargar={crearAdmin}
                            closeShow={() => closeShow()}
                        />
                    </Modal>
                </Row>
            </Container>
        );
    }

    return (
        <>
            <div className="container" style={{ height: '400px' }}>
                <ProgressBar animated now={45} />
            </div>
        </>
    );
}

export default TableAdministradoresCom;
