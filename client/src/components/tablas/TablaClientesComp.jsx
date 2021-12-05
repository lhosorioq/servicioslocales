import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Button, Modal, Col, Container, ProgressBar } from 'react-bootstrap';
import {
    Table,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import Swal from 'sweetalert2';
import DataClienteComp from './DataClienteComp';

function TablaClientesComp() {
    const [clientes, setClientes] = useState(null);
    const usuarioEditar = useRef({});
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    // tabla nueva
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const theme = useTheme({
        Table: `
        margin-top: 20px;
      `,
        BaseRow: `
        color: #212529;
        &:hover {
          color: #212529;
          cursor: default;
        }
        // height: 40px;
        font-size: 16px;
        border-bottom: 1px solid #000000;
      `,
        HeaderRow: `
        font-weight: bold;
      `,
        Row: `
        border-bottom: 1px solid #dee2e6;
      `,
        BaseCell: `
        border-right: 1px solid transparent;
      `,
        Cell: `
      	&:nth-child(1) {
          font-weight: bold;
        }
      `,
    });

    const cabezeras = ['Nombre', 'Correo', 'Ciudad', 'visible'];

    const handleClose = () => {
        setShow(false);
        setShow2(false);
    };

    const handleShow = (item) => {
        usuarioEditar.current = item;
        setShow(true);
    };

    const handleShow2 = (item) => {
        usuarioEditar.current = item;
        setShow2(true);
    };

    const alerta = (mensaje, icon) => {
        Swal.fire({
            icon: icon,
            title: mensaje,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const loadClientes = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        await Axios.get('user/all', {
            headers: { Authorization: token },
        })
            .then((response) => {
                setClientes(response.data.usuarios);
                handleClose();
            })
            .catch((err) => {
                console.log(err);
            });
        return clientes;
    };

    const deleteCliente = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        const id = usuarioEditar.current._id;
        await Axios.delete(`/user/delete/${id}`, {
            headers: { Authorization: token },
        })
            .then((response) => {
                alerta(response.data.mensaje, 'success');
            })
            .catch((err) => {
                console.log(err);
            });
        return clientes;
    };

    useEffect(() => {
        if (!clientes) {
            loadClientes();
        }
    });

    if (clientes) {
        const datos = {
            nodes: clientes.filter(
                (item) =>
                    (item.nombre.toLowerCase().includes(search.toLowerCase()) ||
                    item.ciudad.toLowerCase().includes(search.toLowerCase()))
            ),
        };

        return (
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <label htmlFor="search2" style={{ margin: '15px' }}>
                            Search:{' '}
                            <input
                                id="search2"
                                type="text"
                                onChange={handleSearch}
                            />
                        </label>
                    </Col>
                </Row>

                <Table data={datos} theme={theme}>
                    {(tableList) => (
                        <>
                            <Header>
                                <HeaderRow>
                                    <HeaderCell>#</HeaderCell>
                                    {cabezeras.map((tittle, index) => (
                                        <HeaderCell key={index}>
                                            {tittle}
                                        </HeaderCell>
                                    ))}
                                </HeaderRow>
                            </Header>
                            <Body>
                                {tableList.map((cliente, index) => (
                                    <Row key={index} item={cliente}>
                                        <Cell>{index + 1} </Cell>
                                        <Cell> {cliente.nombre} </Cell>
                                        {/* <Cell> {emprendedor.mail} </Cell> */}
                                        <Cell>{cliente.email} </Cell>
                                        {/* <Cell>{emprendedor.telefono} </Cell> */}
                                        <Cell>{cliente.ciudad} </Cell>

                                        <Cell>
                                            {/* <Row> */}
                                            <Col>
                                                <Button
                                                    className="m-1"
                                                    variant="outline-success"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleShow2(cliente)
                                                    }
                                                >
                                                    Editar
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button
                                                    className="m-1"
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleShow(cliente)
                                                    }
                                                >
                                                    Eliminar
                                                </Button>
                                            </Col>
                                            {/* </Row> */}
                                        </Cell>
                                    </Row>
                                ))}
                            </Body>
                        </>
                    )}
                </Table>
                {/* Eliminar */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Esta seguro que desea eliminar el Cliente{' '}
                        {usuarioEditar.current.nombre}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={() => deleteCliente()}
                        >
                            Eliminar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* Editar */}
                <Modal
                    size="lg"
                    show={show2}
                    onHide={handleClose}
                    style={{ height: '600px' }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DataClienteComp
                            cliente={usuarioEditar.current}
                            loadCliente={() => loadClientes()}
                        />
                    </Modal.Body>
                </Modal>
            </Container>
        );
    }

    return (
        <div className="container" style={{ height: '500px' }}>
            <h1>Cargando Datos</h1>
            <ProgressBar animated now={65} />
        </div>
    );
}

export default TablaClientesComp;
