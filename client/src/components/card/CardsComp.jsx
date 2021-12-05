import React, { useState, useEffect, useRef } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Link, Router } from 'react-router-dom';
import CardView from '../../views/CardView';
import { URL } from '../libs/url';

function HomeView(props) {
    const { data } = props;
    const uri = URL + `/proveedor/imagen/`;
    const [emprendedores, setEmprendedores] = useState(null);
    const [visible, setVisible] = useState(false);
    const emprendedorEditar = useRef(null);

    useEffect(() => {
        loadEmprendedores();
    });

    const loadEmprendedores = () => {
        setEmprendedores(data);
    };

    const viewProveedor = (item) => {
        emprendedorEditar.current = item;
        setVisible(true);
    };

    if (emprendedores) {
        return (
            <Container className="mt-4">
                <Row className="g-4">
                    {emprendedores.map((emprendedor, i) => {
                        return (
                            <Col className="mt-2" key={emprendedor._id}>
                                <Card
                                    style={{ width: '20rem' }}
                                    className="mb-4 shadow p-3 mb-5 bg-white rounded"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={uri + emprendedor._id}
                                    />
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
                                            Servicio: {
                                                emprendedor.actividad
                                            }{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Email: {emprendedor.mail}{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Direccion: {
                                                emprendedor.direccion
                                            }{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Telefono: {
                                                emprendedor.telefono
                                            }{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Ciudad: {emprendedor.ciudad}{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Departamento:{' '}
                                            {emprendedor.departamento}{' '}
                                        </Card.Text>
                                        <Link to={`/card/${emprendedor._id}`}>
                                            Ver mas...
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                {visible ? (
                    <Link to={`/card/${emprendedorEditar.current}`}></Link>
                ) : null}
            </Container>
        );
    }
    return (
        <div className="container" style={{ height: '500px' }}>
            <h1>No hay resultados de Busqueda</h1>
        </div>
    );
}

HomeView.propTypes = {};

export default HomeView;
