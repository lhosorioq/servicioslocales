import React, { useState } from 'react';
import {
    Navbar,
    Form,
    FormControl,
    Button,
    Nav,
    Container,
} from 'react-bootstrap';
import { Categorias, Departamentos, Ciudades } from '../libs/search.lib';

function SearchComp(props) {
    const { loadProveedores } = props;

    const [actividad, setActividad] = useState('Categorias');
    const [departamento, setDepartamento] = useState('Departamentos');
    const [ciudad, setCiudad] = useState('Ciudades');
    const [nombre, setNombre] = useState('');

    // Boton Buscar
    const load = () => {
        const param1 = actividad === 'Categorias' ? '' : actividad;
        const param2 = departamento === 'Departamentos' ? '' : departamento;
        const param3 = ciudad === 'Ciudades' ? '' : ciudad;
        const param = {
            actividad: param1,
            departamento: param2,
            ciudad: param3,
            nombre,
        };
        loadProveedores(param);
    };

    // Evento de select departamentos
    const loadCiudad = async (event) => {
        setDepartamento(event);
        setCiudad(Ciudades[await Departamentos.indexOf(departamento)][0]);
    };

    // Creacion de options para selects
    const options = (item, i) => (
        <option key={i} value={item}>
            {item}
        </option>
    );
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="info"
                variant="dark"
                sticky="top"
                style={{top: 0}}
            >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <select
                                className="form-select m-1"
                                value={actividad}
                                onChange={(e) => setActividad(e.target.value)}
                            >
                                {Categorias.map((item, i) => options(item, i))}
                            </select>
                            <select
                                className="form-select m-1"
                                value={departamento}
                                onChange={(e) => loadCiudad(e.target.value)}
                            >
                                {Departamentos.map((item, i) =>
                                    options(item, i)
                                )}
                            </select>
                            <select
                                className="form-select m-1"
                                value={ciudad}
                                onChange={(e) => setCiudad(e.target.value)}
                            >
                                {Ciudades[
                                    Departamentos.indexOf(departamento)
                                ].map((item, i) => options(item, i))}
                            </select>
                        </Nav>
                        <Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2"
                                    aria-label="Buscar"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <Button
                                    variant="outline-primary"
                                    onClick={load}
                                >
                                    Search
                                </Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default SearchComp;
