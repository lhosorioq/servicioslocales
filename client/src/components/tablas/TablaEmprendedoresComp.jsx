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
import DataEmprendedorComp from './DataEmprendedorComp';

function TablaProveedoresComp() {
    const [proveedores, setProveedores] = useState(null);
    const usuarioEditar = useRef({});
    const visible = useRef(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    // tabla nueva
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const [filters, setFilters] = useState([true, false]);

    const handleFilter = (filter) => {
        filters.includes(filter)
            ? setFilters(filters.filter((value) => value !== filter))
            : setFilters(filters.concat(filter));
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

    const params = {
        actividad: '',
        departamento: '',
        ciudad: '',
        nombre: '',
    };

    const cabezeras = [
        'Nombre',
        'Actividad',
        'Ciudad',
        'visible',
        'Accion',
    ];

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

    const loadProveedores = async (param) => {
        await Axios.post('proveedor/filter/', param)
            .then((response) => {
                setProveedores(response.data.proveedores);
                handleClose();
            })
            .catch((err) => {
                console.log(err);
            });
        return proveedores;
    };

    const carga = async (id) => {
        const data = new FormData();
        data.append('img', '');
        data.append('nombre', '');
        data.append('telefono', '');
        data.append('mail', '');
        data.append('password', '');
        data.append('actividad', '');
        data.append('direccion', '');
        data.append('msg_description', '');
        data.append('departamento', '');
        data.append('ciudad', '');
        data.append('visible', visible.current);

        const token = 'Bearer ' + sessionStorage.getItem('token');

        await Axios.put(`/admin/updateemprendedor/${id}`, data, {
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
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: response.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    loadProveedores(params);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const cambiarVisible = (id, v) => {
        visible.current = !v;
        carga(id);
    };

    const deleteEmprendedor = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        const id = usuarioEditar.current._id;
        await Axios.delete(`/admin/deleteemprendedor/${id}`, {
            headers: { Authorization: token },
        })
            .then((response) => {
                alerta(response.data.mensaje, 'success');
            })
            .catch((err) => {
                console.log(err);
            });
        return proveedores;
    };

    useEffect(() => {
        if (!proveedores) {
            loadProveedores(params);
        }
    });

    if (proveedores) {
        const datos = {
            nodes: proveedores.filter(
                (item) =>
                    (filters.includes(true) &&
                        item.visible === true &&
                        (item.nombre
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                            item.actividad
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            item.ciudad
                                .toLowerCase()
                                .includes(search.toLowerCase()))) ||
                    (filters.includes(false) &&
                        item.visible === false &&
                        (item.nombre
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                            item.actividad
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            item.ciudad
                                .toLowerCase()
                                .includes(search.toLowerCase())))
            ),
        };

        return (
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <label htmlFor="search" style={{ margin: '15px' }}>
                            Search:{' '}
                            <input
                                id="search"
                                type="text"
                                onChange={handleSearch}
                            />
                        </label>
                    </Col>
                    <Col>
                        <div>
                            <label htmlFor="name">
                                Visible Si:
                                <input
                                    id="setup"
                                    type="checkbox"
                                    checked={filters.includes(true)}
                                    onChange={() => handleFilter(true)}
                                />
                            </label>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <label htmlFor="type">
                                Visible No:
                                <input
                                    id="learn"
                                    type="checkbox"
                                    checked={filters.includes(false)}
                                    onChange={() => handleFilter(false)}
                                />
                            </label>
                        </div>
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
                                {tableList.map((emprendedor, index) => (
                                    <Row key={index} item={emprendedor}>
                                        <Cell>{index + 1} </Cell>
                                        <Cell> {emprendedor.nombre} </Cell>
                                        {/* <Cell> {emprendedor.mail} </Cell> */}
                                        <Cell>{emprendedor.actividad} </Cell>
                                        {/* <Cell>{emprendedor.telefono} </Cell> */}
                                        <Cell>{emprendedor.ciudad} </Cell>
                                        <Cell>
                                            {/* <Row> */}
                                                <i
                                                    as="button"
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    className="fas fa-check-circle"
                                                    onClick={() =>
                                                        cambiarVisible(
                                                            emprendedor._id,
                                                            emprendedor.visible
                                                        )
                                                    }
                                                ></i>

                                                <Col>
                                                    {emprendedor.visible
                                                        ? 'Si'
                                                        : 'No'}
                                                </Col>
                                            {/* </Row> */}
                                        </Cell>
                                        <Cell>
                                            {/* <Row> */}
                                                <Col>
                                                    <Button
                                                        className="m-1"
                                                        variant="outline-success"
                                                        size="sm"
                                                        onClick={() =>
                                                            handleShow2(
                                                                emprendedor
                                                            )
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
                                                            handleShow(
                                                                emprendedor
                                                            )
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
                        <Modal.Title>Eliminar Emprendedor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Esta seguro que desea eliminar el Emprendedor{' '}
                        {usuarioEditar.current.nombre}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={() => deleteEmprendedor()}
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
                        <Modal.Title>Editar Emprendedor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DataEmprendedorComp
                            emprendedor={usuarioEditar.current}
                            loadEmprendedor={() => loadProveedores(params)}
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

export default TablaProveedoresComp;
